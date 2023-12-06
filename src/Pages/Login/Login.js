import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                toast.success('Login successful')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
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
                    <h1 className="text-2xl md:text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email <span className='text-red-500 font-bold'>*</span></span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password <span className='text-red-500 font-bold'>*</span></span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Haven't registered yet? <Link to='/register' className="text-green-600 link link-hover">Register</Link></p>
                            </label>
                            <p className='text-red-500'>{error}</p>
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
                            <Button onClick={handleGithubSignIn} name='Login with Github' icon={<FaGithub className='w-5 h-5' />} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;