import React from 'react';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body p-2 md:p-8 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already Registered? <Link to='/register' className="text-green-600 link link-hover">Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <Button name='Login' />
                            <span className='text-center mt-3 mb-5'>Or</span>
                            <hr />
                        </div>
                        <div className="form-control mt-6">
                            <Button name='Register with Google' />
                        </div>
                        <div className="form-control mt-6">
                            <Button name='Register with Github' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;