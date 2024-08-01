import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../useContext/AuthProvider';

const Header = () => {
  
  const {user , token, setUser}  = useContext(AuthContext) ;
  // console.log(token);

const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear() ;
    setUser(null);
    navigate('/');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
          {
            token !== null &&     
            <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
            
          </li>
          }
            </ul>
            <div className="d-flex gap-2">
              {
                token == null ?
                <span>
                  <Link className="btn btn-info" to="/login">Login</Link>
                </span>
                :
                <span>
                  <small className='text-info mx-3'>{user.name}</small>
                  <button className="btn btn-danger" onClick={handleLogout}>Logout </button>
                </span>

              }
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
