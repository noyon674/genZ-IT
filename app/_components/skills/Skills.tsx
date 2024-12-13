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
  const breakPoint = {
    lg: {previewSlide: 6, design: "lg:flex items-center hidden lg:block"},
    md: {previewSlide: 3, design: "md:flex items-center hidden md:block lg:hidden"},
    sm: {previewSlide: 2, design: "flex items-center sm:hidden"},
  }
  return (
    <div id="skills">
      <h1 className="text-6xl text-gray-800 text-center my-10">Skills</h1>
      {/* <div className={`bg-gray-900 h-56 lg:flex items-center`}>
        <div className="container">
          <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            autoplay
          >
            {skillsIcon.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-col gap-y-2" data-aos="flip-left">
                    <span className="lg:text-6xl text-[#17B6E7]">{item.icon}</span>
                    <span className="text-white text-sm font-bold">{item.name}</span>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperSlide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
      <div className={`bg-gray-900 h-56 flex items-center`}>
        <div className="container">
          <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={breakPoint.sm.previewSlide}
            loop
            autoplay
          >
            {skillsIcon.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-col gap-y-2">
                    <span className="text-5xl text-[#17B6E7]">{item.icon}</span>
                    <span className="text-white text-sm font-bold">{item.name}</span>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperSlide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <div className= {`bg-gray-900 h-56 ${breakPoint.md.design}`}>
        <div className="container">
          <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={breakPoint.md.previewSlide}
            loop
            autoplay
            className=""
          >
            {skillsIcon.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-col gap-y-2">
                    <span className="text-6xl text-[#17B6E7]">{item.icon}</span>
                    <span className="text-white text-sm font-bold">{item.name}</span>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperSlide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
