import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from '../../../Components/Button';

const CourseDetails = () => {
    const course = useLoaderData();
    const { title, description, img, price, id } = course;
    return (
        <div className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto my-10'>
            <div className="card lg:card-side bg-base-100 shadow-2xl mb-5">
                <figure className='lg:w-[40%] lg:h-96'><img className='' src={img} alt="Album" /></figure>
                <div className="card-body lg:w-[60%]">
                    <div className='flex justify-between items-center mb-5'>
                        <h2 className="card-title text-xl md:text-3xl lg:text-4xl">{title}</h2>
                        <Button name='Download PDF' />
                    </div>
                    <p>{description}</p>
                    <div className="card-actions justify-between items-center">
                        <h4 className='text-2xl font-semibold'>${price}</h4>
                        <Link to={`/checkout/${id}`}>
                            <Button name='Get premium access' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;