import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ui.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {router} : hedha router elly sna3neh injectineh houni */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
