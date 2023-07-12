import React from "react";

import home from "../../assets/png/home.png"
import explore from "../../assets/png/binocular.png"

const NavButton = props => {
  const width = 40;
  const height = 40;


  return (
    <div style={{
      width: 'min-content',
      padding: '5px 15px',
      margin: '5px',
      cursor: 'pointer',
      backgroundImage: 'linear-gradient(to bottom right, white, lightblue)',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {props.icon == 'home' && <img style={{margin: '0 auto'}} src={home} width="60px" height="60px"/>}
      {props.icon == 'explore' && <img style={{margin: '0 auto'}} src={explore} width="60px" height="60px"/>}
      <p style={{
        textAlign: 'center',
        margin: '1px'
      }}
      >{props.label}</p>
    </div>
  )
};

export default NavButton;