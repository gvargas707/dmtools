import React, { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import './App.css';

import TopNav from "./components/ui/TopNav";

const App = () => {

  return (
    <AuthContextProvider>
      <TopNav style={{border:'1px solid blue'}}/>
      <Outlet />
    </AuthContextProvider>
  )
}

export default App;