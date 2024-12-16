import { serviceData } from "@/app/Data/service";
function Services() {
  return (
    <div className="mt-[11vh] md:h-[90vh] flex items-center" id="services">
      <div className="container px-5 md:px-0">
        <div className="text-center mb-10 md:mb-24" data-aos="fade-up">
          <p className="uppercase text-sm font-bold text-[#009990] md:text-lg">
            Services
          </p>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-800 my-2">
            This is My Expertise, The
            <br />
            Services I&apos;ll Provide My Clients
          </h2>
        </div>
        <div className="flex flex-col gap-10 md:grid grid-cols-2 lg:grid-cols-3">
          {serviceData.map((item) => (
            <div
              key={item.id}
              className="text-center px-7 py-16 rounded-lg shadow-md"
              data-aos="zoom-in"
            >
              <span className="text-6xl text-[#009990] w-full text-center service-box">
                {item.icon}
              </span>
              <h3 className="font-semibold text-gray-800 mt-5">{item.title}</h3>
              <p className="text-gray-700 text-lg mt-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
