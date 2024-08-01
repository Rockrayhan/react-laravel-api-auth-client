import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
export const AuthContext = createContext(null);

// const data = "sample data" ;

const AuthProvider = ({ children }) => {
    
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(user);

  const data = {
    user,
    setUser,
    token,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
