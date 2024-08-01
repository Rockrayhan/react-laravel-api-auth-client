import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState } from 'react';

const Register = () => {

  const [loggedIn, setLoggedIn] = useState(false) ;


  const formSubmit = (e) => {

    e.preventDefault(); 
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = {name,email, password}
    // console.log(data);

    // you can use baseurl here (login credential part 2)
    axios.post('http://127.0.0.1:8000/api/register', data)
      .then((response) => {
        localStorage.setItem('token', response.data.token) ;
        setLoggedIn(true);
        // SetUser(response.data.user)
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
            <h1 className='text-center my-5'> Register  </h1>


            <div className='center'>

           <form className='form-bg' onSubmit={formSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"> Name </label>
    <input name='name' type="text" className="form-control" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
<br /><br />
  <Link to='/login'> Already Registered ? Please Login </Link>
  <br />
  
</form>


            </div>
        </div>
    );
};

export default Register;