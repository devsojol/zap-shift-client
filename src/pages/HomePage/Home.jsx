import React from "react";
import Banner from "../../components/homeComponents/Banner";
import HowItWorks from "../../components/homeComponents/HowItWorks";
import Brands from "../../components/homeComponents/Brands";
import FeaturesSection from "../../components/homeComponents/FeaturesSection";
import Testimonial from "../../components/homeComponents/Testimonial";
import FAQSec from "../../components/homeComponents/FAQSec";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Brands></Brands>
      <FeaturesSection></FeaturesSection>
      <Testimonial reviewsPromise={reviewsPromise}></Testimonial>
      <FAQSec></FAQSec>
    </div>
  );
};

export default Home;
