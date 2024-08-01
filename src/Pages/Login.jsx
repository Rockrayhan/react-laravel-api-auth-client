import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../useContext/AuthProvider';

const Login = () => {
  const {user, setUser} = useContext(AuthContext) ;

  const [loggedIn, setLoggedIn] = useState(false) ;

    const formSubmit = (e) => {

        e.preventDefault(); 
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const data = {email, password}
        // console.log(data);

        // you can use baseurl here (login credential part 2)
        axios.post('http://127.0.0.1:8000/api/login', data)
          .then((response) => {
            localStorage.setItem('token', response.data.token) ;
            setLoggedIn(true);
            setUser(response.data.user)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    if (loggedIn) { 
      return <Navigate to="/profile" />;
    }

    return (

        <div>
        <h1 className='text-center my-5'> Login  </h1>


        <div className='center'>

       <form className='form-bg' onSubmit={formSubmit}>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="email" name='email' className="form-control"  />
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input type="password" name='password' className="form-control" id="exampleInputPassword1" />
</div>
<button type="submit" className="btn btn-primary">Submit</button>
<br />
<br />
<div className='text-center'>
<Link to='/register'> New User ? Please Register </Link>
<br />
    <Link to='/forgetpassword'> Forget Password ? </Link>
</div>
</form>


        </div>
    </div>
    );
};

export default Login;