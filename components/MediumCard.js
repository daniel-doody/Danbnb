import Image from "next/image";
import React from "react";

const MediumCard = () => {
  return (
    <section className="pt-5">
      <h2 className="text-2xl font-semibold py-6 text-black">Live Anywhere</h2>

      {/* WRAP */}
      <div className="flex space-x-3 overflow-scroll scrollbar-hide pb-5">
        {/* Card div */}
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
          {/* Image div */}
          <div className="relative h-80 w-80">
            <Image
              layout="fill"
              alt="getaways"
              src="/../public/images/outdoor-getaways.jpg"
              className="rounded-xl"
            />
          </div>
          <h3 className="text-black pt-3 mt-1 font-medium">Outdoor getaways</h3>
        </div>
        {/* Card div */}
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
          {/* Image div */}
          <div className="relative h-80 w-80">
            <Image
              layout="fill"
              alt="getaways"
              src="/../public/images/Unique-stays.webp"
              className="rounded-xl"
            />
          </div>
          <h3 className="text-black pt-3 mt-1 font-medium">Unique stays</h3>
        </div>
        {/* Card div */}
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
          {/* Image div */}
          <div className="relative h-80 w-80">
            <Image
              layout="fill"
              alt="getaways"
              src="/../public/images/Entire-homes.webp"
              className="rounded-xl"
            />
          </div>
          <h3 className="text-black pt-3 mt-1 font-medium">Entire homes</h3>
        </div>
        {/* Card div */}
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
          {/* Image div */}
          <div className="relative h-80 w-80">
            <Image
              layout="fill"
              alt="getaways"
              src="/../public/images/Pet-allowed.webp"
              className="rounded-xl"
            />
          </div>
          <h3 className="text-black pt-3 mt-1 font-medium">Pet allowed</h3>
        </div>
      </div>
    </section>
  );
};

export default MediumCard;
