import { IconPhone } from "@tabler/icons";
import { useState } from "react";

export default function Header({ active }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="md:flex w-full bg-[#f1f1f1] justify-between p-3">
      <div className="flex justify-between">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" />
        {/* Nav bar */}

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden h-[40px] mt-6 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setVisible((prevState) => !prevState)}
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={
          !visible
            ? "hidden w-full md:flex md:w-auto"
            : "w-full md:flex md:w-auto md:bg-transparent bg-white z-9"
        }
        id="navbar-default"
      >
        <nav className="md:space-x-12 pt-12  rounded-md md:bg-transparent md:rounded-none p-4 md:pt-12">
          <a
            className={
              active == "home"
                ? "block md:inline bg-[#d32121] md:bg-transparent text-center text-white text-md py-3 rounded  mx-6 md:text-[#d32121] uppercase outline-none"
                : "text-gray-500 text-[0.8rem] md:inline block text-center my-6 mx-6 uppercase outline-none"
            }
            href="/"
          >
            Home
          </a>
          <a
            className={
              active == "services"
                ? "block md:inline bg-[#d32121] md:bg-transparent text-center text-white text-md py-3 rounded  mx-6 md:text-[#d32121] uppercase outline-none"
                : "text-gray-500 text-[0.8rem] md:inline block text-center my-6 mx-6 uppercase outline-none"
            }
            href="/services"
          >
            Services
          </a>
          <a
            className={
              active == "products"
                ? "block md:inline bg-[#d32121] md:bg-transparent text-center text-white text-md py-3 rounded outline-none mx-6 md:text-[#d32121] uppercase"
                : "text-gray-500 text-[0.8rem] md:inline block text-center my-6 uppercase outline-none"
            }
            href="/products"
          >
            Products
          </a>
          <a
            className={
              active == "training"
                ? "block md:inline bg-[#d32121] md:bg-transparent text-center text-white text-md  outline-none py-3 rounded  mx-6 md:text-[#d32121] uppercase"
                : "text-gray-500 text-[0.8rem] md:inline block text-center my-6 uppercase outline-none"
            }
            href="/training"
          >
            Training
          </a>
        </nav>
        {/* Contacts */}
        <div className=" w-full justify-around px-[64px] flex float-right space-x-6 p-8 bg-white md:bg-transparent uppercase outline-none">
          <button className="py-4 px-6 border border-gray-400 flex uppercase outline-none">
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
      </div>
    </div>
  );
}
