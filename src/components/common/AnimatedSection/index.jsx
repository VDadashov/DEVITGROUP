// src/components/AnimatedSection.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "../../../utils/hooks/useInView"; // öz hook-un path-ı ilə dəyiş

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionWrapper = styled.div`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible }) => (visible ? fadeIn : "none")} 1s ease forwards;
  transition: opacity 0.3s ease;
`;

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <SectionWrapper ref={ref} visible={inView}>
      {children}
    </SectionWrapper>
  );
};

export default AnimatedSection;
