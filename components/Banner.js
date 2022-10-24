import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] kx:h-[600px]">
      <Image
        layout="fill"
        objectFit="cover"
        src="https://links.papareact.com/0fm"
        alt="danbnb background"
      />

      {/* CONTENT */}
      {/* with absolute positioning... you must make parent container "relative", so it doesn't end up flying off the screen sometimes. */}
      <div className="absolute top-1/2 w-full text-center text-black">
        <p className="text-sm sm:text-lg"> Not sure where to go? Perfect. </p>
        <button
          className="text-purple-500 bg-white px-7 py-4 mt-3 shadow-md 
        rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150"
        >
          Im Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
