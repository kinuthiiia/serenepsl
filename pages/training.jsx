import { IconArrowRight, IconStar } from "@tabler/icons";
import { Footer, Header } from "../components";

export default function Services() {
  return (
    <div>
      <Header active="training" />

      {/* Content */}
      <div className="bg-[#f1f1f1]">
        <p className="uppercase tracking-wide text-[0.7rem] text-[#d32131] w-full text-center pt-8 m-0">
          training
        </p>
        <h1 className="w-full font-[Oswald] text-center mt-2">
          We train on fire safety and inspection
        </h1>

        <div className="px-6 sm:px-12 md:px-24">
          <p className="text-[0.8rem] text-gray-600 font-[300] mt-12">
            We&apos;ve taken the knowledge we have gained from countless
            inspections and years in the field and created a real-world
            curriculum to help you maintain safety compliance. Our curriculum is
            rooted with tips and guidance on how to complete the inspections as
            efficiently and effectively as possible.
          </p>

          <p className="text-[0.8rem] text-gray-600 font-[300] mt-4">
            Through our years of experience helping healthcare facilities,
            nursing homes, commercial facilities and manufacturing plants stay
            up to date and on par with current codes and standards, we know what
            it takes to ensure staff has the knowledge they need in the field to
            make wise decisions during inspections.
          </p>

          <p className="text-[0.8rem] text-gray-600 font-[300] mt-4">
            Our online learning curriculum includes :
          </p>

          <div className="space-y-2 mt-8">
            <span className="block text-gray-800 text-[0.8rem]">
              <IconStar
                fill="#d32131"
                stroke={0}
                size={12}
                className="inline mr-4"
              />
              Fire Door Inspection Training
            </span>
            <span className="block text-gray-800 text-[0.8rem]">
              <IconStar
                fill="#d32131"
                stroke={0}
                size={12}
                className="inline mr-4"
              />
              Combustible Dust Health and Safety
            </span>
            <span className="block text-gray-800 text-[0.8rem]">
              <IconStar
                fill="#d32131"
                stroke={0}
                size={12}
                className="inline mr-4"
              />
              Fire & Smoke Damper Inspection
            </span>
            <span className="block text-gray-800 text-[0.8rem]">
              <IconStar
                fill="#d32131"
                stroke={0}
                size={12}
                className="inline mr-4"
              />
              Introduction to Smoke Control
            </span>
            <span className="block text-gray-800 text-[0.8rem]">
              <IconStar
                fill="#d32131"
                stroke={0}
                size={12}
                className="inline mr-4"
              />
              Emergency Exit Light Inspection
            </span>
            <span className="block text-gray-800 text-[0.8rem]">
              <IconStar
                fill="#d32131"
                stroke={0}
                size={12}
                className="inline mr-4"
              />
              Rolling Steel Fire Door Inspection and Drop Test
            </span>
          </div>

          {/* Benefits of training */}
          <div className="mt-12 space-y-6">
            <h1 className="w-full font-[Oswald]  mt-2">
              The Benefits of training?
            </h1>

            {[1, 2, 3, 4].map((el) => (
              <Benefit key={el} />
            ))}
          </div>
        </div>

        {/* Enroll */}
        <div className="py-16 ">
          {/* Onsite */}
          <div className=" space-y-6 sm:space-x-6 sm:flex sm:ml-24 ml-6">
            <button className=" w-full flex shadow-md bg-white sm:w-[35%] p-6 rounded-md relative">
              <div className="space-y-6">
                <h1 className=" capitalize w-full font-[Oswald] text-[1.5rem] mt-2 text-left">
                  register for <span className="text-red-700">onsite</span>{" "}
                  course
                </h1>
                <p className="text-[0.8rem] w-[80%] text-gray-600  font-[100] mt-4 text-left">
                  Partake in our{" "}
                  <span className="text-red-700 font-semibold">1 - 2 days</span>{" "}
                  onsite course and earn a fire safety novice certificate.
                </p>
              </div>

              <IconArrowRight
                size={12}
                className=" text-red-700 mr-12 absolute top-[50%] right-0 "
              />
            </button>

            {/* Online */}
            <button className="w-full flex shadow-md bg-white sm:w-[35%] p-6 rounded-md relative">
              <div className="space-y-6">
                <h1 className=" capitalize w-full font-[Oswald] text-[1.5rem] mt-2 text-left">
                  register for <span className="text-red-700">online</span>{" "}
                  class
                </h1>
                <p className="text-[0.8rem] w-[80%] text-gray-600  font-thin mt-4 text-left">
                  Partake in our{" "}
                  <span className="text-red-700 font-semibold">8 hr</span>{" "}
                  course and earn a fire safety novice certificate. Learn at
                  your own pace
                </p>
              </div>
              <IconArrowRight
                size={12}
                className=" text-red-700 mr-12 absolute top-[50%] right-0 "
              />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const Benefit = () => {
  return (
    <div className="space-y-3 pb-3">
      <span className="block text-gray-800 text-[0.8rem] uppercase font-[600]">
        <IconStar fill="#d32131" stroke={0} size={12} className="inline mr-4" />
        Protect lives
      </span>
      <p className="text-[0.8rem] text-gray-600 font-[300] mt-4">
        By training your employees, you’ll have a team of people who know
        exactly what to do in the event of a fire. Not only will they be able to
        escape the building themselves, they’ll also be able to guide customers
        to safety.
      </p>
    </div>
  );
};
