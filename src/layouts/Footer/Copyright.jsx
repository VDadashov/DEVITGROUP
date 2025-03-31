import React from "react";
import styled from "styled-components";

const Copyright = () => {
  return (
    <StyledCopyright>
      <ul>
        <li className="right__line">
          <span>© 2025 Ramotion Inc. All rights reserved</span>
        </li>
        <li className="right__line">
          <a href="#">info@ramotion.com</a>
        </li>
        <li className="right__line">
          <a href="#">Sitemap</a>
        </li>
        <li className="right__line">
          <a href="#">Privacy Policy</a>
        </li>
        <li className="right__line">
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Cookie Policy</a>
        </li>
      </ul>
    </StyledCopyright>
  );
};
const StyledCopyright = styled.div`
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    flex-wrap: wrap;
    text-align: start;
    font-family: "Graphik-Light300";
    margin-bottom: 20px;
    li {
      font-size: ${({ theme }) => theme.fontSize.md};
      a {
        width: 30px;
        text-align: left;
        color: #000;
        padding: 0 24px;
        font-size: ${({ theme }) => theme.fontSize.md};
      }
      span {
        padding: 0 24px;
        font-size: ${({ theme }) => theme.fontSize.md};
      }
      &.right__line {
        border-right: 1px solid #000;
      }
    }
  }
`;
export default Copyright;
