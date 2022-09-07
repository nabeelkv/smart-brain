import React from "react";
import logo from "./logo.png";
import './Logo.css'
import Tilt from 'react-tilt'

const Logo = () => {
  return (
    <div className="ma5 mt0 center">
        <Tilt className="Tilt br2 shadow-2 m2" options={{ max : 55 }} style={{ height: 151, width: 151 }} >
          <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px'}} src={logo} alt="logo"/> </div>
        </Tilt>
    </div>
  )
}

export default Logo;