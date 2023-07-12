import React, { useState } from "react";
import { Link } from "react-router-dom";

import './NavElement.css';
//import '../../font-awesome.min.css';

const NavElement = props => {
  const [isVisible, setIsVisible] = useState(false)

  const onHoverHandler = () => {
    setIsVisible(!isVisible)
  }
  return (
    <>
      <div className={`nav-element ${props.dropdown ? 'dropdown' : ''}`}>
      <p>{props.label} {props.routes ? <i className='fa fa-caret-down'></i> : ''}</p>
        {props.routes && (
        <div className="dropdown-content">
          {props.routes.map(r => <Link to={r.route}>{r.label}</Link>)}
        </div>
        )}
      </div>
    </>
  )

  
  
};

export default NavElement;