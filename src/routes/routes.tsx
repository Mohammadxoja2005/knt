import { createBrowserRouter } from "react-router-dom";
// pages
import Home from "../pages/home/Home";
import Objects from "../pages/objects/Objects";
import ObjectCart from "../pages/objectCart/ObjectCart";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/objects",
        element: <Objects />
    },
    {
        path: "/cart/1",
        element: <ObjectCart />
    }
])