import React from "react";
import MasteryArea from "../../components/MasteryArea";
import WelcomeToMy from "../../components/WelcomeToMy";
import BrandSection from "../../components/BrandSection";
import Develop from "../../components/Develop";
import Subscription from "../../components/Subscription";
import AnimatedSection from "../../components/common/AnimatedSection";

const Home = () => {
  return (
    <>
      <BrandSection />

      {/* <AnimatedSection> */}
        <Develop />
      {/* </AnimatedSection> */}

      {/* <AnimatedSection> */}
        <WelcomeToMy />
      {/* </AnimatedSection> */}

      {/* <AnimatedSection> */}
        <MasteryArea />
      {/* </AnimatedSection> */}

      {/* <AnimatedSection> */}
        <Subscription />
      {/* </AnimatedSection> */}
    </>
  );
};

export default Home;
