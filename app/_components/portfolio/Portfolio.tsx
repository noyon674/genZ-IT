import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { PortfolioImages } from "@/app/Data/portfolio";
import Image from "next/image";

function Portfolio() {
  return (
    <div className="mt-[11vh]" id="portfolio">
      <div className="container px-5 md:px-0">
        <p
          className="uppercase text-sm text-center text-[#009990] font-bold"
          data-aos="fade-up"
        >
          Portfolio
        </p>
        <h2
          className="text-center text-2xl font-semibold text-gray-800 mb-10"
          data-aos="fade-up"
        >
          My Latest Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PortfolioImages.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-60 lg:h-72 box rounded-lg"
              data-aos={item.id % 2 == 0 ? "flip-left" : "zoom-in"}
            >
              <Image
                blurDataURL={item.blurImage}
                src={item.image}
                fill
                className="rounded-lg w-full h-full text-center block mx-auto"
                placeholder="blur"
                alt="portfolio image"
              />
              <div className="absolute overlay rounded-lg w-full flex justify-center items-center h-0 overflow-hidden bottom-0 left-0 text-xl bg-orange-800 opacity-80 text-white">
                <Link className="text-4xl" href="">
                  <FaSearch />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
