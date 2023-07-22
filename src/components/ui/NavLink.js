import React from "react";
import { Link } from "react-router-dom";

import './NavLink.css'

const NavLink = (props) => {
  const { label, href } = props
  return(
  <div className='nav-element'>
    <Link to={href}>{label}</Link>
  </div>
  )
};

export default NavLink;