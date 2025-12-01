import React from "react";
import amazon from "../../assets/brands/amazon.png";
import amazonVector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonStar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import startPeople from "../../assets/brands/start_people.png";
import Marquee from "react-fast-marquee";

const brandsLogos = [
  amazon,
  amazonVector,
  casio,
  moonStar,
  randstad,
  star,
  startPeople,
];

const Brands = () => {
  return (
    <div className="px-4 py-8 md:max-w-7xl mx-auto">
      <h2 className="text-3xl text-center text-[#03464D] font-bold mb-10 md:mb-18">
        We've helped thousands of sales teams
      </h2>
      <Marquee gradient={false} speed={80} pauseOnHover={true}>
        <div className="flex items-center gap-12">
          {brandsLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt=""
              className="transition cursor-pointer"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
