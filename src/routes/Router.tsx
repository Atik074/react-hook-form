import { createBrowserRouter } from "react-router-dom";
 import MainLayout from "../components/layout/MainLayout";

const router = createBrowserRouter([

     { path:"/" ,
        element:<MainLayout/> ,
        children:[

            {
                index:true,
                element:<p></p>
            }
        ]
     }

])


export default router ;