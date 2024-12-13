import Image from "next/image";
import computer from "@/public/image/about.jpg";

function About() {
  return (
    <div id="about" className="">
      <div className="container py-16 lg:py-24">
        <h2
          className="text-center text-2xl mb-5 lg:mb-10 lg:font-semibold"
          data-aos="zoom-in"
        >
          About ME
        </h2>
        <div className="lg:grid grid-cols-2 items-center gap-x-16">
          <div className="px-5 lg:px-0 mb-3" data-aos="fade-up">
            <Image className="rounded-lg" src={computer} alt="computer" />
          </div>
          <div
            className="px-5 lg:px-0"
            data-aos="zoom-in"
          >
            <h2 className="text-lg font-semibold mb-3 lg:text-2xl text-gray-800">
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
            <h2 className="text-xl font-semibold text-gray-800 my-3 lg:text-2xl">
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
