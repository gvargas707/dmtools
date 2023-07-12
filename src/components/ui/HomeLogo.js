import React from "react";

import logo from '../../assets/png/dm-tools-logo-only-bright.png'

const HomeLogo = props => {
  const logoWidth = props.width || '120px'
  const logoHeight = props.height || '80px'
  return (
    <img src={logo} style={{width:`${logoWidth}`, height:`${logoHeight}`}} />
  )
}

export default HomeLogo