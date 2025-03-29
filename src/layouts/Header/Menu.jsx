import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <StyledMenu>
      <i class="fa-solid fa-bars"></i>
    </StyledMenu>
  );
};
const StyledMenu = styled.div`
  i {
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 8px;
    border: 1px solid #000;
    border-radius: ${({ theme }) => theme.radius.full};
  }
  @media only screen and (min-width: 650px) {
    display: none;
  }
`
;
export default Menu;
