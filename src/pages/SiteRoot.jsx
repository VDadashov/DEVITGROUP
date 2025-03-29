import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
const SiteRoot = () => {
  return (
    <>
      <Header  />
      <Outlet />
      <Footer/>
    </>
  );
};

export default SiteRoot;
