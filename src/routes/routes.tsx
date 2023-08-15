import { createBrowserRouter } from "react-router-dom";
// pages
import Home from "../pages/home/Home";
import Objects from "../pages/objects/Objects";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/objects",
        element: <Objects />
    }
])