import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const auth = useContext(AuthContext);

  return auth.isLoggedIn
  ? children
  : <Navigate to='/login' replace={true}/>
};

export default ProtectedRoute