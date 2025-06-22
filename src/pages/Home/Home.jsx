import React from "react";
import Slider from "../../components/Home/Slider/Slider";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import OurServices from "../../components/Home/OurServices/OurServices";
const Home = () => {
  return (
    <div className="space-y-10">
      <Slider></Slider>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
    </div>
  );
};

export default Home;
