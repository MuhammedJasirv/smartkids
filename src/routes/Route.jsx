import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import Test from "../pages/Test";
import About from "../pages/About";
import CommonLayout from "../layout/CommonLayout";
import Contact from "../pages/Contact";
import Parents from "../pages/Parents";




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
        path:"/about",
        element:<CommonLayout/>,
        children:[
            {
                index:true,
                element:<About/>
            }
        ]
    },
    {
        path:"/contact",
        element:<CommonLayout/>,
        children:[
            {
                index:true,
                element:<Contact/>
            }
        ]
    },
    {
        path:"/parents",
        element:<CommonLayout/>,
        children:[
            {
                index:true,
                element:<Parents/>
            }
        ]
    },
    {
        path:"/test",
        element:<CommonLayout/>,
        children:[
            {
                index:true,
                element:<Test/>
            }
        ]
    },
])