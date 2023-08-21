import {createBrowserRouter} from 'react-router-dom';
import Portafolio from '../Pages/App';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Portafolio/>,
    },
]);