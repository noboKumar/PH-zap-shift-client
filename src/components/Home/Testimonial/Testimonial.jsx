import React from "react";
import HeadTitle from "../../Shared/HeadTitle";
import testimonialImg from "../../../assets/customer-top.png";
import quoteImg from "../../../assets/reviewQuote.png";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Awlad Hossin",
      role: "Senior Product Designer",
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine...",
    },
    {
      name: "Rasel Ahamed",
      role: "CTO",
      text: "This device encourages you to maintain proper posture throughout the day...",
    },
    {
      role: "CEO",
      name: "Nasir Uddin",

      text: "Using it daily can reduce pain, improve mobility, and help posture without stress...",
    },
    {
      name: "Harun or rasid",
      role: "CMO",
      text: "This device encourages you to maintain proper posture throughout the day...",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <div>
          <img src={testimonialImg} alt="icon img" />
        </div>
        <div className="text-center">
          <HeadTitle title={"What our customers are sayings"}></HeadTitle>
          <p className="w-4/5 mx-auto text-xl">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </div>
      <div className="py-5 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-sm w-3/10 mx-auto bg-white rounded-2xl px-10 py-5">
                <div>
                  <img src={quoteImg} alt="icon img" />
                  <p>
                    A posture corrector works by providing support and gentle
                    alignment to your shoulders, back, and spine, encouraging
                    you to maintain proper posture throughout the day.
                  </p>
                </div>
                <div className="border-t-2 border-dotted my-5"></div>
                <div className="flex items-center gap-2">
                  <div className="bg-black rounded-full p-10 w-20"></div>
                  <div>
                    <h1 className="text-xl font-bold">{testimonial.name}</h1>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
