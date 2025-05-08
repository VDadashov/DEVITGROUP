import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Menu = ({ isOpen, setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (isOpen || isDropdownOpen) {
      setIsDropdownOpen(false);
      setIsOpen(false);
    }
  }, [location]);

  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>&#9776;</ToggleButton>

      {/* Drawer */}
      {isOpen && (
        <DrawerWrapper>
          <DrawerPanel open={isOpen}>
            <StyledMenuList>
              <li onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <p>
                  Services <i className="fa-solid fa-arrow-right"></i>
                </p>
                <Dropdown isOpen={isDropdownOpen}>
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
                </Dropdown>
              </li>
              <li>
                <Link to="/portfolio">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </StyledMenuList>
          </DrawerPanel>
        </DrawerWrapper>
      )}
    </>
  );
};
const DrawerPanel = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-50vw")};
  width: 50vw;
  height: 100vh;
  background-color: #fff;
  color: white;
  transition: right 0.3s ease-in-out;
  padding: 1rem;
  z-index: 1000;
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.3);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

const DrawerWrapper = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 1000;
`;
const ToggleButton = styled.button`
  display: none;
  @media only screen and (max-width: 650px) {
    position: fixed;
    top: 10px;
    right: 20px;
    z-index: 1100;
    background: none;
    border: none;
    font-size: 20px;
    padding: 5px 8px;
    color: #000;
    cursor: pointer;
    display: flex;
    border: 2px solid #000;
    border-radius: 70%;
  }
`;

const StyledMenuList = styled.ul`
  cursor: pointer;
  padding-top: 200px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  gap: 20px;
  text-align: start;
  li {
    position: relative;

    a,
    p {
      text-decoration: none;
      color: #000;
      font-size: 1.7rem;
      display: flex;
      align-items: center;

      i {
        margin-left: 8px;
        font-size: 1.5rem;
      }
    }
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  margin-top: 10px;
  padding: 10px 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  min-width: 220px;

  display: flex;
  flex-direction: column;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-10px)"};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  li {
    padding: 12px 16px;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #333;
      font-size: 1.5rem;
      width: 100%;
      display: block;
    }
  }
`;

export default Menu;
