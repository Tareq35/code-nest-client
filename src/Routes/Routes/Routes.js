import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Courses/Courses/Courses";
import Blogs from "../../Pages/Blogs/Blogs/Blogs";
import Faq from "../../Pages/Faq/Faq/Faq";
import Category from "../../Pages/Courses/Category/Category";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";

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
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/coursesCategory/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/coursesCategory/${params.id}`)
            },
            {
                path: '/courseDetails',
                element:<CourseDetails></CourseDetails>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
        ]
    }
])