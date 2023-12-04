import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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
                                <p>Haven't registered yet? <Link to='/register' className="text-green-600 link link-hover">Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <Button name='Login' />
                            <span className='text-center mt-3 mb-5'>Or</span>
                            <hr />
                        </div>
                        <div className="form-control mt-6">
                            <Button name='Login with Google' />
                        </div>
                        <div className="form-control mt-6">
                            <Button name='Login with Github' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;