import React from "react";

const SupportFeaturesCard = ({ image, title, description }) => {
  return (
    <div className="flex items-center p-6 rounded-xl bg-white shadow-sm space-x-4">
      <div className="w-40 h-40">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="border-l-2 border-dotted h-40"></div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SupportFeaturesCard;
