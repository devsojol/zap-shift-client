// src/components/HowItWorks.jsx
import React from "react";
import {
  FaTruck,
  FaMoneyCheckAlt,
  FaCogs,
  FaBusinessTime,
} from "react-icons/fa";

const cardsData = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaTruck />,
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaMoneyCheckAlt />,
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaCogs />,
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    icon: <FaBusinessTime />,
  },
];

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-[#03464D] font-bold mb-8">How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl  cursor-pointer"
          >
            <div className="text-4xl text-[#03373D]  mb-4">{card.icon}</div>
            <h3 className="text-xl text-[#03464D] font-semibold mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
