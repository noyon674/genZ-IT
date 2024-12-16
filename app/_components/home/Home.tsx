import TypeWriter from "../common/TypeWriter";
import Button from "../common/Button";

function Home() {
  return (
    <div className="relative bg-homeBanner mt-[10vh] w-full h-[90vh] bg-cover bg-center">
      <div className="absolute top-0 left-0 w-full h-full text-white flex items-center">
        <div
          className="container px-5 md:px-0 lg:pl-[200px]"
          data-aos="fade-up"
        >
          <p className="mb-5">
            <span className="text-white rounded-md font-bold lg:text-xl">
              Hi There,
            </span>
          </p>
          <h1 className="text-xl font-semibold uppercase mb-5 md:text-4xl lg:text-5xl">
            I am Noyon Sarker <br />
            Software{" "}
            <span className="text-black">
              <TypeWriter
                items={["Designer", "Developer", "Engineer", "Content Writer"]}
              />
            </span>
          </h1>
          <Button style="uppercase bg-white py-3 px-5 text-black transition duration-500 ease-in-out font-semibold rounded-md hover:text-white hover:bg-black">
            hire me
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
