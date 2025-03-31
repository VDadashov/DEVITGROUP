import styled from "styled-components";

const StyledVideo = styled.video`
  object-fit: ${({ $position }) => $position || "fill"};
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "auto"};
`;
export default StyledVideo;
