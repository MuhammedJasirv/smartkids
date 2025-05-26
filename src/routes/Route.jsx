import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Test from "../pages/Test";




export const router =createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    },
    {
        path:'/test',
        element:<Test/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    }
])