import React from "react";
import Slider from "../../components/Home/Slider/Slider";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import OurServices from "../../components/Home/OurServices/OurServices";
import SalesTeam from "../../components/Home/SalesTeam/SalesTeam";
import SupportFeatures from "../../components/Home/SupportFeatures/SupportFeatures";
import BecomeMerchant from "../../components/Home/BecomeMerchant/BecomeMerchant";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
const Home = () => {
  return (
    <div className="space-y-20">
      <Slider></Slider>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <SalesTeam></SalesTeam>
      <SupportFeatures></SupportFeatures>
      <BecomeMerchant></BecomeMerchant>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
