import styled from "styled-components";

const StyledImage = styled.img`
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};
  object-fit: ${({ $position }) => $position || "cover"};

  @media (max-width: 700px) {
    width: ${({ $section }) => ($section == "logo" ? "45px" : "auto")};
    height: ${({ $section }) => ($section == "logo" ? "40px" : "auto")};
  }
`;

export default StyledImage;
