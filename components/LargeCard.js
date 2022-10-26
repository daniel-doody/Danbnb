import Image from "next/image";
import React from "react";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16">
      {/* Image div */}
      <div className="relative h-96 min-w-{300px}">
        <Image
          layout="fill"
          src={img}
          objectFit="cover"
          alt="largecard image"
          className="rounded-2xl cursor-pointer shadow-lg"
        />
      </div>
      {/* Text div - absolute */}
      <div className="absolute top-32 left-14 text-black ">
        <h3 className="text-3xl font-medium mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button
          className=" shadow-md text-sm mt-5 bg-gray-900 text-white rounded-lg py-2 px-4 
        hover:shadow-xl hover:bg-black"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
