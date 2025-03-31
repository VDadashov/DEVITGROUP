import React from "react";
import styled from "styled-components";
import StyledImage from "../../styles/common/Image";
import img1 from "@assets/images/1.png";
import img2 from "@assets/images/2.png";
import img3 from "@assets/images/3.png";
import { fontSize } from "../../styles/Breakpoints";
const Ourway = () => {
  return (
    <StyledWhoWeAre>
      <h1>Who We Are</h1>
      <StyledOurway>
        <StyledImage src={img2} $width="32%" $height="auto" $position="cover" />
        <div>
          <h3>Our Mission: Helping Millions of Organizations Grow Better</h3>
          <span>
            DevIT Group accelerates the digital growth of businesses with modern
            IT solutions and empowers them with innovative technologies. Our
            professional team offers a wide range of services, including website
            development, mobile application development, system and network
            solutions, as well as artificial intelligence technologies. We
            provide effective and sustainable solutions tailored to our clients'
            needs, making their digital transformation process smoother and more
            efficient.
          </span>
        </div>
      </StyledOurway>
      <StyledOurStory>
        <div>
          <h3>Our Story</h3>
          <span>
            Founded with a passion for innovation and technology, DevIT Group
            has quickly become a trusted brand in the IT industry. The company
            successfully operates in the fields of website development, mobile
            applications, system and network solutions, as well as artificial
            intelligence technologies. Over time, DevIT Group has delivered
            numerous successful projects while maintaining customer satisfaction
            as its top priority. Looking toward the future, DevIT Group aims to
            become one of the leading global technology companies by
            prioritizing innovation and quality.
            <br />
            <b>DevIT Group – Your trusted partner for digital success!</b>
          </span>
        </div>
        <StyledImage
          src={img3}
          alt="ourway"
          $width="35%"
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
  gap: 80px;
  font-family: "Graphik-Light300";
  @media only screen and (max-width: 1100px) {
    text-align: center;
  }
`;
const StyledOurway = styled.div`
  display: flex;
  gap: 100px;
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
    gap: 0px;
    justify-content: center;
    align-items: center;
    img {
      width: 30%;
    }
    div {
      width: 65%;
    }
  }
`;
const StyledOurStory = styled.div`
  display: flex;
  gap: 100px;
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
  span {
    b {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    justify-content: center;
    align-items: center;
    img {
      order: 1;
      width: 40%;
    }
    div {
      order: 2;
      width: 65%;
    }
  }
`;

export default Ourway;
