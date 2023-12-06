import React from 'react';
import image from '../../Assets/images/404.jpeg'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div className='w-1/2 my-20 mx-auto'>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className='ml-5'>Return <Link className='text-green-600' to="/">Home</Link></h4>
            </div>
        </div>
    );
};

export default PageNotFound;