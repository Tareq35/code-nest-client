import React from 'react';
import logo from '../../../Assets/logo/code-nest.png'
import { Link } from 'react-router-dom';
import { BsTwitter, BsYoutube, BsFacebook, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-lime-100">
            <aside>
                <img className='h-40' src={logo} alt="" />
                <p className="font-bold">
                    Code<span className='text-green-600'>Nest</span> Company Ltd. <br />Providing reliable service since 1992
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link target='blank' className='text-xl' to="https://twitter.com/"><BsTwitter/></Link>
                    <Link target='blank' className='text-xl' to="https://youtube.com/"><BsYoutube/></Link>
                    <Link target='blank' className='text-xl' to="https://facebook.com/"><BsFacebook/></Link>
                    <Link target='blank' className='text-xl' to="https://linkedin.com/"><BsLinkedin/></Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;