import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Branding from "../Pages/Home/Branding/Branding";
import Contact from "../Pages/Home/Contact/Contact";
import Home from '../Pages/Home/Home'
import Allworks from "../Pages/Home/MyWorks/AllWorks/Allworks";
import Skills from "../Pages/Home/Skills/Skills";
import ProjectsDetails from "../Pages/ProjectsDetails/ProjectsDetails";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>
    },
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/projects',
                element:<Allworks/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }, 
            {
                path:"/about",
                element:<Branding/>
            },
            {
                path:"/skill",
                element:<Skills/>
            },
            {
                path:"/blog",
                element:<Blogs/>
            },
            {
                path:'/details/:id',
                loader:({params})=>fetch(`https://porfolio-server.vercel.app/project/${params.id}`),
                element:<ProjectsDetails/>
            }
        ]
    },
    {
        
    }
])