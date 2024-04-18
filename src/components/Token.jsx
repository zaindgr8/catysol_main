import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCannabis,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const serviceList = [
  {
    color: "red",
    icon: faCannabis,
    title: "Branding",
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
  },
  {
    color: "blue",
    icon: faRandom,
    title: "Content Marketing",
    description:
      "It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account",
  },
  {
    color: "yellow",
    icon: faCamera,
    title: "Web Development",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  },
];

const ServiceItem = ({ service }) => (
  <div className="bg-white dark:bg-slate-800 h-full shadow-xl rounded-[20px] p-6 lg:px-6 lg:py-12">
    <div
      className={`w-24 h-24 rounded-full text-3xl inline-flex justify-center items-center mb-6 bg-${service.color}-600 bg-opacity-10 text-${service.color}-600`}
    >
      <FontAwesomeIcon icon={service.icon} />
    </div>
    <h4 className="font-medium text-2xl mb-4">{service.title}</h4>
    <p className="opacity-80">{service.description}</p>
  </div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

export const Service2 = () => {
  return (
    <section className="ezy__service2  light py-14   text-zinc-900 dark:text-red-500">
      <div className="px-4">
        <div className="grid grid-cols-12 md:mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="text-3xl grobold text-[#1D0738] leading-none md:text-[45px] font-bold mb-6">
              Tokenomics
            </h2>
            <p className="text-md opacity-80 text-[#1D0738] grobold">
              Utilizing Solana's robust infrastructure as its foundation, $CSOL
              leverages a secure, scalable, and user-friendly blockchain.
              Whether you're an experienced cryptocurrency trader or a novice
              venturing into the realm of memes, CattySol Memecoin welcomes
              everyone.
            </p>
          </div>
        </div>
        <div className="countdown">
          <div className="countdown-inner">
            {/* <h2 className="grobold">Become Part of Solana Mystery</h2>
            <p>Hurry! & get your Catty SOL Now</p> */}
            <div className="timer">
              <div>
                <p className="grobold countdown_value">1B</p> <br /> $CSOL
              </div>
              <div>
                <p className="grobold countdown_value">60%</p> <br /> PRESALE
              </div>
              <div>
                <p className="grobold countdown_value">30.6% </p>
                <br /> LIQUIDITY
              </div>
              <div>
                <p className="grobold countdown_value">9.4%</p> <br /> CEX
                LISTING
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};
