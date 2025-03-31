import React from "react";
import styled from "styled-components";
import SubscribeHead from "./SubscribeHead";
import SubscribeForm from "./SubscribeForm";

const Subscribe = () => {
  return (
    <StyledSubscribe>
      <SubscribeHead />
      <SubscribeForm />
    </StyledSubscribe>
  );
};
const StyledSubscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 80px 0;
`;
export default Subscribe;
