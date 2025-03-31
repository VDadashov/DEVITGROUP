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
            See how organizations of all sizes in all industries rely on Oracle
            to help them succeed.
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-globe"></i>
            <h3>Connections</h3>
          </div>
          <div className="about__grid__foot">
            Access earnings results, SEC filings, presentations, and other
            financial information.
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-people-group"></i>
            <h3>Team</h3>
          </div>
          <div className="about__grid__foot">
            Learn about our executive team and board of directors.
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-shield"></i>
            <h3>Support</h3>
          </div>
          <div className="about__grid__foot">
            Catch up on the latest company news and updates.
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-star"></i>
            <h3>Corporate responsibility</h3>
          </div>
          <div className="about__grid__foot">
            Read about our efforts in education, philanthropy, volunteering,
            sustainability, and more.
          </div>
        </StyledAboutGridComponent>
        <StyledAboutGridComponent>
          <div className="about__grid__head">
            <i class="fa-solid fa-lightbulb"></i>
            <h3>Careers</h3>
          </div>
          <div className="about__grid__foot">
            Create the future with us. Join the team that’s innovating solutions
            to global challenges.
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
