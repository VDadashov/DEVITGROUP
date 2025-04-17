import React from 'react'
import logo from "@assets/images/logo.png"
import StyledImage from '../../styles/common/Image'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLogo = styled.div`
  span {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: 700px) {
    span {
      display: inline-block;
      font-size: 13px;
      font-family: "Graphik-Medium500";
      color: rgb(30, 30, 30);
    }
  }
`;

const Logo = () => {
  return (
    <>
      <StyledLogo>
        <Link to={"/"}>
          <StyledImage
            src={logo}
            alt="logo"
            $width="60px"
            $height="55px"
            $position="cover"
            $section="logo"
          />
          <span>DEV IT GROUP</span>
        </Link>
      </StyledLogo>
    </>
  );
}

export default Logo
