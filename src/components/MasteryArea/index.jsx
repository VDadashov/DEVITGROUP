import React from "react";
import styled from "styled-components";
import icon1 from "@assets/images/1.svg";
import icon2 from "@assets/images/2.svg"; 
import icon3 from "@assets/images/3.svg";
import icon4 from "@assets/images/4.svg";
import icon6 from "@assets/images/6.svg";
import icon7 from "@assets/images/7.svg";
import StyledImage from "../../styles/common/Image";
import { Container } from "../../styles/common/container";
import { Link } from "react-router-dom";


const StyledMasteryArea = styled.div`
  margin: 90px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    margin: 64px 0;
  }
`;

const StyledMasteryAreaTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 40px;
    margin: 0 0 24px !important;
    line-height: 1.2;
    text-align: left;
    width: 42%;
    font-family: "Graphik-Regular400";

    @media (max-width: 950px) {
      font-size: 32px;
    }

    @media (max-width: 800px) {
      width: 48%;
    }

    @media (max-width: 700px) {
      width: 50%;
    }

    @media (max-width: 600px) {
      width: 58%;
      font-size: 30px;
      margin-bottom: 15px !important;
    }

    @media (max-width: 500px) {
      width: 70%;
    }

    @media (max-width: 460px) {
      width: 73%;
      font-size: 29px;
    }

    @media (max-width: 400px) {
      width: 78%;
      font-size: 28px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    font-family: "Graphik-Light300";
    text-align: right;
    width: 46%;
    align-self: flex-end;
    margin-right: 60px;

    @media (max-width: 950px) {
      font-size: 15px;
      margin-bottom: 20px;
    }

    @media (max-width: 850px) {
      font-size: 15px;
      margin-bottom: 0px;
    }

    @media (max-width: 800px) {
      width: 50%;
    }

    @media (max-width: 700px) {
      font-size: 14px;
      width: 57%;
      margin-right: 30px;
    }

    @media (max-width: 600px) {
      width: 64%;
      margin-right: 20px;
    }

    @media (max-width: 500px) {
      width: 75%;
      margin-right: 10px;
    }

    @media (max-width: 460px) {
      width: 78%;
      margin-right: 5px;
    }

    @media (max-width: 460px) {
      width: 80%;
      font-size: 13px;
    }

    @media (max-width: 400px) {
      width: 83%;
    }
  }
`;

const StyledMasteryAreaContent = styled.div`
  position: relative;
  width: 100%;
  height: 680px;

  @media (max-width: 800px) {
    height: 560px;
  }

  @media (max-width: 800px) {
    height: 520px;
  }

  @media (max-width: 600px) {
    height: 460px;
  }

  @media (max-width: 500px) {
    height: 430px;
  }

  @media (max-width: 450px) {
    height: 420px;
  }
`;

const StyledFirstCycle = styled.div`
  width: 650px;
  height: 650px;
  border-radius: 50%;
  border: 1px dashed #919191;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1000px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 850px) {
    width: 540px;
    height: 540px;
  }

  @media (max-width: 800px) {
    width: 470px;
    height: 470px;
  }

  @media (max-width: 700px) {
    width: 420px;
    height: 420px;
  }

  @media (max-width: 600px) {
    width: 380px;
    height: 380px;
  }

  @media (max-width: 450px) {
    width: 350px;
    height: 350px;
  }
`;

const StyledSecondCycle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 1px dashed #919191;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1000px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 850px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 800px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 700px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 450px) {
    width: 180px;
    height: 180px;
  }
`;
const StyledMasteryAreaInterSection = styled.span`
  color: #262626;
  position: absolute;
  left: 50%;
  color: #000;
  font-family: "Graphik-Medium500";
  font-size: 20px;
  position: absolute;
  text-align: center;
  top: 46%;
  width: 75px;
  text-align: center;
  transform: translateX(-50%);
  z-index: 1;
  top: 40px;
  transition: all 1s cubic-bezier(0.89, 0.34, 0.2, 0.83);

  @media (max-width: 850px) {
    top: 5%;
    font-size: 18px;
  }

  @media (max-width: 500px) {
    top: 4%;
    font-size: 17px;
  }
`;

