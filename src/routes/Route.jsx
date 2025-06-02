import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Test from "../pages/Test";
import About from "../pages/About";
import CommonLayout from "../layout/CommonLayout";




export const router =createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
                index:true,
                element:<Test/>
            }
        ]
    },
    {
        path:"/about",
        element:<CommonLayout/>,
        children:[
            {
                index:true,
                element:<About/>
            }
        ]
    },
])