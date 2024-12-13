import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { PortfolioImages } from "@/app/data";
import Image from "next/image";

function Portfolio() {
  return (
    <div className="" id="portfolio">
      <div className="container py-28 px-5">
        <p className="font-bold text-sm text-center mb-2 uppercase text-orange-800" data-aos="fade-up">Portfolio</p>
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-5 sm:text-4xl sm:mb-10" data-aos="fade-up">My Latest Work</h2>
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {PortfolioImages.map((item) => (
            <div className="relative w-full h-52 lg:h-72 box rounded-lg" key={item.id} data-aos={item.id%2==0 ? "fade-up" : "flip-left"}>
              <Image
                className="rounded-lg w-full h-full text-center block mx-auto"
                src={item.image}
                fill
                alt="project1"
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