const StyledTextLine = styled.div`
  position: absolute;
  width: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px dashed #d7d7d7;

  @media (max-width: 1300px) {
    width: 78%;
  }

  @media (max-width: 650px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 87%;
  }

  @media (max-width: 500px) {
    width: 95%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #000;
  }

  &::before {
    left: -5px; /* ehtiyac varsa düzəlt */
  }

  &::after {
    right: -5px; /* ehtiyac varsa düzəlt */
  }
`;

const StyledTextLineTitle = styled.span`
  position: absolute;
  top: 60%;
  transform: translateY(-60%);
  color: #000;
  font-family: "Graphik-Medium500";
  font-size: 20px;

  @media (max-width: 1300px) {
    left: ${({ $left }) => ($left ? "-7.5% !important" : "none")};
    right: ${({ $right }) => ($right ? "-9.6% !important" : "none")};
  }

  @media (max-width: 1200px) {
    left: ${({ $left }) => ($left ? "-8.2% !important" : "none")};
    right: ${({ $right }) => ($right ? "-10.3% !important" : "none")};
    font-size: 19px;
  }

  @media (max-width: 1000px) {
    left: ${({ $left }) => ($left ? "-8.8% !important" : "none")};
    right: ${({ $right }) => ($right ? "-10.9% !important" : "none")};
    font-size: 18px;
  }

  @media (max-width: 900px) {
    left: ${({ $left }) => ($left ? "-9.3% !important" : "none")};
    right: ${({ $right }) => ($right ? "-11.8% !important" : "none")};
    font-size: 17px;
  }

  @media (max-width: 830px) {
    left: ${({ $left }) => ($left ? "-9.8% !important" : "none")};
    right: ${({ $right }) => ($right ? "-12.3% !important" : "none")};
  }

  @media (max-width: 800px) {
    left: ${({ $left }) => ($left ? "-10.3% !important" : "none")};
    right: ${({ $right }) => ($right ? "-12.7% !important" : "none")};
    font-size: 16px;
  }

  @media (max-width: 720px) {
    left: ${({ $left }) => ($left ? "-11% !important" : "none")};
    right: ${({ $right }) => ($right ? "-13.7% !important" : "none")};
  }

  @media (max-width: 670px) {
    left: ${({ $left }) => ($left ? "-11.6% !important" : "none")};
    right: ${({ $right }) => ($right ? "-14.4% !important" : "none")};
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const StyledMasteryAreaItem = styled.div`
  color: #fff;
  background-color: ${({ $isDefault }) => ($isDefault ? "#fff" : "#181a20")};
  border: ${({ $isDefault }) =>
    $isDefault ? "1px solid rgb(204, 204, 204)" : "none"};
  border-radius: 20px;
  padding: ${({ $isDefault }) =>
    $isDefault ? "3px 13px 5.4px 13px" : "3px 13px 5.4px 33px"};
  position: absolute;
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  left: ${({ $left }) => $left};
  overflow: hidden;
  display: inline-block;
  transition: all 0.7s ease;
  z-index: 2;

  a{
    position: absolute;
    width: 100%;
    height: 100%;
    display: inline-block;
    z-index: 1;
    top: 0;
    left: 0;
  }

  @media (max-width: 850px) {
    display: ${({ $isDefault }) => ($isDefault ? "none" : "inline-block")};
  }

  @media (max-width: 1100px) {
    &.icon1 {
      right: 41%;
      top: 27%;
    }

    &.icon7 {
      left: 51%;
    }

    &.icon3 {
      left: 51%;
    }

    &.icon11 {
      left: 18%;
    }

    &.icon12 {
      top: 62%;
      right: 14%;
    }

    &.icon3 {
      left: 51%;
    }
    &.icon4 {
      left: 34%;
    }
  }

  @media (max-width: 850px) {
    &.icon2 {
      left: 27%;
    }

    &.icon1 {
      right: 38%;
      top: 30%;
    }

    &.icon7 {
      left: 57%;
    }

    &.icon3 {
      left: 57%;
    }
    &.icon4 {
      left: 30%;
    }
  }

  @media (max-width: 700px) {
    &.icon2 {
      left: 27%;
      top: 41%;
    }

    &.icon1 {
      right: 36%;
      top: 30%;
    }

    &.icon4 {
      left: 27%;
    }

    &.icon7 {
      left: 53%;
      top: 41%;
    }
  }

  @media (max-width: 550px) {
    &.icon2 {
      left: 21%;
      top: 40%;
    }

    &.icon1 {
      right: 34%;
      top: 28%;
    }

    &.icon7 {
      left: 53%;
      top: 40%;
    }

    &.icon4 {
      left: 23%;
    }

    &.icon6 {
      left: 37%;
    }
  }

  @media (max-width: 450px) {
    &.icon1 {
      right: 27.5%;
      top: 29%;
    }
  }

  @media (max-width: 410px) {
    &.icon2 {
      left: 15%;
      top: 40%;
    }

    &.icon4 {
      left: 12%;
    }
  }

  span.dftitle {
    font-family: "Graphik-Regular400";
    font-size: 20px;
    line-height: 1.5;
    display: inline-block;
    position: relative;
    overflow: hidden;
    color: #cccccc;
    font-weight: bold;

    @media (max-width: 1300px) {
      font-size: 18px;
    }

    @media (max-width: 1300px) {
      font-size: 17px;
    }

    @media (max-width: 1000px) {
      font-size: 16px;
    }

    @media (max-width: 950px) {
      font-size: 15px;
    }
  }

  .icon,
  strong,
  .arrow {
    transition: transform 0.7s ease;
    position: relative;
    // z-index: 3;
  }

  span.icon {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 49%;
    left: 12px;
    transform: translateY(-50%);
    transition: transform 0.7s ease;

    @media (max-width: 600px) {
      top: 44%;

      & img {
        width: 12px;
        height: 12px;
      }
    }
  }

  span.arrow {
    position: absolute;
    right: -15px;
    top: 55%;
    transform: translateY(-55%);
    font-size: 13px;
    transition: transform 0.7s ease;
  }

  strong {
    font-family: "Graphik-Regular400";
    font-size: 20px;
    line-height: 1.5;
    display: inline-block;
    position: relative;
    overflow: hidden;
    color: #fff;

    @media (max-width: 1300px) {
      font-size: 18px;
    }

    @media (max-width: 1300px) {
      font-size: 17px;
    }

    @media (max-width: 1000px) {
      font-size: 16px;
    }

    @media (max-width: 950px) {
      font-size: 15px;
    }

    @media (max-width: 600px) {
      font-size: 14px;
    }

    @media (max-width: 450px) {
      font-size: 13px;
    }
  }

  strong::after {
    content: attr(data-hover); /* hover zamanı görsənəcək mətn */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: ${({ $hoverColor }) => $hoverColor || "#fff"};
    transform: translateY(100%);
    transition: transform 0.4s ease;
  }

  &:hover strong::after {
    transform: translateY(0);
  }

  &:hover .icon {
    transform: translate(-190%, -50%);
    transition: transform 0.7s ease;
  }

  &:hover strong {
    transform: translateX(-20px);
    color: ${({ $hoverColor }) => $hoverColor};
    transition: transform 0.7s ease;
  }

  &:hover .arrow {
    transform: translate(-30px, -55%);
    color: ${({ $hoverColor }) => $hoverColor};
    transition: transform 0.7s ease;
  }

  &:hover {
    background-color: ${({ $isDefault }) => ($isDefault ? "none" : "#505050")};
  }
