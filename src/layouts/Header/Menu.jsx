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
              <li
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <p>
                  Services <i className="fa-solid fa-arrow-right"></i>
                </p>
                <Dropdown
                  style={{
                    display: isDropdownOpen ? "flex" : "none",
                    opacity: isDropdownOpen ? 1 : 0,
                    transform: isDropdownOpen
                      ? "translateY(0)"
                      : "translateY(-10px)",
                  }}
                >
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

const StyledMenu = styled.div`
  i {
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 8px;
    border: 1px solid #000;
    border-radius: ${({ theme }) => theme.radius.full};
  }
  @media only screen and (min-width: 650px) {
    display: none;
  }
`;

const StyledMenuList = styled.ul`
  padding-top: 200px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  gap: 20px;
  position: absolute;
  cursor: pointer;
  text-align: start;
  li {
    a {
      text-decoration: none;
      color: #000;
      font-size: 1.7rem;
      text-align: start;
      i {
        font-size: 1.5rem;
      }
    }
    p {
      text-decoration: none;
      color: #000;
      font-size: 1.7rem;
      text-align: start;
      i {
        font-size: 1.5rem;
      }
    }
  }
`;

const Dropdown = styled.ul`
  display: none;
  top: 100%;
  left: 0;
  margin-top: 8px;
  list-style: none;
  padding: 10px 0;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-10px)"};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  min-width: 180px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  align-items: start;
  text-align: start;
  li {
    padding: 10px 14px;
    cursor: pointer;
    transition: background 0.2s ease;
    a {
      text-decoration: none;
      color: #333;
      font-size: 1.5rem;
      display: block;
      width: 100%;
    }
  }
`;

export default Menu;
