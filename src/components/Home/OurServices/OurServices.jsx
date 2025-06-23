import React from "react";
import OurServicesCard from "./OurServicesCard";
import {
  FaClock,
  FaMapMarkedAlt,
  FaWarehouse,
  FaMoneyBillWave,
  FaBriefcase,
  FaUndoAlt,
} from "react-icons/fa";

const OurServices = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-[#03373D] py-24 text-center space-y-5 text-white rounded-2xl"
    >
      <div className="space-y-5">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="w-1/2 mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-3 w-10/12 mx-auto">
        <OurServicesCard
          icon={<FaClock />}
          heading={"Express  & Standard Delivery"}
          para={
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
          }
        ></OurServicesCard>
        <OurServicesCard
          icon={<FaMapMarkedAlt />}
          heading={"Nationwide Delivery"}
          para={
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
          }
        />

        <OurServicesCard
          icon={<FaWarehouse />}
          heading={"Fulfillment Solution"}
          para={
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
          }
        />

        <OurServicesCard
          icon={<FaMoneyBillWave />}
          heading={"Cash on Home Delivery"}
          para={
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
          }
        />

        <OurServicesCard
          icon={<FaBriefcase />}
          heading={"Corporate Service / Contract In Logistics"}
          para={
            "Customized corporate services which includes warehouse and inventory management support."
          }
        />

        <OurServicesCard
          icon={<FaUndoAlt />}
          heading={"Parcel Return"}
          para={
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
          }
        />
      </div>
    </div>
  );
};

export default OurServices;
