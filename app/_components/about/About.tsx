import Image from "next/image";
import computer from "@/public/image/about.jpg";

function About() {
  return (
    <div id="about" className="">
      <div className="container py-16">
        <h2
          className="text-center text-2xl mb-5"
        >
          About ME
        </h2>
        <div className="">
          <div className="px-5">
            <Image className="rounded-lg" src={computer} alt="computer" />
          </div>
          <div
            className="px-5"
          >
            <h2 className="text-lg font-semibold mb-3">
              My Story
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              reprehenderit vel, voluptates perferendis quod modi nihil nemo,
              dolore distinctio velit accusamus itaque dolorum nobis. Quisquam
              ab similique rem earum odio quis eius illo sed magni ad nostrum
              nulla nobis aspernatur cumque aut, maiores accusamus praesentium
              sequi ratione quos pariatur.
            </p>
            <h2 className="text-xl font-semibold text-gray-800 my-3">
              I Do Web Design & Development since I was in the First Semester of
              University.
            </h2>
            <p className="">
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
