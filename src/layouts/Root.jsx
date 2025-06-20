import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Home/Footer/Footer";
import NavBar from "../pages/Home/NavBar/NavBar";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto urbanist-font">
      <NavBar></NavBar>
      <div className="min-h-screen my-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
