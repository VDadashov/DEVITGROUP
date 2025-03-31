import React from 'react'
import styled from 'styled-components'
import { Container } from '../../styles/common/container'
import { useNavigate } from "react-router-dom";


const StyledSubscription = styled.div`
  background: #f2f2f2;
  border-radius: 50px;
  display:flex;
  align-items:center;
  justify-content: space-between;
  margin: 0 0 64px !important;
  padding: 32px 48px;

  h6 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    margin: 0 0 16px;
    text-align: left;
    color: rgb(20, 20, 20);
    font-family: "Graphik-Medium500";
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 0 0 24px;
    font-family: "Graphik-Regular400";
    text-align: left;
    color: rgb(20, 20, 20);
  }
`;

const StyledWrapper = styled.div`
  button {
    outline: none;
    cursor: pointer;
    border: 1px solid #000;
    padding: 14px 32px;
    margin: 0;
    font-family: "Graphik-Light300";
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 500;
    font-size: 16px;
    border-radius: 40px;
    overflow: hidden;
    background: #000;
    color: black;
  }

  button span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }

  button span i {
    margin-top: 4px;
    font-size: 14px;
  }

  button:hover span {
    color: ghostwhite;
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
    background: #fff;
    font-weight: 700;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  button:hover::before {
    transform: translate3d(100%, 0, 0);
  }
`;

const Subscription = () => {
    const navigate = useNavigate();
  
  return (
    <Container>
      <StyledSubscription>
        <div>
          <h6>Join the inner circle</h6>
          <p>
            Subscribe for insights, case studies, and updates from the expert
            teams at Ramotion.
          </p>
        </div>
        <StyledWrapper onClick={() => navigate("/subscribe")}>
          <button>
            <span>Subscribe</span>
          </button>
        </StyledWrapper>
      </StyledSubscription>
    </Container>
  );
}

export default Subscription
