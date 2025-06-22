import React from "react";
import Slider from "../../components/Home/Slider/Slider";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import OurServices from "../../components/Home/OurServices/OurServices";
import SalesTeam from "../../components/Home/SalesTeam/SalesTeam";
const Home = () => {
  return (
    <div className="space-y-20">
      <Slider></Slider>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <SalesTeam></SalesTeam>
    </div>
  );
};

export default Home;
