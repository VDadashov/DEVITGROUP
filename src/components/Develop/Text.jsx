import React from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
import { Link } from "react-router-dom";

const Text = () => {
  return (
    <StyledSection>
      <StyledText>
        <span className="develop">Develop</span>
        <h1>Perfect IT solutions accelerate the growth of your business.</h1>
        <span className="description">
          We offer the most modern and integrated IT solutions for your
          business; we are here to make your work more efficient and productive.
        </span>
      </StyledText>
      <StyledButton>
        <Link to="/about" className="moreBtn">
          <span>Learn More</span>
        </Link>
        <Link to="/contact" className="linkBtn">
          <span>
            Contact Us
            <a>
              <i class="fa-solid fa-arrow-up-long"></i>
            </a>
          </span>
        </Link>
      </StyledButton>
    </StyledSection>
  );
};
const StyledSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media only screen and (max-width: 800px) {
    order: 2;
    width: 83% !important;
    text-align: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  .develop {
    font-size: 20px;
    color: #f0b90b;
    font-family: "Poppins-Regular400";
  }
  .description {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-family: "Poppins-Regular400";
    padding: 20px 0;
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize.custom1};
    font-family: "Poppins-Regular400";
  }

  @media (max-width: 1300px) {
    h1 {
      font-size: 44px !important;
    }
    .description {
      font-size: 18px !important;
    }
  }

  @media only screen and (max-width: 1200px) {
    h1 {
      font-size: 42px !important;
      line-height: 50px !important;
    }
  }

  @media only screen and (max-width: 1100px) {
    h1 {
      font-size: 41px !important;
    }
  }

  @media only screen and (max-width: 1000px) {
    h1 {
      font-size: 39px !important;
      line-height: 46px !important;
    }
    .description {
      font-size: 16px !important;
    }
  }

  @media only screen and (max-width: 900px) {
    .develop {
      font-size: 14px !important;
    }
    h1 {
      font-size: 33px !important;
      line-height: 40px !important;
    }
    .description {
      font-size: 14px !important;
      padding: 15px 0;
    }
  }

  @media only screen and (max-width: 800px) {
    order: 2;
    width: 85% !important;
    text-align: center;
    h1 {
      margin: 5px 0;
      font-size: 32px !important;
      line-height: 42px !important;
    }
    .develop {
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 700px) {
    width: 90% !important;
    h1 {
      margin: 5px 0;
      font-size: 29px !important;
      line-height: 32px !important;
    }
    .description {
      font-size: 13px !important;
      padding-top: 10px !important;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 97% !important;
    h1 {
      margin: 5px 0;
      font-size: 28px !important;
      line-height: 32px !important;
    }
    .description {
      font-size: 13px !important;
      font-family: "Graphik-Light300";
      padding-top: 10px !important;
    }
  }

  @media only screen and (max-width: 520px) {
    width: 100% !important;
    h1 {
      font-size: 24px !important;
      line-height: 32px !important;
      letter-spacing: 1px !important;
    }
    .description {
      font-size: 12px !important;
    }
  }

  @media only screen and (max-width: 485px) {
    h1 {
      font-size: 23px !important;
      line-height: 30px !important;
    }
    .description {
      font-size: 11px !important;
    }
  }

  @media only screen and (max-width: 440px) {
    h1 {
      font-size: 22px !important;
      line-height: 30px !important;
    }
    .description {
      padding-top: 5px !important;
      padding-bottom: 16px !important;
    }
`;
const StyledButton = styled.div`
  display: flex;
  gap: 1.5rem;
  .linkBtn {
    background-color: #f0b90b;
    position: relative;
    padding: 10px 35px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: "Poppins-Regular400";
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #f0b90b;
    border-radius: 25px;
    outline: none;
    overflow: hidden;
    color: #fff;
    transition: color 0.3s 0.1s ease-out;
    text-align: center;
    &::before {
      position: absolute;
      margin: auto;
      content: "";
      border-radius: 50%;
      display: block;
      width: 20em;
      height: 20em;
      left: -5em;
      text-align: center;
      transition: box-shadow 0.5s ease-out;
      z-index: 0;
    }
    span {
      z-index: 1;
      span {
        font-size: 13px;
        i {
          transform: rotate(25deg);
        }
      }
    }
    &:hover {
      color: #f0b90b;
      border: 1px solid #f0b90b;
      &::before {
        box-shadow: inset 0 0 0 10em #fff;
      }
    }
  }
  .moreBtn {
    background: transparent;
    position: relative;
    padding: 12px 35px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: "Poppins-Regular400";
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #f0b90b;
    border-radius: 25px;
    outline: none;
    overflow: hidden;
    color: #f0b90b;
    transition: color 0.3s 0.1s ease-out;
    text-align: center;
    &::before {
      position: absolute;
      margin: auto;
      content: "";
      border-radius: 50%;
      display: block;
      width: 20em;
      height: 20em;
      left: -5em;
      text-align: center;
      transition: box-shadow 0.5s ease-out;
      z-index: 0;
    }
    span {
      z-index: 1;
    }
    &:hover {
      color: #fff;
      border: 1px solid #f0b90b;
      &::before {
        box-shadow: inset 0 0 0 10em #f0b90b;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    button {
      font-size: 14px !important;
      padding: 12px 32px !important;
    }
  }

  @media only screen and (max-width: 900px) {
    button {
      font-size: 12px !important;
      padding: 12px 30px !important;
    }
    button i {
      font-size: 12px !important;
    }
  }

  @media only screen and (max-width: 700px) {
    button {
      padding: 10px 26px !important;
    }
    button i {
      font-size: 11px !important;
    }
  }

  @media only screen and (max-width: 485px) {
    button {
      padding: 9px 24px !important;
    }
    button i {
      font-size: 11px !important;
    }
  }

  @media only screen and (max-width: 450px) {
    button {
      padding: 9px 24px !important;
    }
    button i {
      font-size: 11px !important;
    }
  }

  @media only screen and (max-width: 410px) {
    button {
      font-size: 10px !important;
      padding: 9px 24px !important;
    }
    button i {
      font-size: 10px !important;
    }
  }
`;
export default Text;