`;


const MasteryArea = () => {
  return (
    <Container>
      <StyledMasteryArea>
        <StyledMasteryAreaTitle>
          <h1>At the intersection of product and brand</h1>
          <p>
            With over 15 years of experience in the industry, our offerings have
            evolved into a set of services that complement each other and allow
            us to design, develop, implement, maintain, and extend a consistent
            experience across all touchpoints.
          </p>
        </StyledMasteryAreaTitle>
        <StyledMasteryAreaContent>
          <StyledMasteryAreaItem
            $isDefault={false}
            $hoverColor="#fcfeac"
            $right="42.5%"
            $top="27%"
            className="icon1"
          >
            <Link to="/service-detail/CRM" />
            <span className="icon">
              <StyledImage
                src={icon1}
                alt="icon1"
                $width="15px"
                $height="15px"
                $position="cover"
              />
            </span>
            <strong>business automation</strong>
            <span className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem
            $isDefault={false}
            $hoverColor="#94D8FE"
            $left="35%"
            $top="40%"
            className="icon2"
          >
            <Link to="/service-detail/Branding" />
            <span className="icon">
              <StyledImage
                src={icon2}
                alt="icon2"
                $width="15px"
                $height="15px"
                $position="cover"
              />
            </span>
            <strong>branding</strong>
            <span className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem
            $isDefault={false}
            $hoverColor="#D3FE"
            $left="55%"
            $top="40%"
            className="icon7"
          >
            <Link to="/service-detail/Web-Design" />
            <span className="icon">
              <StyledImage
                src={icon7}
                alt="icon2"
                $width="15px"
                $height="15px"
                $position="cover"
              />
            </span>
            <strong>e-commerce</strong>
            <span className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem
            $isDefault={false}
            $hoverColor="#FEA1B2"
            $left="55%"
            $top="55%"
            className="icon3"
          >
            <Link to="/service-detail/App-Design" />
            <span className="icon">
              <StyledImage
                src={icon3}
                alt="icon2"
                $width="15px"
                $height="15px"
                $position="cover"
              />
            </span>
            <strong>app design</strong>
            <span className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem
            $isDefault={false}
            $hoverColor="#F3B0FE"
            $left="32%"
            $top="55%"
            className="icon4"
          >
            <Link to="/service-detail/Web-Design" />
            <span className="icon">
              <StyledImage
                src={icon4}
                alt="icon2"
                $width="15px"
                $height="15px"
                $position="cover"
              />
            </span>
            <strong>web design</strong>
            <span className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem
            $isDefault={false}
            $hoverColor="#85FED3"
            $left="43%"
            $top="67%"
            className="icon6"
          >
            <Link to="/service-detail/ui-ux" />
            <span className="icon">
              <StyledImage
                src={icon6}
                alt="icon2"
                $width="15px"
                $height="15px"
                $position="cover"
              />
            </span>
            <strong>ui/ux design</strong>
            <span className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $right="22%" $top="27.5%">
            <span className="dftitle">data science</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $right="18%" $top="55%">
            <span className="dftitle">gtm strategy</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem
            $isDefault={true}
            $right="10%"
            $top="55%"
            className="icon12"
          >
            <span className="dftitle">smm</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $right="22%" $top="67%">
            <span className="dftitle">product writing</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $right="11%" $top="40%">
            <span className="dftitle">production planning</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem
            $isDefault={true}
            $left="22%"
            $top="27%"
            className="icon11"
          >
            <span className="dftitle">printing services</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $left="15%" $top="40%">
            <span className="dftitle">packaging design</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $left="15%" $top="55%">
            <span className="dftitle">pr campaigns</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $left="20%" $top="67%">
            <span className="dftitle">video production</span>
          </StyledMasteryAreaItem>
          <StyledTextLine>
            <StyledTextLineTitle $left={true} style={{ left: "-6.3%" }}>
              Brand
            </StyledTextLineTitle>
            <StyledTextLineTitle $right={true} style={{ right: "-8.1%" }}>
              Product
            </StyledTextLineTitle>
          </StyledTextLine>
          <StyledFirstCycle>
            <StyledMasteryAreaInterSection>
              Mastery Area
            </StyledMasteryAreaInterSection>
          </StyledFirstCycle>
          <StyledSecondCycle></StyledSecondCycle>
        </StyledMasteryAreaContent>
      </StyledMasteryArea>
    </Container>
  );
};

export default MasteryArea;
