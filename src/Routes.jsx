
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import React from "react";
import NotFound from "./pages/NotFound";
import EventDetails from "./components/EventDetails";
function homeLoader() {
  console.log("home loader");
  return "hello from home loader";
}

// lazy loading
// Pages chargées dynamiquement
const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Events = React.lazy(() => import("./components/Events"));
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true, // c'est la route par défaut qui s'affiche quand on est à la racine du site
                element: <Home />,loader: homeLoader
            },
            {
                //root paramétré
                path: "/about/:username",
                element: <About />
            },
            {
                path: "/events",
                element: <Events />
            },
            {
                path: "/events/:eventName",
                element: <EventDetails />
            },
            //route non définie dima lezemha e5er wa7da fyl les routes ba3dha ma n7ot chy
            {
                path: "*",
                element:<NotFound />
            }
        ]
    }
])