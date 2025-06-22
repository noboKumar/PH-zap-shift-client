import React from "react";
import HowItWorksCard from "./HowItWorksCard";
import { TbTruckDelivery } from "react-icons/tb";
import HeadTitle from "../../Shared/HeadTitle";
import { FaBriefcase, FaHandHoldingUsd, FaWarehouse } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="w-10/12 mx-auto space-y-4">
      <HeadTitle title={"How it Works"}></HeadTitle>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <HowItWorksCard
          icon={<TbTruckDelivery />}
          heading={"Booking Pick & Drop"}
          para={
            "From personal packages to business shipments — we deliver on time, every time."
          }
        ></HowItWorksCard>
        <HowItWorksCard
          icon={<FaHandHoldingUsd />}
          heading={"Booking Pick & Drop"}
          para={
            "From personal packages to business shipments — we deliver on time, every time."
          }
        ></HowItWorksCard>
        <HowItWorksCard
          icon={<FaWarehouse />}
          heading={"Booking Pick & Drop"}
          para={
            "From personal packages to business shipments — we deliver on time, every time."
          }
        ></HowItWorksCard>
        <HowItWorksCard
          icon={<FaBriefcase />}
          heading={"Booking Pick & Drop"}
          para={
            "From personal packages to business shipments — we deliver on time, every time."
          }
        ></HowItWorksCard>
      </div>
    </div>
  );
};

export default HowItWorks;
