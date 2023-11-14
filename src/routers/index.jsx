import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/inedx";
import About from "../pages/about";
import Blog from "../pages/blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    },
])