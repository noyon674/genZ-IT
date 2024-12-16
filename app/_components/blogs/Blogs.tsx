import React from "react";
import { blogs } from "@/app/Data/blog";
import Image from "next/image";
import Link from "next/link";

function Blogs() {
  const sliceDesc = (str: string) => {
    if (str.length > 150) {
      return str.slice(0, 150) + "...";
    } else return str;
  };
  return (
    <div id="blogs" className="mt-[11vh]">
      <div className="container px-5 md:px-0">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="font-bold text-xs md:text-base uppercase text-[#009990]">
            our blogs
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Recent From Blogs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogs.map((item) => (
            <div
              key={item.id}
              data-aos={item.id % 2 == 0 ? "zoom-in" : "flip-right"}
              className="shadow-md shadow-gray-200 rounded-md pb-2"
            >
              <div className="relative h-[40vh] md:h-[30vh]">
                <Image
                  src={item.image}
                  fill
                  alt="photo"
                  className="rounded-md rounded-b-none"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl lg:text-2xl hover:text-blue-600">
                  <Link href={item.link} target="_blank">
                    {item.title}
                  </Link>
                </h2>
                <p className="flex divide-x-4 divide-orange-400">
                  <span className="text-gray-400">{item.author}</span>
                  <span className="ml-5 pl-5 text-gray-400">{item.time}</span>
                </p>
                <p className="text-lg lg:text-xl text-gray-800 mt-5">
                  {sliceDesc(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
