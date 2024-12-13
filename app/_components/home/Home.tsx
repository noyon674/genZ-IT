import React from "react";
import TypeWriter from "../common/TypeWriter";
import Button from "../common/Button";
import { IoIosArrowForward } from "react-icons/io";
function Home() {
  return (
    <div className="bg-[#FF9064] h-[91vh]" id="home">
      <div className="px-5 lg:px-0 container md:flex justify-between items-center">
        <div className=" pt-9 md:pt-0 lg:pt-0 basis-2/3" data-aos="fade-right">
          <p className="pb-5">
            <span className="px-3 py-2 bg-white text-[#FF9064] rounded-md font-semibold">Hi There</span>
          </p>
          <h1 className="text-xl font-semibold text-white md:text-3xl lg:text-6xl">
            I am Noyon Sarker <br />
            Software <span className="text-black">
              <TypeWriter items={["Designer", "Developer", "Engineer", "Content Writer"]} />
            </span>
            </h1>
          <Button style="mt-4 md:text-lg px-5 py-3 rounded bg-black text-white hover:text-[#FF9064] hover:bg-white transition duration-300 ease-in-out flex gap-3 items-center">
            HIRE ME
            <span className="animate-pulse">
              <IoIosArrowForward />
            </span>
          </Button>
        </div>
        <div
          data-aos="fade-left"
          className="basis-1/3 bg-heroBackground h-[64vh] bg-no-repeat mt-4 md:mt-0 md:h-[91vh] bg-center md:bg-cover"
        ></div>
      </div>
    </div>
  );
}

export default Home;
