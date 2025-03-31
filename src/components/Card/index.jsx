import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: calc(100% / 3 - 40px);
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: "Graphik-Medium500";
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};

  &:hover {
    transform: translateY(-10px);
  }

  &:hover p {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  @media only screen and (max-width: 900px) {
    width: calc(100% / 2 - 90px);
  }

  @media only screen and (max-width: 750px) {
    width: calc(100% / 2 - 60px);
  }

  @media (max-width: 600px) {
    width: 90%;
    margin: 20px 0;
  }
`;


const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

const CardContent = styled.div`
  padding: 15px;
  height: 150px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;

  @media only screen and (max-width: 900px) {
    font-family: "Graphik-Regular400";
  }

  @media only screen and (max-width: 750px) {
    text-align: center;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  margin-top: 5px;
  color: rgb(70, 68, 68);
  opacity: 0;
  transition: opacity 0.3s ease;
  font-family: "Graphik-Regular400";

  display: -webkit-box;
  -webkit-line-clamp: 3; /* Maksimum 3 sətir */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Card = ({ image, title, description, url }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <CardContainer onClick={handleClick} clickable={!!url}>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
