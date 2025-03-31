import React from "react";
import styled from "styled-components";
import StyledImage from "../../styles/common/Image";
import img1 from "@assets/images/1.png";
import img2 from "@assets/images/2.png";
import img3 from "@assets/images/3.png";
const Ourway = () => {
  return (
    <StyledWhoWeAre>
      <h1>Who We Are</h1>
      <StyledOurway>
        <StyledImage src={img2} $width="35%" $height="auto" $position="cover" />
        <div>
          <h3>Our Mission: Helping Millions of Organizations Grow Better</h3>
          <span>
            We believe not just in growing bigger, but in growing better. And
            growing better means aligning the success of your own business with
            the success of your customers. Win-win!
          </span>
        </div>
      </StyledOurway>
      <StyledOurStory>
        <div>
          <h3>Our Story</h3>
          <span>
            In 2004, fellow MIT graduate students Brian Halligan and Dharmesh
            Shah noticed a major shift in the way people shop and purchase
            products. Buyers didn’t want to be interrupted by ads, they wanted
            helpful information. In 2006, they founded HubSpot to help companies
            use that shift to grow better with inbound marketing. Along the way,
            HubSpot expanded beyond marketing into a crafted, not cobbled suite
            of products that create the frictionless customer experience that
            buyers expect today. Expertly led by CEO Yamini Rangan, HubSpot uses
            its customer platform built on an AI-powered Smart CRM to help
            millions of scaling organizations grow better.
          </span>
        </div>
        <StyledImage
          src={img3}
          alt="ourway"
          $width="40%"
          $height="auto"
          $position="cover"
        />
      </StyledOurStory>
    </StyledWhoWeAre>
  );
};
const StyledWhoWeAre = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-family: "Graphik-Light300";
`;
const StyledOurway = styled.div`
  display: flex;
  gap: 50px;
  font-family: "Graphik-Light300";

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-family: "Graphik-Light300";
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 50px;
    font-family: "Graphik-Light300";
  }

  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
    }
    div {
      width: 90%;
    }
  }
`;
const StyledOurStory = styled.div`
  display: flex;
  gap: 50px;
  font-family: "Graphik-Light300";

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-family: "Graphik-Light300";
  }
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-family: "Graphik-Light300";
  }
  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    img {
      order: 1;
      width: 90%;
    }
    div {
      order: 2;
      width: 90%;
    }
  }
`;

export default Ourway;
