import React from 'react'
import logo from "@assets/images/logo.png"
import StyledImage from '../../styles/common/Image'

const Logo = () => {
  return (
    <>
      <StyledImage src={logo} alt="logo" $width="80px" $height="80px" $position="cover" />
    </>
  )
}

export default Logo
