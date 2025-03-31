import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-top: 20px;

  button {
    outline: none;
    cursor: pointer;
    border: 1px solid #000;
    padding: 24px 64px;
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

const SubscribeForm = () => {
  return (
    <StyledSubscribeForm action="submit">
      <StyledSubscribeInput>
        <input type="email" placeholder="Email address" required />
        <input type="text" placeholder="First name" required />
        <input type="text" placeholder="Last name" required />
        <input type="text" placeholder="Company name" required />
      </StyledSubscribeInput>
      <StyledWrapper>
        <button>
          <span>Subscribe</span>
        </button>
      </StyledWrapper>
    </StyledSubscribeForm>
  );
};
const StyledSubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const StyledSubscribeInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    width: 600px;
    background: #f2f2f2;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    color: #262626;
    font-size: 18px;
    line-height: 1.5;
    min-height: 60px;
    padding: 16px;
    &::placeholder {
      color: #abb0b2;
    }
  }
  @media (max-width: 630px) {
    input {
      width: 500px;
    }
  }
  @media (max-width: 530px) {
    input {
      width: 400px;
    }
  }
  @media (max-width: 430px) {
    input {
      width: 300px;
    }
  }
`;
const StyledSubscribeButton = styled.button`
  background: #262626;
  border-radius: 40px;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  height: 80px;
  letter-spacing: -0.5px;
  line-height: 36px;
  margin: 48px auto;
  max-width: 320px;
  padding: 9px 16px;
  transition: all 0.3s;
  user-select: none;
  width: 100%;
`;
export default SubscribeForm;
