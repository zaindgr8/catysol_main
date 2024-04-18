import React from "react";
import Boxes from "./boxes.js";
import indivisual from "../new/Coins.png";

const MemberShip = () => {
  return (
    <div
      className="py-10 bg-[#f5f6f7] mb-10 relative"
      id="MemberShips"
      style={{
        backgroundImage: `url(${indivisual})`, // Replace indivisual with the appropriate image variable
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="uppercase font-bold grobold text-[36px] xs:text-[20px] sm:text-[24px] text-center text-black">
        Road Map of $CSOL
      </h1>
      <div className=" grobold grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-8 px-5 mx-auto mt-10">
        <Boxes
          title="Phase 1"
          description={
            <ul className="list-disc  grobold">
              <li className=" grobold">Launch Website & Socials</li>
              <li className=" grobold">Building Community</li>
              <li className=" grobold">Presale on Pinksale</li>
              <li className=" grobold">Pre-Launch Marketing</li>
            </ul>
          }
        />
        <Boxes
          title="Phase 2"
          description={
            <ul className="list-disc">
              <li className=" grobold">Listing CEX</li>
              <li className=" grobold">Listing CMC & CG</li>
              <li className=" grobold">Trending Campaigns</li>
              <li className=" grobold">$50 Million MarketCap</li>
              <li className=" grobold">50,000 Holders</li>
            </ul>
          }
        />
        <Boxes
          title="Phase 3"
          description={
            <ul className="list-disc">
              <li className=" grobold">Listing Tier 1 Cex</li>
              <li className=" grobold">Partnerships with Financial Firms</li>
              <li className=" grobold">Live Events</li>
            </ul>
          }
          // image={indivisual}
        />
      </div>
    </div>
  );
};

export default MemberShip;
