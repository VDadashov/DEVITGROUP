import React from 'react'
import logo from "@assets/images/logo.png"
import StyledImage from '../../styles/common/Image'
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <StyledImage
          src={logo}
          alt="logo"
          $width="60px"
          $height="55px"
          $position="cover"
        />
      </Link>
    </>
  );
}

export default Logo
