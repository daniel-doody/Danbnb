import Image from "next/image";
import React from "react";

const FirstSection = ({ exploreData }) => {
  return (
    <section className="pt-5">
      <h2 className="text-2xl font-semibold py-6"> Explore Nearby </h2>

      {/* Pull data from the server: static render */}
      {exploreData?.map((item) => (
        <h1 key={item.location} className="text-white">
          {item.location}
        </h1>
      ))}
    </section>
  );
};

//
//
//

// export async function getStaticProps() {
//   // pull JSON array:
//   const exploreData = await fetch("https://links.papareact.com/pyp").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       exploreData,
//     },
//   };
// }

export default FirstSection;
