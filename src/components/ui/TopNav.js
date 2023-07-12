import React, { useState } from "react";
import { Link } from "react-router-dom";

import './TopNav.css';

import HomeLogo from "./HomeLogo";
import NavElement from "./NavElement";

const TopNav = props => {
  // const [isVisible, setIsVisible] = useState(false);

  // const onHoverHandler = () => {
  //   setIsVisible(!isVisible)
  // }

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
        <NavElement label={'Share'}/>
      </div>
      <div className="top-nav__auth">
        <Link to={`/login`}>Login</Link>
        <Link to={`/signup`}>Signup</Link>
      </div>
    </div>
  )
};

export default TopNav