import React from "react";
import MasteryArea from "../../components/MasteryArea";
import WelcomeToMy from "../../components/WelcomeToMy";
import BrandSection from "../../components/BrandSection";
import Develop from "../../components/Develop";
import Subscription from "../../components/Subscription";

const Home = () => {
  return (
    <>
      <BrandSection />
      <Develop />
      <WelcomeToMy />
      <MasteryArea />
      <Subscription/>
    </>
  );
};

export default Home;
