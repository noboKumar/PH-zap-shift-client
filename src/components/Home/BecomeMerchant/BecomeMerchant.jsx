import React from "react";
import locationImg from "../../../assets/location-merchant.png";

const BecomeMerchant = () => {
  return (
    <div className="flex items-center justify-center bg-[url(assets/be-a-merchant-bg.png)] bg-no-repeat bg-[#03373D] rounded-2xl text-white px-20 py-10 w-10/12 mx-auto">
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl font-bold">
          Merchant and Customer Satisfaction is Our First Priority
        </h1>
        <p>
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Zap shift courier delivers your parcels
          in every corner of Bangladesh right on time.
        </p>
        <div className="space-x-5">
          <button className="btn btn-primary">Become a Merchant</button>
          <button className="btn btn-outline">
            Earn with zap shift Courier
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={locationImg} alt="banner-image" />
      </div>
    </div>
  );
};

export default BecomeMerchant;
