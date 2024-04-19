import React from "react";

const Card1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-10 relative mt-10 mb-10">
      <div className="md:w-1/2">
        <img
          src="/images/new/Cat1.png"
          alt="Cover Image"
          className="w-50 z-10"
        />
      </div>
      <div className="md:w-1/2 md:px-4 z-10">
        {/* Added z-index: 10 for content */}
        <h1 className="uppercase mb-5 font-bold grobold text-[36px] xs:text-[20px] sm:text-[24px] text-center text-white">
          About Us
        </h1>
        <div className=" text-md mb-4 text-white  font-semibold max-w-[85%]">
          Welcome to CattySol ($CSOL), a place in the Solana network, where the
          magic of the Solana meets the mystery of cats! <br /> <br />
          Our mission revolves around enhancing the vibrancy and dynamism of the
          Solana ecosystem.
          <br /> <br />
          Our objective is to cultivate a flourishing and inclusive community,
          fostering an environment where individuals can freely share their
          thoughts, support one another, and engage in the collective enthusiasm
          of internet culture. CattySol is poised t
        </div>
      </div>

      {/* Added cover photo section */}
      <div className="absolute inset-0  z-[-10]">
        {/* Adjust background color and opacity as needed */}
        <img
          src="images/new/BG.jpg" // Replace with your cover photo path
          alt="Background Cover Photo"
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
      </div>
    </div>
  );
};

export default Card1;
