import React from "react";
import styled from "styled-components";

const SubscribeHead = () => {
  return (
    <StyledSubscribeHead>
      <h1>Join the inner circle</h1>
      <p>
        Sign up for our newsletter and be the first to receive exclusive
        insights, fresh case studies, and the latest updates — delivered
        straight to your inbox by the brand, product, and design teams at
        Ramotion.
      </p>
    </StyledSubscribeHead>
  );
};
const StyledSubscribeHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  gap: 1rem;
  text-align: center;
  h1 {
    font-size: 92px;
    font-weight: 600;
    letter-spacing: -0.2rem;
    line-height: 1.1;
    margin-bottom: 32px;
    text-align: center;
    font-family: "Graphik-Medium500";
  }
  p {
    font-size: 16px;
    line-height: 1.55;
    margin: 0 !important;
    max-width: 650px;
    font-family: "Graphik-Regular400";
  }
`;
export default SubscribeHead;
