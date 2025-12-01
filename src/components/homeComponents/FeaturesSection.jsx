import React from "react";
import liveTrackingImg from "../../assets/live-tracking.png";
import deliveryBoy from "../../assets/safe-delivery.png";

const features = [
  {
    img: liveTrackingImg,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    img: deliveryBoy,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    img: deliveryBoy,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="w-full py-10 ">
      <div className="max-w-7xl mx-auto space-y-6 px-4 border-y-2 border-dashed border-gray-400 py-10 md:py-24 ">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-sm"
          >
            {/* Left Image */}
            <div className="w-full md:w-[20%] flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-40 object-contain "
              />
            </div>

            {/* Divider (only on desktop) */}
            <div className="hidden md:block border-r-2 border-dashed border-gray-300 w-px h-32"></div>

            {/* Text Content */}
            <div className="w-full md:w-[70%] text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-semibold text-[#004A45] mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
