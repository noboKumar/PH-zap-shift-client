import React from "react";
import HeadTitle from "../../Shared/HeadTitle";
import Marquee from "react-fast-marquee";
import salesIcon1 from "../../../assets/brands/amazon.png";
import salesIcon3 from "../../../assets/brands/casio.png";
import salesIcon4 from "../../../assets/brands/moonstar.png";
import salesIcon5 from "../../../assets/brands/randstad.png";
import salesIcon6 from "../../../assets/brands/start-people 1.png";
import salesIcon7 from "../../../assets/brands/start.png";

const SalesTeam = () => {
  const partners = [
    salesIcon1,
    salesIcon3,
    salesIcon4,
    salesIcon5,
    salesIcon6,
    salesIcon7,
  ];
  return (
    <div data-aos="fade-up" className="space-y-8 w-10/12 mx-auto">
      <div className="text-center">
        <HeadTitle title={"We've helped thousands of sales teams"}></HeadTitle>
      </div>
      <div>
        <Marquee speed={40}>
          {partners.map((logo, index) => (
            <img
              className="mr-10 h-10 w-auto object-cover"
              key={index}
              src={logo}
              alt="partners-logo"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SalesTeam;
