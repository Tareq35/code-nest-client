import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Button';

const CourseItem = ({ course }) => {
    const { title, description, img, price, id } = course;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className='h-[45%]'><img className='h-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-base md:text-lg lg:text-2xl">{title}</h2>
                <p className='text-xs md:text-base lg:text-lg line-clamp-3 mb-3'>{description}</p>
                <div className="card-actions justify-between items-center">
                    <h4 className='text-base md:text-lg lg:text-xl font-semibold'>${price}</h4>
                    <Link><Button>Details</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;