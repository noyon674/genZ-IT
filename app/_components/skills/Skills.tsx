import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css";
import { skillsIcon } from "@/app/data";

function Skills() {
  return (
    <div id="skills" className="py-10">
      <h1 className="text-center text-2xl font-semibold mb-10">Skills</h1>
      <div className="container">
        <div className="px-5 sm:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{delay:2000}}
            loop
            data-aos="fade-up"
          >
            {
              skillsIcon.map(item=>(
                <SwiperSlide key={item.id}>
                  <div className="h-32 rounded-lg bg-[#48CEF6] flex flex-col justify-center items-center">
                    <span className="text-4xl text-[#001D48]">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="px-5 hidden sm:block lg:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{delay:2000}}
            loop
            data-aos="fade-up"
          >
            {
              skillsIcon.map(item=>(
                <SwiperSlide key={item.id}>
                  <div className="h-32 rounded-lg bg-[#48CEF6] flex flex-col justify-center items-center">
                    <span className="text-4xl text-[#001D48]">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="hidden lg:block">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            autoplay={{delay:2000}}
            loop
            data-aos="fade-up"
          >
            {
              skillsIcon.map(item=>(
                <SwiperSlide key={item.id}>
                  <div className="h-40 rounded-lg bg-[#48CEF6] flex flex-col justify-center items-center">
                    <span className="text-6xl text-[#001D48]">{item.icon}</span>
                    <span className="font-bold">{item.name}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Skills;
