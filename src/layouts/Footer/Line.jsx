import React from "react";
import styled from "styled-components";

const Line = () => {
  return <StyledLine></StyledLine>;
};
const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  margin: 50px 0;
`;

export default Line;
