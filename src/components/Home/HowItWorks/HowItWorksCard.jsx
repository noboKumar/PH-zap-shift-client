import React from "react";

const HowItWorksCard = ({ icon: Icon, heading, para }) => {
  return (
    <div className="shadow-sm rounded-2xl px-10 py-8 bg-white space-y-4">
      <div className="text-2xl md:text-5xl text-[#03373D]">{Icon}</div>
      <h1 className="text-2xl font-semibold text-[#03373D]">{heading}</h1>
      <p className="text-xl text-[#606060]">{para}</p>
    </div>
  );
};

export default HowItWorksCard;
