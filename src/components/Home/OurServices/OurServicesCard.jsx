import React from "react";

const OurServicesCard = ({ icon, heading, para }) => {
  return (
    <div className="shadow-sm flex flex-col justify-center items-center rounded-2xl px-8 py-5 bg-white space-y-4 hover:bg-primary cursor-pointer">
      <div className="text-2xl md:text-5xl text-[#03373D]">{icon}</div>
      <h1 className="text-2xl font-semibold text-[#03373D]">{heading}</h1>
      <p className="text-[#606060]">{para}</p>
    </div>
  );
};

export default OurServicesCard;
