import React, { useState } from "react";
import "./Roadmap.css";
import { NavLink } from "react-router-dom";
// import Footer from '../../components/Footer'
import { HashLink as Link } from "react-router-hash-link";
import {
  FaTelegram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Roadmap = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="roadmap_container">
      <div className="roadmap">
        <nav className="nav">
          <NavLink to="/">
            <img src="/images/gc1.png" alt="logo" />
          </NavLink>
          <ul className={click ? "navList active" : "navList"}>
            <li>
              <Link
                smooth
                to="/"
                style={{ cursor: "pointer", textDecoration: "none" }}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li>
              <NavLink
                className="nav-link"
                style={{ cursor: "pointer", textDecoration: "none" }}
                to="/token-allocation"
              >
                Tokenomics
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/roadmap"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Roadmap
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Whitepaper
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className="nav-link"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "" }} />
            ) : (
              <FaBars size={20} style={{ color: "" }} />
            )}
          </div>
        </nav>
        <div className="roadmap_img">
          <img src="/images/RoadMap 1.png" alt="roadmap" />
          {/* <img src="/images/RoadMaphalf.png" alt="" /> */}
        </div>
        <div className="roadmap-inner">
          <div className="roadmap_head">
            <h2 className="grobold" style={{ color: "#F91FA2" }}>
              ROADMAP
            </h2>
            <p style={{ color: "#F91FA2" }}>
              To make achievement and assessment easier, we've separated our
              Roadmap into phases. We design solid and realistic approaches to
              attain these goals.
            </p>
          </div>
          <div className="roadmap_items">
            <div className="roadmap_item roadmap_item1">
              <h3 className="grobold">Phase I</h3>
              <p>
                Creation Carlossy Caterpillar - innovation is conceptualized.
              </p>
            </div>
            <div className="roadmap_item roadmap_item2">
              <h3 className="grobold">Phase II</h3>
              <ul>
                <li>Release of lite paper</li>
                <li>Website creation and launch</li>
                <li>Creation of token</li>
                <li>Pre-sale/private sale</li>
                <li>Partnerships</li>
                <li>Release of white paper</li>
              </ul>
            </div>
            <div className="roadmap_item roadmap_item3">
              <h3 className="grobold">Phase III</h3>
              <ul>
                <li>Marketing</li>
                <li>Information piling on website</li>
                <li>Blog creation</li>
                <li>Release of Carlossy caterpillar app</li>
                <li>Release of upgraded version of the website</li>
              </ul>
            </div>
            <div className="roadmap_item roadmap_item4">
              <h3 className="grobold">Phase IV</h3>
              <ul>
                <li>Creation of coin wallet for the token</li>
                <li>Breakdown of how to earn with the coin</li>
              </ul>
            </div>
            <div className="roadmap_item roadmap_item5">
              <h3 className="grobold">Phase V</h3>
              <ul>
                <li>Public Sale</li>
                <li>Exchange Listing</li>
              </ul>
            </div>
            <div className="roadmap_item roadmap_item6">
              <h3 className="grobold">Phase VI</h3>
              <ul>
                <li>Staking and liquidity pool</li>
                <li>Community Growth</li>
              </ul>
            </div>
          </div>
          <div className="roadmap_under">
            <img src="/images/Hero-BG 1.png" alt="" />
          </div>
          <div className="rectangle_roadmap">
            <h2 className="grobold" style={{ color: "#F91FA2" }}>
              Subscribe to our email
            </h2>
            <p style={{ color: "#F91FA2", fontWeight: "600" }}>
              Keep up with our latest news and important updates
            </p>
            <div className="input_roadmap">
              <input type="text" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
