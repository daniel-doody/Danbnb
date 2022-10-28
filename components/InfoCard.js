import React from "react";
import Image from "next/image";
import HeartIcon from "@heroicons/react/outline";
import StarIcon from "@heroicons/react/solid";

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div
      className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg 
    transition duration-200 ease-out first:border-t"
    >
      {/* Left side - Image */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-2xl"
          layout="fill"
          objectFit="cover"
          src={img}
          alt="danbnb"
        />
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h3 className="text-xl font-medium">{title}</h3>
        <div className="border-b-2 w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-600 grow">{description}</p>

        {/* Lower Right div */}
        <div className="flex justify-between items-end">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div className="font-semibold text-lg pb-2 lg:text-2xl">{price}</div>
          <div className="text-right font-extralight">{total}</div>
        </div>
      </div>
    </div>
  );
}
