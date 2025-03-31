import React from 'react'
import styled from 'styled-components';
import WelcomeToMyVideo from '@assets/videos/WelcomeToMy.mp4';

const StyledHeaderVideo = styled.div`
  width: 100%;
  height: 50vh;
  margin: 0;
  padding: 0;
  max-width: none;
  background: black;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


const WelcomeToMy = () => {
  return (
    <StyledHeaderVideo>
      <video autoPlay muted loop id="background-video">
        <source src={WelcomeToMyVideo} type="video/mp4" />
      </video>
    </StyledHeaderVideo>
  );
}

export default WelcomeToMy;
