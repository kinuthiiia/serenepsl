import { Space } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconPhone,
} from "@tabler/icons";

export default function Footer() {
  return (
    <div className="bg-[#212530] w-full p-8 md:p-24">
      <div className="md:flex md:justify-between">
        {/* Left */}
        <div className="md:w-1/2 space-y-4">
          <h1 class="text-white font-[Oswald] text-[1.3rem] md:text-[2rem]">
            Serene Products & Services
          </h1>
          <p className="text-gray-600">
            Ruiru , Opp Shell petrol station. Sanfred building , 1st floor
          </p>
          <div className=" flex space-x-3 md:space-x-6 py-8">
            <button className="py-4 px-6 border border-gray-400 flex text-white">
              <IconPhone
                size={20}
                fill="#d32131"
                stroke={0}
                style={{ marginRight: 6 }}
              />{" "}
              0740650480
            </button>
            <button className="py-4 px-6 bg-[#d32131] text-white font-[300] uppercase">
              contact us
            </button>
          </div>
          <div className="space-x-6 flex">
            <a
              href="#"
              className="w-[48] h-[48] text-white border border-[white] rounded-3xl p-2"
            >
              <IconBrandTwitter stroke={1} />
            </a>
            <a
              href="#"
              className="w-[48] h-[48] text-white border border-[white] rounded-3xl p-2"
            >
              <IconBrandFacebook stroke={1} fill="#ffffff" />
            </a>
            <a
              href="#"
              className="w-[48] h-[48] text-white border border-[white] rounded-3xl p-2"
            >
              <IconBrandLinkedin />
            </a>
          </div>
        </div>

        {/* Right */}
        <Space h={36} />
        <div className="space-y-6 mx-auto">
          <a href="/" className="uppercase text-gray-400 block">
            home
          </a>
          <a href="/services" className="uppercase text-gray-400 block">
            services
          </a>
          <a href="/products" className="uppercase text-gray-400 block">
            products
          </a>
          <a href="/training" className="uppercase text-gray-400 block">
            training
          </a>
        </div>
      </div>

      <div className="w-full mt-12">
        <p className="w-full text-center text-[0.9rem] text-gray-400">
          Copyright © 2023. See{" "}
          <a href="https://stevekinuthia.vercel.app" className="underline">
            developer
          </a>
        </p>
      </div>
    </div>
  );
}
