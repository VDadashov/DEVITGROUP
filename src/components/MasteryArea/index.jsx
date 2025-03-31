import React from "react";
import styled from "styled-components";
import icon1 from "@assets/images/1.svg";
import icon2 from "@assets/images/2.svg"; 
import icon3 from "@assets/images/3.svg";
import icon4 from "@assets/images/4.svg";
import icon5 from "@assets/images/5.svg";
import icon6 from "@assets/images/6.svg";
import icon7 from "@assets/images/7.svg";
import StyledImage from "../../styles/common/Image";
import { Container } from "../../styles/common/container";


const StyledMasteryArea = styled.div`
  margin: 90px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
`;

const StyledMasteryAreaContent = styled.div`
  position: relative;
  width: 100%;
  height: 680px;
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
    left: ${({$left1300}) => $left1300 ? $left1300 + "!important" : 0};
    right: ${({$right1300}) => $right1300 ? $right1300 + "!important" : 0};
  }
`;

const StyledMasteryAreaItem = styled.a`
  color: #fff;
  background-color: ${({ $isDefault }) => ($isDefault ? "#fff" : "#181a20")};
  border: ${({ $isDefault }) =>
    $isDefault ? "1px solid rgb(204, 204, 204)" : "none"};
  border-radius: 20px;
  padding: ${({ $isDefault }) =>
    $isDefault ? "3px 13px 5.4px 13px" : "3px 13px 5.4px 33px"};
  position: absolute;
  top: ${({$top}) => $top};
  right: ${({$right}) => $right};
  left: ${({$left}) => $left};
  overflow: hidden;
  display: inline-block;
  transition: all 0.7s ease;
  z-index: 1;

  span.dftitle {
    font-family: "Graphik-Regular400";
    font-size: 20px;
    line-height: 1.5;
    display: inline-block;
    position: relative;
    overflow: hidden;
    color: #cccccc;
    font-weight: bold;
  }

  .icon,
  strong,
  .arrow {
    transition: transform 0.7s ease;
    position: relative;
    z-index: 1;
  }

  span.icon {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 49%;
    left: 12px;
    transform: translateY(-50%);
    transition: transform 0.7s ease;
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
            href="#"
            $isDefault={false}
            $hoverColor="#fcfeac"
            $right="42.5%"
            $top="27%"
          >
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
            href="#"
            $isDefault={false}
            $hoverColor="#94D8FE"
            $left="35%"
            $top="40%"
          >
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
            href="#"
            $isDefault={false}
            $hoverColor="#D3FE"
            $left="55%"
            $top="40%"
          >
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
            href="#"
            $isDefault={false}
            $hoverColor="#FEA1B2"
            $left="55%"
            $top="55%"
          >
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
            href="#"
            $isDefault={false}
            $hoverColor="#F3B0FE"
            $left="32%"
            $top="55%"
          >
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
            href="#"
            $isDefault={false}
            $hoverColor="#85FED3"
            $left="43%"
            $top="67%"
          >
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
          <StyledMasteryAreaItem $isDefault={true} $right="10%" $top="55%">
            <span className="dftitle">smm</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $right="22%" $top="67%">
            <span className="dftitle">product writing</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $right="11%" $top="40%">
            <span className="dftitle">production planning</span>
          </StyledMasteryAreaItem>
          <StyledMasteryAreaItem $isDefault={true} $left="22%" $top="27%">
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
            <StyledTextLineTitle $left1300="-7.5%" style={{ left: "-6.3%" }}>
              Brand
            </StyledTextLineTitle>
            <StyledTextLineTitle $right1300="-9.8%" style={{ right: "-8.1%" }}>
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
