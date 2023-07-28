import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { icons } from '../../utils/icons';


import './NavLink.css'

const NavLink = (props) => {
  const { label, to, routes } = props

  return(
    <div className="nav-dropdown">
      <Link className="nav-element" to={to}>
        <div>{label} {routes ? <FontAwesomeIcon icon={icons['caretDown']}/>: ''}</div>
      </Link>
      <div className="nav-dropdown--elements">
        {routes ?
          routes.map(r => <Link key={r.label} to={r.route}>{r.label}</Link>) 
          : ''}
      </div>  
    </div>
  )
};

export default NavLink;