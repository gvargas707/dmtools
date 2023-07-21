import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({children}) => {
  const auth = useContext(AuthContext);
  return auth.isLoggedIn
  ? <Navigate to='/' replace={true}/>
  : children
};

export default PublicRoute