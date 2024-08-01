import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import ForgetPassword from './Pages/ForgetPassword.jsx';
import Profile from './Pages/Profile.jsx';
import axios from 'axios';
import AuthProvider from './useContext/AuthProvider.jsx';
import Reset from './Pages/Reset.jsx';
import ChangePassword from './Pages/ChangePassword.jsx';
import InsertProduct from './Pages/InsertProduct.jsx';


axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword/>,
      },
      {
        path: "/reset/:id",
        element: <Reset/>,
      },
      {
        path: "/changepassword",
        element: <ChangePassword/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/insert",
        element: <InsertProduct/>,
      },
    ],
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
