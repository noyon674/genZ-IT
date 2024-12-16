import Link from "next/link";
import React from "react";
import { footerIcon } from "@/app/Data/footer";

function Footer() {
  return (
    <div className="bg-black mt-[11vh] text-white py-10 lg:pt-20">
      <div className="container flex flex-col px-5 md:px-0 gap-y-5 md:flex-row md:items-center md:justify-around">
        <div className="md:basis-72">
          <div data-aos="zoom-in">
            <Link href="">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-100 mb-3">
                gen<span className="text-[#009990]">Z</span>.IT
              </h1>
            </Link>
            <p className="text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br />
              In voluptatem perspiciatis possimus similique! Ex temporibus ullam
              laborum obcaecati saepe provident?
            </p>
          </div>
          <div className="flex gap-x-3 mt-10">
            {footerIcon.map((item) => (
              <a
                data-aos-delay="200"
                data-aos="flip-left"
                key={item.id}
                href={item.url}
                target="_blank"
                className="w-10 h-10 lg:w-14 lg:h-14 lg:text-xl bg-[#00998f49] transition-all transform hover:rotate-180 text-[#009990] flex justify-center items-center rounded-md"
              >
                <span>{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-between md:flex-col md:gap-y-3">
          <a
            href="image/Noyon_CV.pdf"
            data-aos="fade-down"
            download={true}
            className="lg:px-10 px-5 py-2 border-2 border-[#009990] rounded-full text-[#009990] transition-all hover:text-white hover:border-white lg:text-xl"
          >
            Download CV
          </a>
          <button
            className="lg:px-10 px-5 py-2 bg-[#00998fc0] rounded-full transition-all text-white hover:bg-[#009990] lg:text-xl"
            data-aos="fade-up"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
      <div className="mt-10">
        <hr />
        <p className="text-center mt-5">
          Copyright ©2024 All rights reserved | This template is made &#128525;
          with
          <span className="text-[#00998fee] font-bold"> Noyon</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
