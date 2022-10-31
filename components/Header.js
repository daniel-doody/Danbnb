import Image from "next/image";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css"; // date-picker main style file
import "react-date-range/dist/theme/default.css"; // date-picker theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

//
//

const Header = ({ searchedResults }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(1);
  const router = useRouter();

  //
  //

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        // returns a date value in string format.
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numGuests,
      },
    });
  };

  //
  //

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  //

  return (
    // header tag tells search engines / google robot that this the the header.
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* Left Div - Logo */}
      <div className="relative flex items-center h-14 cursor-pointer my-auto">
        {/* We use Next.js image tag bc it automatically optimizes/compresses the image, and turns it into a webp image... much smaller than jpg. */}
        <Image
          src="/danbnb-logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="danbnb logo"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Middle Div - Search Section */}
      <div className="flex items-center md:border-2 rounded-full py-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent flex-grow pl-5 outline-none text-black
          placeholder-gray-400"
          type="text"
          // using the placeholder for the Search page.
          placeholder={searchedResults || "Start your search..."}
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

      {/* Search Functionality */}
      {searchInput && (
        <div className="text-black flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          {/* Guest Selector */}
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl font-medium pl-5 pt-2 flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numGuests}
              onChange={(e) => setNumGuests(e.target.value)}
              type="number"
              min={1}
              className="text-red-400 border w-10 pl-2 outline-none"
            />
          </div>
          {/* Confirm & Cancel buttons */}
          <div className="flex text-red-500">
            <button className="grow" onClick={resetInput}>
              Cancel
            </button>
            <button className="grow" onClick={search}>
              Search
            </button>
            {/* by using Grow, they will compete for space & end up equidistant */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
