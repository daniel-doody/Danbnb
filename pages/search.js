/* eslint-disable react/no-unescaped-entities */
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
  const { data, error } = useSWR("/api/staticdata", fetcher);
  // console.log(data);

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
            Danbnb's in {formattedLocation()}:
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
          {/* 3:49:48 */}
          <div className="flex flex-col">
            {bnbArray.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  key={title}
                />
              )
            )}
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

const bnbArray = [
  {
    img: "https://links.papareact.com/xqj",
    location: "London",
    title: "Stay at this spacious Edwardian House",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    price: "$30 / night",
    total: "$117 total",
    long: -0.0022275,
    lat: 51.5421655,
  },
  {
    img: "https://links.papareact.com/hz2",
    location: "London",
    title: "Independant luxury studio apartment",
    description:
      "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
    star: 4.3,
    price: "$40 / night",
    total: "$157 total",
    long: -0.095091,
    lat: 51.48695,
  },
  {
    img: "https://links.papareact.com/uz7",
    location: "London",
    title: "London Studio Apartments",
    description:
      "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
    star: 3.8,
    price: "$35 / night",
    total: "$207 total",
    long: -0.135638,
    lat: 51.521916,
  },
  {
    img: "https://links.papareact.com/6as",
    location: "London",
    title: "30 mins to Oxford Street, Excel London",
    description:
      "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.1,
    price: "$55 / night",
    total: "$320 total",
    long: -0.069961,
    lat: 51.472618,
  },
  {
    img: "https://links.papareact.com/xhc",
    location: "London",
    title: "Spacious Peaceful Modern Bedroom",
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
    star: 5.0,
    price: "$60 / night",
    total: "$450 total",
    long: -0.08472,
    lat: 51.510794,
  },
  {
    img: "https://links.papareact.com/pro",
    location: "London",
    title: "The Blue Room In London",
    description:
      "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
    star: 4.23,
    price: "$65 / night",
    total: "$480 total",
    long: -0.094116,
    lat: 51.51401,
  },
  {
    img: "https://links.papareact.com/8w2",
    location: "London",
    title: "5 Star Luxury Apartment",
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 3.85,
    price: "$90 / night",
    total: "$650 total",
    long: -0.109889,
    lat: 51.521245,
  },
];
