import Image from "next/image";
import computer from "@/public/Img/about.jpg";

function About() {
  return (
    <div id="about" className="mt-[11vh] lg:h-[90vh] lg:flex items-center">
      <div className=" flex flex-col gap-y-10 lg:gap-y-20 container px-5 md:px-0">
        <h2 className="text-center text-2xl lg:text-5xl font-semibold uppercase text-[#009990]">
          About ME
        </h2>
        <div className="lg:grid grid-cols-2 gap-x-10">
          <div className="mb-5">
            <Image
              className="w-full rounded-md"
              src={computer}
              alt="about-image"
              placeholder="blur"
            />
          </div>
          <div className="pb-5 md:pb-0">
            <h2 className="text-xl uppercase font-semibold mb-3 lg:text-3xl text-gray-800">
              My Story
            </h2>
            <p className="lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              reprehenderit vel, voluptates perferendis quod modi nihil nemo,
              dolore distinctio velit accusamus itaque dolorum nobis. Quisquam
              ab similique rem earum odio quis eius illo sed magni ad nostrum
              nulla nobis aspernatur cumque aut, maiores accusamus praesentium
              sequi ratione quos pariatur.
            </p>
            <h2 className="text-xl font-semibold text-[#009990] my-3 lg:text-2xl">
              I Do Web Design & Development since I was in the First Semester of
              University.
            </h2>
            <p className="lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              laboriosam nulla vitae sunt esse minus optio autem unde voluptatum
              enim!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
