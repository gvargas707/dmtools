import React, { createContext, useState } from "react";
import { users } from "../data/userData";

export const AuthContext = createContext({
  isLoggedIn: false,
  user: {},
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({children}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({});

  const login = (username) => {
    let user = users.filter(u => u.username === username)
    if (user.length === 0){
      return undefined
    } else {
      setUser(user[0])
      setIsLoggedIn(true)
      return user[0]
    }
    
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUser({})
  }


  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};
