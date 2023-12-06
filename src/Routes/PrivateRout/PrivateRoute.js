import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center my-3'>
            <span className="loading loading-spinner text-success loading-md "></span>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;