import React from "react";
import SupportFeaturesCard from "./SupportFeaturesCard";

import TrackingImg from "../../../assets/Transit-warehouse.png";
import SafeDeliveryImg from "../../../assets/tiny-deliveryman.png";
import SupportImg from "../../../assets/safe-delivery.png";

const SupportFeatures = () => {
  return (
    <div className="space-y-6 w-10/12 mx-auto">
      <SupportFeaturesCard
        image={TrackingImg}
        title="Live Parcel Tracking"
        description="Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind."
      />
      <SupportFeaturesCard
        image={SafeDeliveryImg}
        title="100% Safe Delivery"
        description="We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
      />
      <SupportFeaturesCard
        image={SupportImg}
        title="24/7 Call Center Support"
        description="Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
      />
    </div>
  );
};

export default SupportFeatures;
