import React from "react";
import styled from "styled-components";
import Social from "./Social";
import Line from "./Line";
import Copyright from "./Copyright";
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <Social />
      <Line />
      <Copyright />
    </StyledFooter>
  );
};
export default Footer;
