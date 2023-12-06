import React, { useContext, useState } from 'react';
import Button from '../../Components/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, providerLogin, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const location = useLocation();


    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate('/')
                toast.success('Your account has been created successfully')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Google login successful')
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Github login successful')
                navigate(from, { replace: true })

            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body p-2 md:p-8 ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full name <span className='text-red-500 font-bold'>*</span> </span>
                            </label>
                            <input type="text" name='name' placeholder="Your full name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photoURL' placeholder="Your photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email  <span className='text-red-500 font-bold'>*</span></span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password  <span className='text-red-500 font-bold'>*</span></span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already Registered? <Link to='/login' className="text-green-600 link link-hover">Login</Link></p>
                            </label>
                            <p className='text-red-500'>{error}</p>
                        </div>
                        <div className="form-control">
                            <Button name='Register' />
                            <p></p>
                            <span className='text-center mt-3 mb-3'>Or</span>
                            <hr />
                        </div>
                        <div className="form-control mt-4">
                            <Button onClick={handleGoogleSignIn} name='Register with Google' icon={<FaGoogle className='w-5 h-5' />} />
                        </div>
                        <div className="form-control mt-2">
                            <Button onClick={handleGithubSignIn} name='Register with Github' icon={<FaGithub className='w-5 h-5' />} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;