import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

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
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Haven't registered yet? <Link to='/register' className="text-green-600 link link-hover">Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control">
                            <Button name='Login' />
                            <span className='text-center mt-3 mb-3'>Or</span>
                            <hr />
                        </div>
                        <div className="form-control mt-4">
                            <Button onClick={handleGoogleSignIn} name='Login with Google' icon={<FaGoogle className='w-5 h-5' />} />
                        </div>
                        <div className="form-control mt-2">
                            <Button name='Login with Github' icon={<FaGithub className='w-5 h-5' />} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;