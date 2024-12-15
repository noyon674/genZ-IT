import Image from "next/image";
import { services } from "@/app/data";

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
          {
            services.map(item=>(
              <div
            className="mt-10 p-5 shadow-md shadow-gray-200 rounded-md"
            key={item.id}
            data-aos="fade-up"
          >
            <div>
              <Image width={300} height={300} className="w-1/3 mx-auto" blurDataURL={item.blurImage} src={item.img} alt="ui design" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-orange-800 mb-5">{item.title}</h3>
              <p className="text-lg text-slate-800">{item.desc}</p>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Services;
