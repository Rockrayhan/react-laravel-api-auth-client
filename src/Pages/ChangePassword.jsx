import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const data = { email, password };
    // console.log(data);

    // you can use baseurl here (login credential part 2)
    axios
      .post("http://127.0.0.1:8000/api/resetpassword", data)
      .then((response) => {
        console.log(response.data.message);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      });
  };

  return (
    <div>
      <h1> Change your Password </h1>


    
   { message &&      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {message}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }


   { error &&      <div className="alert alert-warning success-dismissible fade show" role="alert">
        {error}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> }



      <div className="center">
        <form className="form-bg" onSubmit={formSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
             New Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
