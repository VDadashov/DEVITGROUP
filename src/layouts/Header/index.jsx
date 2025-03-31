import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import styled from "styled-components";
import Button from "./contact";
import Menu from "./Menu";
import { Container } from "../../styles/common/container";
import SubscribeButton from "./Subscribe";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const StyledList = styled.div`
  display:flex;
  gap:20px;
  align-items:center;
`

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <Navbar />
        <StyledList>
          <SubscribeButton />
          <Button />
        </StyledList>
        <Menu />
      </StyledHeader>
    </Container>
  );
};

export default Header;
