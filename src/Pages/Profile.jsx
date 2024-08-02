import React, { useContext } from 'react';
import { AuthContext } from '../useContext/AuthProvider';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const Profile = () => {

    const {user, token} = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate() ;

    // {
    //     token == null &&  navigate('/login') ;
    // }

    if ( !token ) {
        // return navigate('/login')
        return <Navigate  to={'/login'}/>
    }
    
    return (
        <div>
        <h1 className='text-center my-5'> User Profile  </h1>


        <div className='form-bg'>
        <h3> User Name: {user?.name} </h3>
        <h3> Email: {user?.email} </h3> <br />
        <Link to="/changepassword"><button className='btn btn-info'> Change Password  </button></Link>

        </div>
    </div>
    );
};

export default Profile;