import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";

const Root = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="w-11/12 mx-auto urbanist-font">
      <NavBar></NavBar>
      <div className="min-h-screen my-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default Root;
