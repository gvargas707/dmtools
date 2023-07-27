import React from 'react';

import './SideBar.css'

const SideBar = ({children}) => {

  return(
    <div className="sidebar">
      {children}
    </div>
  )
};

export default SideBar;