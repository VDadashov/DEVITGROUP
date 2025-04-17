import React, { useState } from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import styled from "styled-components";
import Button from "./contact";
import Menu from "./Menu";
import { Container } from "../../styles/common/container";
import SubscribeButton from "./Subscribe";
import MenuBar from "./MenuBar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position:relative;
`;

const StyledList = styled.div`
  display:flex;
  gap:20px;
  align-items:center;
`


const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <StyledHeader>
        <Logo />
        <Navbar />
        <StyledList>
          <SubscribeButton />
          <Button />
        </StyledList>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen}  />
        <MenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </StyledHeader>
    </Container>
  );
};

export default Header;
