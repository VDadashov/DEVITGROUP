import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@styles/";
const SiteRoot = () => {
  return (
    <>
      <Header  />
      <Outlet />
    </>
  );
};

export default SiteRoot;
