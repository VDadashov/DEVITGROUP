import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AnimatedSection from "../components/common/AnimatedSection";
const SiteRoot = () => {
  return (
    <>
      <AnimatedSection>
        <Header />
      </AnimatedSection>
      <Outlet />
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </>
  );
};

export default SiteRoot;
