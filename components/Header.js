import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    // header tag tells search engines / google robot that this the the header.
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* Left Div - Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {/* We use Next.js image tag bc it automatically optimizes/compresses the image, and turns it into a webp image... much smaller than jpg. */}
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="danbnb logo"
        />
      </div>

      {/* Middle Div - Search Section */}
      <div className="flex items-center md:border-2 rounded-full py-2">
        <input
          className="bg-transparent flex-grow pl-5 outline-none text-black
          placeholder-gray-400"
          type="text"
          placeholder="Start your search..."
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex
         text-white bg-red-500 h-8 rounded-full p-1.5 cursor-pointer mx-3"
        />
      </div>

      {/* Right Div */}
      <div className="flex items-center text-black justify-end">
        <p className="cursor-pointer hidden md:inline-flex">Become a Host</p>
        <GlobeAltIcon className="h-5 ml-5 cursor-pointer" />
        {/* Menu */}
        <div className="flex items-center ml-6 text-black border-2 rounded-full p-1.5 cursor-pointer">
          <Bars3Icon className="h-5" />
          <UserCircleIcon className="h-7 ml-3" />
        </div>
      </div>
    </header>
  );
};

export default Header;
