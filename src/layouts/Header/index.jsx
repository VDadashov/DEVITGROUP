import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import styled from "styled-components";
import Button from "./contact";
import Menu from "./Menu";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <Button />
      <Menu />
    </StyledHeader>
  );
};

export default Header;
