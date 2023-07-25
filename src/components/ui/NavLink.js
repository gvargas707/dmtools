import React from "react";
import { Link } from "react-router-dom";

import './NavLink.css'

const NavLink = (props) => {
  const { label, href, routes } = props

  return(
    <div class="nav-dropdown">
      <Link className="nav-element" to={href}>
        <div>{label}</div>
      </Link>
      <div class="nav-dropdown--elements">
        {routes ?
          routes.map(r => <Link key={r.label} to={r.route}>{r.label}</Link>) 
          : ''}
      </div>  
    </div>
  )
};

export default NavLink;