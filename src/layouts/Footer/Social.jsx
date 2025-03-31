import React from "react";
import styled from "styled-components";

const Social = () => {
  return (
    <StyledUpper>
      <ul>
        <span>Social</span>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
      <ul>
        <span>Company</span>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>
      <ul>
        <span>Location</span>
        <li>
          <a href="#">Baku, Azerbaijan</a>
        </li>
      </ul>
      <ul>
        <span>Get in touch</span>
        <li>
          <a href="#">+994 51 345 26 86</a>
        </li>
        <li>
          <a href="#">devservice@gmail.com</a>
        </li>
      </ul>
    </StyledUpper>
  );
};
const StyledUpper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  font-family: "Graphik-Light300";
  ul {
    padding-top: 50px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      padding-bottom: 1rem;
      color: lightgray;
      font-size: ${({ theme }) => theme.fontSize.md};
    }
    li {
      a {
        color: #000;
        font-size: ${({ theme }) => theme.fontSize.md};
      }
    }
  }
`;
export default Social;
