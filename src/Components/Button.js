import React from 'react';

const Button = ({className, name, type, icon, ...props }) => {
    return (
        <button className={`${type === 'danger' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} btn-xs md:btn-sm lg:btn-md text-white text-xs md:text-base font-bold py-1 lg:py-3 px-4 rounded-md uppercase transition-transform transform hover:scale-105 ease-in-out flex justify-center items-center gap-4 ${className}`} {...props} >

            {icon}

            {name}
        </button>
    );
};

export default Button;