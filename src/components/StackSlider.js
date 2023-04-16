import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { stack } from "@/mocks/stack";

export default function StackSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          850: {
            slidesPerView: 3,
          },
          620: {
            slidesPerView: 2,
          },
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        {stack.map((el) => {
          return (
            <SwiperSlide>
              <div className="flex flex-col items-center justify-center gap-4 select-none">
                <div className="w-28 h-28 lg:w-16 lg:h-16 sm:w-12 sm:h-12">
                  <img src={`/images/stack/${el.title.toLowerCase()}.svg`} />
                </div>
                <span className="font-medium">{el.title}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
