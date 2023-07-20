import React, { useContext } from "react";
import { Link } from "react-router-dom";

import './TopNav.css';

import HomeLogo from "./HomeLogo";
import NavElement from "./NavElement";
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
        <NavElement
          dropdown={true}
          label={'Explore'}
          routes={[
            {route: '/', label: 'Home'},
            {route: '/npc-tables', label: 'Browse NPC Tables'},
            {route: '/towns', label: 'Browse Towns'}
          ]}
        />
        <NavElement
          dropdown={true}
          label={'Create'}
          routes={[
            {route: '/generate-npc', label: 'Generate NPC'},
            {route: '/generate-creature', label: 'Generate Creature'},
            {route: '/generate-town', label: 'Generate Town'}
          ]}
        />
        {auth.isLoggedIn && (<Link to={'/share'}>Share</Link>)}
      </div>
      <div className="top-nav__auth">
        {auth.isLoggedIn && auth.role === 'admin' }
        {!auth.isLoggedIn && (<Link to={`/login`}>Login</Link>)}
        {!auth.isLoggedIn && (<Link to={`/signup`}>Signup</Link>)}
        {auth.isLoggedIn && (<Link to={`/`} onClick={logoutHandler}>Logout</Link>)}
      </div>
    </div>
  )
};

export default TopNav