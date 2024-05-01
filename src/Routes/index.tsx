import { createBrowserRouter } from "react-router-dom";
import App from "../Pages/App";
import { SobreMi } from "../Pages/SobreMi";
import { Curriculum } from "../Pages/Curriculum";
import { Portafolio } from "../Pages/Portafolio";
import { Contacto } from "../Pages/Contacto";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App/>,
    },

    {
        path: '/SobreMi',
        element: <SobreMi/>
    },

    {
        path: '/Curriculum',
        element: <Curriculum/>
    },

    {
        path: '/Portafolio',
        element: <Portafolio/>
    },

    {
        path: '/Contacto',
        element: <Contacto/>
    }

]);