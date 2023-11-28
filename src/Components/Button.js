import React from 'react';

const Button = ({ children, className, style }) => {
    return (
        <button className={`bg-green-500 btn-xs md:btn-sm lg:btn-md hover:bg-green-600 text-white text-xs md:text-base font-bold py-1 lg:py-3 px-4 rounded-md uppercase transition-transform transform hover:scale-105 ease-in-out ${className}`}>
            {children}
        </button>
    );
};

export default Button;