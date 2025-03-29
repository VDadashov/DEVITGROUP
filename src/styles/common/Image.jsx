import styled from "styled-components";

const StyledImage = styled.img`
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
  object-fit: ${({ $position }) => $position || "cover"};
`;

export default StyledImage;
