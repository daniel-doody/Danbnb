import Image from "next/image";
import React from "react";

const SmallCard = ({ img, location, distance }) => {
  return (
    <section className="pt-5 text-black pb-5">
      <h2 className="text-2xl font-semibold py-6"> Explore Nearby </h2>

      {/* Grid div */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Locations div */}
        <div
          className="flex items-center m-2 mt-5 rounded-xl cursor-pointer sm:text-sm
         hover:bg-blue-50 hover:scale-105 transition transform-200 ease-out"
        >
          {/* image */}
          <div className="relative h-16 w-16">
            <Image
              layout="fill"
              className="rounded-lg"
              alt="locations danbnb"
              src="https://links.papareact.com/5j2"
            />
          </div>
          {/* text */}
          <div className="pl-3">
            <h2 className="font-medium">London</h2>
            <h3 className="text-gray-600">45-minute drive</h3>
          </div>
        </div>
        <div
          className="flex items-center m-2 mt-5 rounded-xl cursor-pointer sm:text-sm
         hover:bg-blue-50 hover:scale-105 transition transform-200 ease-out"
        >
          {/* image */}
          <div className="relative h-16 w-16">
            <Image
              layout="fill"
              className="rounded-lg"
              alt="locations danbnb"
              src="https://links.papareact.com/1to"
            />
          </div>
          {/* text */}
          <div className="pl-3">
            <h2 className="font-medium">Manchester</h2>
            <h3 className="text-gray-600">4.5-hour drive</h3>
          </div>
        </div>
        <div
          className="flex items-center m-2 mt-5 rounded-xl cursor-pointer sm:text-sm
         hover:bg-blue-50 hover:scale-105 transition transform-200 ease-out"
        >
          {/* image */}
          <div className="relative h-16 w-16">
            <Image
              layout="fill"
              className="rounded-lg"
              alt="locations danbnb"
              src="https://links.papareact.com/40m"
            />
          </div>
          {/* text */}
          <div className="pl-3">
            <h2 className="font-medium">Liverpool</h2>
            <h3 className="text-gray-600">4.5-hour drive</h3>
          </div>
        </div>
        <div
          className="flex items-center m-2 mt-5 rounded-xl cursor-pointer sm:text-sm
         hover:bg-blue-50 hover:scale-105 transition transform-200 ease-out"
        >
          {/* image */}
          <div className="relative h-16 w-16">
            <Image
              layout="fill"
              className="rounded-lg"
              alt="locations danbnb"
              src="https://links.papareact.com/msp"
            />
          </div>
          {/* text */}
          <div className="pl-3">
            <h2 className="font-medium">York</h2>
            <h3 className="text-gray-600">4-hour drive</h3>
          </div>
        </div>
        <div
          className="flex items-center m-2 mt-5 rounded-xl cursor-pointer sm:text-sm
         hover:bg-blue-50 hover:scale-105 transition transform-200 ease-out"
        >
          {/* image */}
          <div className="relative h-16 w-16">
            <Image
              layout="fill"
              className="rounded-lg"
              alt="locations danbnb"
              src="https://links.papareact.com/2k3"
            />
          </div>
          {/* text */}
          <div className="pl-3">
            <h2 className="font-medium">Cardiff</h2>
            <h3 className="text-gray-600">45-minute drive</h3>
          </div>
        </div>
        <div
          className="flex items-center m-2 mt-5 rounded-xl cursor-pointer sm:text-sm
         hover:bg-blue-50 hover:scale-105 transition transform-200 ease-out"
        >
          {/* image */}
          <div className="relative h-16 w-16">
            <Image
              layout="fill"
              className="rounded-lg"
              alt="locations danbnb"
              src="https://links.papareact.com/ynx"
            />
          </div>
          {/* text */}
          <div className="pl-3">
            <h2 className="font-medium">Birkenhead</h2>
            <h3 className="text-gray-600">4.5-hour drive</h3>
          </div>
        </div>
        <div
          className="flex items-center m-2 mt-5 rounded-xl cursor-pointer sm:text-sm
         hover:bg-blue-50 hover:scale-105 transition transform-200 ease-out"
        >
          {/* image */}
          <div className="relative h-16 w-16">
            <Image
              layout="fill"
              className="rounded-lg"
              alt="locations danbnb"
              src="https://links.papareact.com/kji"
            />
          </div>
          {/* text */}
          <div className="pl-3">
            <h2 className="font-medium">Newquay</h2>
            <h3 className="text-gray-600">6-hour drive</h3>
          </div>
        </div>
        <div
          className="flex items-center m-2 mt-5 rounded-xl cursor-pointer sm:text-sm
         hover:bg-blue-50 hover:scale-105 transition transform-200 ease-out"
        >
          {/* image */}
          <div className="relative h-16 w-16">
            <Image
              layout="fill"
              className="rounded-lg"
              alt="locations danbnb"
              src="https://links.papareact.com/41m"
            />
          </div>
          {/* text */}
          <div className="pl-3">
            <h2 className="font-medium">Hove</h2>
            <h3 className="text-gray-600">2-hour drive</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallCard;
