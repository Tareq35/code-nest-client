import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import toast from 'react-hot-toast';

const CheckOut = () => {
    const course = useLoaderData();
    const { title, price, img } = course;

    const navigate = useNavigate();

    return (
        <div className='my-10'>
            <h2 className='text-2xl md:text-3xl lg:text-5xl text-center mb-5 font-semibold'>Shopping Cart</h2>
            <hr className='w-4/5 md:w-2/3 mx-auto' />
            <div className="w-[95%] md:w-[80%] mx-auto mt-10 card card-side bg-base-200 shadow-2xl">
                <figure className='w-1/4'><img src={img} alt="Movie" /></figure>
                <div className="card-body px-1 md:px-8 w-3/4 flex-row justify-between">
                    <div className='flex-col my-auto'>
                        <h2 className="card-title text-xl md:text-2xl lg:text-4xl">{title}</h2>
                        <p className='text-base md:text-xl lg:text-2xl font-semibold'>Price: ${price}</p>
                    </div>
                    <div className="card-actions flex items-center gap-1 md:gap-2">
                        <Button onClick={() => {
                            toast.success('Your Premium Access Confirmed');
                            navigate('/', { replace: true })
                        }} name='Confirm' />
                        <Button onClick={() => {
                            toast.error('Your Premium Access Cancelled');
                            navigate('/courses', { replace: true })
                        }} name='Cancel' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;