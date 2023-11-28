import React from 'react';
import SideNav from '../SideNav/SideNav';
import CourseItem from '../CourseItem/CourseItem';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div className='flex'>
            <div className='bg-base-200'>
                <SideNav></SideNav>
            </div>
            <div className='flex-grow px-5 md:px-10 lg:px-20'>
                <h1 className='text-center text-xl md:text-3xl lg:text-5xl font-semibold py-2'>Our Courses</h1>
                <hr className='w-5/6 mx-auto mb-20' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10'>
                    {
                        courses.map(course => <CourseItem
                            key={course.id}
                            course={course}
                        ></CourseItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;