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
    lg: {previewNumber: 6, design: "hidden lg:block"},
    md: {previewNumber: 3, design: "px-5 hidden sm:block lg:hidden"},
    sm: {previewNumber: 2, design: "px-5 sm:hidden"}
  }
  const showSliders = (preview: number, design: string)=>{
    return <div className={design}>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={preview}
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
  }
  return (
    <div id="skills" className="py-10 lg:pb-32">
      <h1 className="text-center text-2xl font-semibold my-10 lg:text-4xl">Skills</h1>
      <div className="container">
        {showSliders(breakPoint.lg.previewNumber, breakPoint.lg.design)}
        {showSliders(breakPoint.md.previewNumber, breakPoint.md.design)}
        {showSliders(breakPoint.sm.previewNumber, breakPoint.sm.design)}
      </div>
    </div>
  );
}

export default Skills;
