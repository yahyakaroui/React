import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import React from 'react'
import NotFound from './pages/NotFound'

function homeLoader() {
  return 'hello from home loader'
}

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Events = React.lazy(() => import('./components/Events'))
const EventDetails = React.lazy(() => import('./components/EventDetails'))
const AddEvent = React.lazy(() => import('./components/AddEvent'))
const UpdateEvent = React.lazy(() => import('./components/UpdateEvent'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: '/about/:username',
        element: <About />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/events/new',
        element: <AddEvent />,
      },
      {
        path: '/events/:id',
        element: <EventDetails />,
      },
      {
        path: '/events/:id/edit',
        element: <UpdateEvent />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
