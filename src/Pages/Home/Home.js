import React from 'react';
import coverImg from '../../Assets/images/cover.jpg';
import Button from '../../Components/Button';
import { BsSlashLg } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <div className='w-full h-[80vh] flex justify-center items-center mb-1'
                    style={{
                        width: '100%',
                        height: '80vh',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        backgroundImage: `url(${coverImg})`
                    }}>

                    <div className='w-1/2 h-3/4 md:h-1/2 text-center'>
                        <h2 className='text-lime-100 text-2xl md:text-5xl font-bold mb-2 md:mb-3'>Welcome To Code<span className='text-green-600'>Nest</span></h2>
                        <h4 className='text-white text-md md:text-xl font-semibold mb-2'>The best learning platform like you've never experienced before</h4>
                        <p className='text-white text-sm md:text-base mb-4 md:mb-6 lg:mb-10'>Empower yourself with world-class courses from educators and institutions in a practical and social learning environment.Expert-led courses across a variety of online class topics for every step of your career.</p>
                        {/* <Link to="/courses"><Button>Visit Courses</Button></Link> */}
                        <Link to="/courses"><Button name='Visit Courses'  /></Link>
                    </div>
                </div>
            </div>


            <div className='w-full h-20 md:h-40 bg-green-300 flex text-xs sm:text-sm md:text-base items-center justify-center gap-3 p-5 tracking-widest font-semibold uppercase font-sans'>
                <span>HTML</span>
                <BsSlashLg />
                <span>CSS</span>
                <BsSlashLg />
                <span>React</span>
                <BsSlashLg />
                <span>JavaScript</span>
                <BsSlashLg />
                <span>Python</span>
            </div>
        </div>
    );
};

export default Home;