import React from "react";
import styled from "styled-components";
import Ourway from "./Ourway";
import AboutUs from "./AboutUs";
import { Container } from "../../styles/common/container";

const About = () => {
  return (
    <Container>
      <StyledAbout>
        <Ourway />
        <AboutUs />
      </StyledAbout>
    </Container>
  );
};

const StyledAbout = styled.div`
  margin: 80px 0;
  @media (max-width:1100px) {
   display: flex;
   flex-direction: column;
    gap: 90px;
  }
`;
export default About;
