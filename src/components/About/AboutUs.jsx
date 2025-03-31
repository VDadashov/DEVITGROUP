import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <StyledAboutSection>
      <h1>About DevITGroup</h1>
      <StyledAboutGrid>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-copy"></i>
            <h3>Customer highlights</h3>
          </div>
          <div className="about__grid__foot">
            As DevIT Group, we support businesses from various industries with
            innovative technologies, accelerating their digital transformation.
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-globe"></i>
            <h3>Connections</h3>
          </div>
          <div className="about__grid__foot">
            As DevIT Group, we come together around innovative ideas and
            technologies, strengthening collaborations and growing together.
            Let's create new opportunities together!
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-people-group"></i>
            <h3>Team</h3>
          </div>
          <div className="about__grid__foot">
            As DevIT Group, with our team of professional and innovative
            experts, we provide high-quality IT solutions to our clients.
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-shield"></i>
            <h3>Support</h3>
          </div>
          <div className="about__grid__foot">
            As DevIT Group, we are always by your side for any questions or
            technical issues. Our professional support team is ready to provide
            fast and effective solutions.
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-star"></i>
            <h3>Corporate responsibility</h3>
          </div>
          <div className="about__grid__foot">
            Building a more sustainable and tech-driven future is our priority.
            At the same time, we’re committed to delivering every project on
            time—with precision and quality
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-lightbulb"></i>
            <h3>Careers</h3>
          </div>
          <div className="about__grid__foot">
            At DevIT Group, we work alongside innovative and talented
            individuals to create groundbreaking projects. Professional growth,
            a creative environment, and a dynamic team are waiting for you!
          </div>
        </StyledAboutGridComponent>
      </StyledAboutGrid>
    </StyledAboutSection>
  );
};
const StyledAboutSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-family: "Graphik-Light300";
  @media (max-width: 1100px) {
  text-align: center;
  }
`;
const StyledAboutGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  font-family: "Graphik-Light300";
`;
const StyledAboutGridComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc((100% / 3) - 30px);
  font-family: "Graphik-Light300";

  .about__grid__head {
    i {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
    padding-bottom: 20px;
    border-bottom: 3px solid black;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 1150px) {
    width: calc((100% / 2) - 50px);
  }
  @media (max-width: 700px) {
    width: 600px;
  }
`;

export default AboutUs;
