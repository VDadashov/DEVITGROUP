import React from "react";
import styled from "styled-components";
import { fontSize } from "./../../styles/Breakpoints";
import theme from "./../../styles/Theme";

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
        <li>
          <a href="#">Bēhance</a>
        </li>
        <li>
          <a href="#">Dribbble</a>
        </li>
        <li>
          <a href="#">X </a>
        </li>
      </ul>
      <ul>
        <span>Company</span>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Case studies</a>
        </li>
        <li>
          <a href="#">Process</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Awards</a>
        </li>
      </ul>
      <ul>
        <span>Learn</span>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
      </ul>
      <ul>
        <span>Locations</span>
        <li>
          <a href="#">San Francisco, CA</a>
        </li>
      </ul>
      <ul>
        <span>Get in touch</span>
        <li>
          <a href="#">+1 888 410 8885</a>
        </li>
        <li>
          <a href="#">Contact us</a>
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
