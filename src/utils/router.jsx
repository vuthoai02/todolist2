import { createBrowserRouter } from "react-router-dom";

import Tasks from "../pages/tasks";

export const router = createBrowserRouter([
    {
       path:'/',
       element: <Tasks />, 
    }
]);