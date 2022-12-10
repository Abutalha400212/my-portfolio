import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Branding from "../Pages/Home/Branding/Branding";
import Contact from "../Pages/Home/Contact/Contact";
import Home from '../Pages/Home/Home'
import Allworks from "../Pages/Home/MyWorks/AllWorks/Allworks";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:"/branding",
                element:<Branding/>
            },
            {
                path:'/projects',
                element:<Allworks/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    },
    {
        
    }
])