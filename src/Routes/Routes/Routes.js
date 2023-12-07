import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses/Courses";
import Blogs from "../../Pages/Blogs/Blogs/Blogs";
import Faq from "../../Pages/Faq/Faq/Faq";
import Category from "../../Pages/Courses/Category/Category";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRout/PrivateRoute";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://code-nest-server.vercel.app/courses')
            },
            {
                path: '/coursesCategory/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://code-nest-server.vercel.app/coursesCategory/${params.id}`)
            },
            {
                path: '/coursesDetails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://code-nest-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <CheckOut></CheckOut>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://code-nest-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },
        ]
    }
])