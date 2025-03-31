import React from 'react'
import styled from 'styled-components'

const StyledBrandSection = styled.div`
    margin: 80px 0;
    display:flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
`
const StyledBrandTitle = styled.h1`
  font-size: 86px;
  font-weight: 600;
  letter-spacing: 0.02rem;
  line-height: 1.1;
  margin-bottom: 32px;
  font-family: "Graphik-Medium500";
  width: 70%;

  @media (max-width: 1000px) {
    font-size: 76px;
  }

  @media (max-width: 800px) {
    font-size: 64px;
  }

  @media (max-width: 700px) {
    font-size: 60px;
    width: 75%;
  }

  @media (max-width: 600px) {
    font-size: 52px;
    font-family: "Graphik-Regular400";
  }

  @media (max-width: 520px) {
    font-size: 44px;
  }

  @media (max-width: 440px) {
    font-size: 42px;
    width: 85%;
  }
`;

const StyledBrandDescription = styled.p`
  font-size: 18px;
  line-height: 1.55;
  margin: 0 !important;
  max-width: 980px;
  width: 60%;
  font-family: "Graphik-Regular400";

  @media (max-width: 600px) {
    font-size: 17px;
    width: 70%;
  }

  @media (max-width: 520px) {
    font-size: 16px;
    width: 75%;
  }
`;

const BrandSection = () => {
  return (
    <StyledBrandSection>
      <StyledBrandTitle>
        Design agency bridging product & brand
      </StyledBrandTitle>
      <StyledBrandDescription>
        We help marketing & product executives build impactful brands, engage
        users, and drive growth
      </StyledBrandDescription>
    </StyledBrandSection>
  );
}

export default BrandSection
