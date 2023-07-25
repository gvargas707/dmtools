import React, { useContext } from "react";
import { Link } from "react-router-dom";

import './TopNav.css';

import HomeLogo from "./HomeLogo";
//import NavElement from "./NavElement";
import NavLink from "./NavLink";
import { AuthContext } from "../../context/AuthContext"

const TopNav = props => {

  const auth = useContext(AuthContext)

  const logoutHandler = () => {
    auth.logout()
  }

  return (
    <div className="top-nav">
      <HomeLogo width="84px" height="43px"/>
      <div className="top-nav__tools">
        <NavLink label={'Explore'}/>
        <NavLink
          label={'Create'}
          routes={[
            {route: '/generate-npc', label: 'Generate NPC'},
            {route: '/generate-creature', label: 'Generate Creature'},
            {route: '/generate-town', label: 'Generate Town'},
          ]}
        />
        {auth.isLoggedIn && (<NavLink label={'Share'}/>)}
      </div>
      <div className="top-nav__auth">
        {auth.isLoggedIn && auth.role === 'admin' }
        {!auth.isLoggedIn && (<Link to={`/login`}>Login</Link>)}
        {!auth.isLoggedIn && (<Link to={`/signup`}>Signup</Link>)}
        {auth.isLoggedIn && auth.user.role === 'admin' && (<Link to={`/admin-panel`}>Admin Panel</Link>)}
        {auth.isLoggedIn && (<Link to={`/`} onClick={logoutHandler}>Logout</Link>)}
      </div>
    </div>
  )
};

export default TopNav