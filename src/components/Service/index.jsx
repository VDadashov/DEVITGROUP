import React from "react";
import styled from "styled-components";
import Offer from "./Offer";
import { Container } from "../../styles/common/container";

const Service = () => {
  return (
    <Container>
      <StyledService>
        <Offer />
      </StyledService>
    </Container>
  );
};

const StyledService = styled.div`
  margin: 64px 0;
  font-family: "Poppins-Regular400y";
`;
export default Service;
