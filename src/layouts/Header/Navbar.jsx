import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 3rem;
    font-family: "Graphik-Light300";
  }

  li {
    font-size: 1rem;

    a {
      position: relative;
      display: inline-block;
      color: #000;
      font-weight: 500;
      text-decoration: none;
      transition: font-weight 0.3s ease;

      &::before {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 0;
        height: 1.5px;
        background-color: #000;
        transition: width 0.5s ease;
      }

      &:hover {
        font-weight: bold;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
`;


const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar
