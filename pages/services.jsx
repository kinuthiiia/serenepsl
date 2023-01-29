import { Footer, Header } from "../components";

export default function Services() {
  return (
    <div>
      <Header active="services" />

      {/* Content */}
      <div className="bg-[#f1f1f1] ">
        <p className="uppercase tracking-wide text-[0.7rem] text-[#d32131] w-full text-center pt-8 m-0">
          our services
        </p>
        <h1 className="w-full font-[Oswald] text-center mt-2">
          Here’s what we do in detail
        </h1>

        <div className=" p-6 md:p-12 space-y-6">
          {/* Product list */}
          {[1, 2, 3, 4, 5].map((el) => (
            <Service />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const Service = () => {
  return (
    <div className="p-4 bg-white md:flex md:justify-between">
      <img
        src="/favicon.ico"
        alt="service"
        className="w-full md:w-[200px] md:h-[200px]"
      />
      <div className=" w-full pt-6 md:w-[calc(100%-250px)] space-y-6 my-auto">
        <h1 className="w-full text-[1.3rem] font-[Oswald]">
          Expert fire inspection services
        </h1>
        <p className="text-[0.8rem] text-gray-600 font-[300]">
          Fire protection system inspections and fire sprinkler inspections can
          result in expenses and lost revenue due to code violations, regulatory
          errors, or conflicts with authorities. Our expert inspectors
          understand multiple systems, local regulations, and code
          requirements.Our licensed team performs all fire protection
          inspections, from quarterly to fifty-year, and provides electronic
          documentation of results.
        </p>
      </div>
    </div>
  );
};
