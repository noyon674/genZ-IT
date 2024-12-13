import Image from "next/image";
import ui from "@/public/image/ui.png";
import web from "@/public/image/web.png";
import app from "@/public/image/android.png";

function Services() {
  return (
    <div className="py-10 lg:py-20" id="services">
      <div className="container">
        <div className="text-center" data-aos="flip-left">
          <p className="uppercase text-sm font-bold text-orange-600">Services</p>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-800 my-2">
            This is My Expertise, The
            <br />
            Services I&apos;ll Provide My Clients
          </h2>
        </div>
        <div className="px-5 md:grid grid-cols-2 lg:flex justify-between gap-x-20">
          <div
            className="mt-10 p-5 shadow-md shadow-gray-200 rounded-md"
            data-aos="fade-up"
          >
            <div>
              <Image className="w-1/3 mx-auto" src={ui} alt="ui design" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-orange-800 mb-5">UI & UX Design</h3>
              <p className="text-lg text-slate-800">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div
            className="p-5 mt-10 shadow-md shadow-gray-200 rounded-md"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div>
              <Image className="w-1/2 mx-auto" src={web} alt="ui design" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-orange-800 mb-5">
                Web Development
              </h3>
              <p className="text-lg text-slate-800">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div
            className="p-5 mt-10 shadow-md shadow-gray-200 rounded-md"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div>
              <Image className="w-1/2 mx-auto" src={app} alt="ui design" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-orange-800 mb-5">
                Apps Development
              </h3>
              <p className="text-lg text-slate-800">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;