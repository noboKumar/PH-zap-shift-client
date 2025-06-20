import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

import slider1 from "../../../assets/banner/banner1.png";
import slider2 from "../../../assets/banner/banner2.png";
import slider3 from "../../../assets/banner/banner3.png";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        loop={3}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img className="w-full" src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slider3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
