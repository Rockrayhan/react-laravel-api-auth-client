import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {

  const [message , setMessage] = useState('') ;
  const [error , setError] = useState('') ;
  

    const formSubmit = (e) => {

        e.preventDefault(); 
        const form = e.target;
        const email = form.email.value;
        const data = {email}
        console.log(data);

        // you can use baseurl here (login credential part 2)
        axios.post('http://127.0.0.1:8000/api/forgetpassword', data)
          .then((response) => {
            console.log(response.data.message);
            setMessage(response.data.message)
          })
          .catch((error) => {
            console.log(error.response.data.message);
            setError(error.response.data.message)
          });
    }

    return (
        <div>
            <h1 className='text-center my-5'> Forget Password ?? (-_-) </h1>

        
        {/* <h1 className='bg-danger'> {message} </h1>  */}

   { message &&      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        {message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }


   { error &&      <div class="alert alert-warning success-dismissible fade show" role="alert">
        {error}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }



            <div className='center'>



<form className='form-bg' onSubmit={formSubmit}>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
<br />
<br />
<div className='text-center'>
<Link to='/register'> New User ? Please Register </Link>
<br />
<Link to='/login'> Already Registered ?  Please Login </Link>
</div>
</form>


 </div>
        </div>
    );
};

export default ForgetPassword;