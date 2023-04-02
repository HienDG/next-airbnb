import React from "react";
import Link from "next/link";

import { FaAirbnb, FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="relative w-full h-20 border shadow-sm max-w-screen-2xl borer-solid border-neutral-200">
      <div className="flex items-center justify-between w-full h-full px-20">
        <Link
          href="/"
          className="text-rose-600 flex items-center space-x-2 flex-grow basis-[140px] h-16"
        >
          <FaAirbnb size={32} />
          <span className="text-2xl font-bold">Airbnb</span>
        </Link>

        <div className="min-w-[348px] px-6">
          <div className="flex text-center align-middle shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out flex-shrink flex-grow-0 rounded-[40px] bg-white border border-solid border-[#ddd] [&>button[type=button]]:h-12 [&>button[type=button]>span]:px-4 [&>button[type=button]]:leading-[22px]">
            <button type="button" className="pl-2 font-semibold">
              <span className="px-4">Anywhere</span>
            </button>

            <button type="button" className="font-semibold">
              <span className="border-x border-solid border-x-[#ddd]">Any Week</span>
            </button>

            <button type="button" className="flex items-center font-base">
              <span>Add guests</span>

              <div className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-rose-600 m-[7px] ml-0">
                <AiOutlineSearch />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-grow basis-[140px] justify-end">
          <nav className="flex items-center h-20 text-gray-800 ">
            <div className="flex items-center h-full mr-2 leading-5">
              <div className="cursor-pointer h-[42px] rounded-[22px]  hover:bg-neutral-100 transition-colors duration-200 ease-in-out p-3 bg-transparent text-center">
                Airbnb your home
              </div>
            </div>

            <div className="flex items-center h-full">
              <button
                type="button"
                className="p-[5px] pl-3 flex items-center space-x-2 border border-solid shadow-sm bg-white rounded-[21px] transition-shadow duration-200 hover:shadow-md"
              >
                <div className="mr-2">
                  <AiOutlineMenu size={16} />
                </div>

                <div>
                  <FaUserCircle size={30} className="fill-gray-500" />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
