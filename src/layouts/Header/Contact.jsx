import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper onClick={() => navigate("/contact")}>
      <button>
        <span>
          Contact <i className="fa-solid fa-arrow-right"></i>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    outline: none;
    cursor: pointer;
    border: 1px solid #000;
    padding: 7.2px 23px;
    margin: 0;
    font-family: "Graphik-Light300";
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 500;
    font-size: 16px;
    border-radius: 20px;
    overflow: hidden;
    background: #fff;
    color: ghostwhite;
  }

  button span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }

  button span i {
    margin-top: 4px;
    font-size: 13px;
  }

  button:hover span {
    color: black;
  }

  button::before,
  button::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  button::before {
    content: "";
    background: #000;
    font-weight: 700;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::before {
    transform: translate3d(100%, 0, 0);
  }
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export default Button;
