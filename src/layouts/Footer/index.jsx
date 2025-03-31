import React from "react";
import styled from "styled-components";
import Social from "./Social";
import Line from "./Line";
import Copyright from "./Copyright";
import { Container } from "../../styles/common/container";
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;
const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <Social />
        <Line />
        <Copyright />
      </StyledFooter>
    </Container>
  );
};
export default Footer;
