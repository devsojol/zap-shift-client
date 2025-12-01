import React, { use } from "react";
import testimonialImg from "../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

const Testimonial = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <figure className="py-8">
          <img className="mx-auto" src={testimonialImg} alt="" />
        </figure>
        <h2 className="text-3xl font-semibold text-teal-700 mb-8">
          What our customers are saying
        </h2>
        <p className="text-lg text-gray-600 mb-12 w-3xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "30%",
            depth: 200,
            scale: 0.75,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <TestimonialCard review={review}></TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
