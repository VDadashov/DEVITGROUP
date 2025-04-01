import React from "react";
import styled from "styled-components";
import video from "@assets/videos/video.mp4";
import StyledVideo from "@styles/common/video";
const Video = () => {
  return (
    <StyledVideoContainer>
      <StyledVideo autoPlay muted loop>
        <source src={video} alt="video" type="video/mp4" $width="50%" />
      </StyledVideo>
    </StyledVideoContainer>
  );
};
const StyledVideoContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 800px) {
    order: 1;
    width: 80%;
  }

  @media (max-width: 500px){
    width: 100%;
  }
`;
export default Video;
