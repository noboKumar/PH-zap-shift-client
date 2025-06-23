import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";
import "aos/dist/aos.css";
import Aos from "aos";

const Root = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [location]);

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
