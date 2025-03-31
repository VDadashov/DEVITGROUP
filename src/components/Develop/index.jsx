import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Video from "./Video";
import { Container } from "../../styles/common/container";
const Develop = () => {
  return (
    <Container>
      <StyledDevelop>
        <Text />
        <Video />
      </StyledDevelop>
    </Container>
  );
};
const StyledDevelop = styled.div`
  display: flex;
  align-items: center;
@media only screen and (max-width: 800px) {
      flex-direction: column;
      margin-bottom: 64px;
}
`;
export default Develop;
