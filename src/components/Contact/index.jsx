import React from "react";
import styled from "styled-components";
import ContactImage from "./ContactImage";
import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import ContactPhone from "./ContactPhone";
import { Container } from "../../styles/common/container";

const Contact = () => {
  return (
    <Container>
      <StyledContact>
        <StyledSectionOne>
          <ContactImage />
          <ContactForm />
        </StyledSectionOne>
        <StyledSectionTwo>
          <ContactText />
          <ContactPhone />
        </StyledSectionTwo>
      </StyledContact>
    </Container>
  );
};

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
const StyledSectionOne = styled.div`
  display: flex;
  margin: 80px 0;
  @media only screen and (max-width: 950px) {
    display: flex;
    flex-direction: column !important;
  }
`;
const StyledSectionTwo = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 950px) {
    display: flex;
    padding: 24px;
  }
  @media only screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 24px;
  }
  @media only screen and (max-width: 660px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 24px;
  }
  @media only screen and (max-width: 515px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px !important;
  }
`;

export default Contact;
