import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  font-family: "Graphik-Regular400";

  ul {
    display: flex;
    list-style: none;
    gap: 3rem;
    position: relative;
    padding: 0;
    margin: 0;
  }
    @media (max-width: 700px) {
      ul {
        gap: 10px;
      }
    }
  li {
    position: relative;
    font-size: 1rem;
    a {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 6px;
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
        height: 2px;
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

    &:hover .dropdown-icon {
      transform: rotate(180deg);
    }

    &:hover > ul {
      display: block;
    }

    ul {
      display: none;
      position: absolute;
      top: 140%;
      left: 0;
      background-color: #fafafa;
      padding: 40px 32px;
      border-radius: 12px;
      border: 1px solid rgba(20, 20, 20, 0.12);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      list-style: none;
      min-width: 300px;
      z-index: 10;

      li {
        margin-bottom: 1rem;

        &:last-child {
          margin-bottom: 0;
        }

        a {
          color: #333;
          font-weight: 400;

          &:hover {
            color: #000;
            font-weight: 500;
          }
        }
      }
    }
  }

  .dropdown-icon {
    transition: transform 0.3s ease;
    font-size: 0.6rem;
    margin-top: 5px;
  }
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/service">
            Services <i class="fa-solid fa-caret-down dropdown-icon"></i>
          </Link>
          <ul>
            <li>
              <Link to="/service-detail/CRM">Business Automation</Link>
            </li>
            <li>
              <Link to="/service-detail/Branding">Branding</Link>
            </li>
            <li>
              <Link to="/service-detail/Web-Design">Web Design</Link>
            </li>
            <li>
              <Link to="/service-detail/App-design">App Design</Link>
            </li>
            <li>
              <Link to="/service-detail/ui-ux">UI/UX Design</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/portfolio">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="">FAQ</Link>
        </li> */}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
