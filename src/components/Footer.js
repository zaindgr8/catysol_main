import React from "react";
import "./Footer.css";
import { FaTelegram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <h1 className="grobold" style={{ color: "#F91FA2" }}>
          Don't miss out on this amazing opportunity
        </h1>
        <p>
          Be one of the first to explore this unique coin ecosystem where you
          can invest your interest in the ever-evolving digital world and also
          make a profit!
        </p>
        <button>Enter Presale</button>
        <div className="footer-logos">
          {/* <img src="/images/Coingecko.png" alt="coin gecko" />
                <img src="/images/CoinmarketCap.png" alt="coin market cap" /> */}
          {/* <img src="/images/PancakeSwap.png" alt="pancake swap" /> */}
        </div>
      </div>
      <div className="footer-inner2">
        <div className="footer-inner2_1">
          <img src="/images/gc1.png" alt="logo" />
          <div className="subscribe">
            <p>Subscribe to our email</p>
            <div>
              <input type="text" />
              <button>Enter Presale</button>
            </div>
          </div>
        </div>
        <hr style={{ marginLeft: "70px", marginRight: "70px" }} />
        <div className="footer-inner2_2">
          <p>&copy; 2024 Catty SOL. All rights reserved</p>
          <div className="connect_socials"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
