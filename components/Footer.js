import React from "react";

const Footer = () => {
  return (
    <section
      className="py-16 bg-gray-200 grid grid-cols-2 md:grid-cols-4 
    gap-y-10 px-16"
    >
      <div className="space-y-3 text-sm text-gray-900">
        <h5 className="font-semibold pb-3 ">ABOUT</h5>
        {abouts.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div className="space-y-3 text-sm text-gray-900">
        <h5 className="font-semibold pb-3">COMMUNITY</h5>
        {community.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div className="space-y-3 text-sm text-gray-900">
        <h5 className="font-semibold pb-3">HOSTING</h5>
        {hosting.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div className="space-y-3 pb-5 text-sm text-gray-900">
        <h5 className="font-semibold pb-3">SUPPORT</h5>
        {support.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
};

//
//

const abouts = ["How Danbnb works", "Newsroom", "Investors", "Danbnb Plus"];
const community = [
  "Accessibility",
  "Danbnb.org: disaster housing",
  "Support Afghan refugees",
  "Combating descrimination",
];
const hosting = [
  "Try hosting",
  "DanCover for Hosts",
  "How to host responsibly",
  "Explore hosting resources",
];
const support = [
  "Help center",
  "Dancover",
  "Cancellation options",
  "Safety information",
];

//
//

export default Footer;
