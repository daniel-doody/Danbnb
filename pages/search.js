import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import useSWR from "swr";

//

export default function Search() {
  //

  const router = useRouter();
  //   console.log(router.query);

  //   wrap the fetch function and return the result of a call in json format.
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { bnbData, error } = useSWR("/api/staticdata", fetcher);
  //   console.log(data);

  const { location, startDate, endDate, numGuests } = router.query;
  //   console.log(location)

  //   DATE FORMATTING: (found on freecodecamp.)
  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const formattedEndDate = new Date(endDate).toLocaleDateString();
  const dateRange = `${formattedStartDate} -- ${formattedEndDate}`;

  //

  //Formatting location: (found on flexiple.com)
  const formattedLocation = () => {
    const str = location;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
  };

  //

  return (
    <div>
      <Header searchedResults={`${location} | ${dateRange} | ${numGuests}`} />

      <main className="flex">
        <section className="pt-14 flex-grow px-12 ">
          <p className="text-sm">
            There are <strong>300+ stays</strong> during {dateRange} for{" "}
            {numGuests} guest(s)!
          </p>
          <h1 className="text-2xl mt-4 mb-6 font-semibold">
            Find your Danbnb in {formattedLocation()}
          </h1>
          <div className="hidden md:inline-flex mb-5 whitespace-nowrap">
            {buttons.map((item) => (
              <button
                key={item}
                className="text-sm rounded-xl px-3 py-1 border shadow-sm mr-4 hover:shadow-lg active:scale-90 
                transition transform duration-100 ease-out"
              >
                {item}
              </button>
            ))}
          </div>

          {/* 3:27:19 */}
          <div className="flex flex-col">
            {bnbData.map((item) => (
              <InfoCard
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
                key={item.title}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

//

const buttons = [
  "Cancellation flexibility",
  "Type of place",
  "Price",
  "Rooms & beds",
  "More filters",
];

//

// Fetching our dummy Danbnb data.
// export async function getServerSideProps() {
//   const userSearched = await fetch("https://links.papareact.com/isz").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       userSearched,
//     },
//   };
// }
