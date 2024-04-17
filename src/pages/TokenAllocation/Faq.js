import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import "./Faq.css";
import Footer from "../../components/Footer";

const Faq = () => {
  const [click, setClick] = useState(false);
  const [showfaq, setShowfaq] = useState(false);
  const [showfaq2, setShowfaq2] = useState(false);
  const [showfaq3, setShowfaq3] = useState(false);
  const [showfaq4, setShowfaq4] = useState(false);

  const handleShow = () => setShowfaq(!showfaq);
  const handleShow2 = () => setShowfaq2(!showfaq2);
  const handleShow3 = () => setShowfaq3(!showfaq3);
  const handleShow4 = () => setShowfaq4(!showfaq4);
  const handleClick = () => setClick(!click);
  return (
    <div className="faq-outer">
      <nav className="nav">
        <Link to="/">
          <img src="/images/Logonav.png" alt="logo" />
        </Link>
        <ul className={click ? "navList active" : "navList"}>
          <li>
            <Link
              to="/"
              style={{ cursor: "pointer", textDecoration: "none" }}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              style={{ cursor: "pointer", textDecoration: "none" }}
              to="/token-allocation"
            >
              Tokenomics
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/roadmap"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Whitepaper
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="nav-link"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              FAQ
            </Link>
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
      <div className="faq-inner">
        <div className="faq_container">
          <h2
            className="grobold"
            style={{ color: "#F91FA2", textAlign: "center" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="faq-main">
            <div className="faq-main1">
              <p className="grobold">When was Carlossy Caterpillar founded?</p>
              <FaArrowRight
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              />
            </div>
            {showfaq && <div className="faq-main1">Q4 of 2021, October. </div>}
            <div className="faq-main1">
              <p className="grobold">What is Carlossy Caterpillar's vision?</p>
              <FaArrowRight
                style={{ cursor: "pointer" }}
                onClick={handleShow2}
              />
            </div>
            {showfaq2 && (
              <div className="faq-main1">
                To create more spaces for people who want to be involved in the
                digital world to combine their interests with a way of earning.
              </div>
            )}
            <div className="faq-main1">
              <p className="grobold">
                How much is a Carlossy Caterpillar's token worth?
              </p>
              <FaArrowRight
                style={{ cursor: "pointer" }}
                onClick={handleShow3}
              />
            </div>
            {showfaq3 && <div className="faq-main1">$0.06 </div>}
            <div className="faq-main1">
              <p className="grobold">
                Was Carlossy Caterpillar inspired by the M&S and Aldi dispute?
              </p>
              <FaArrowRight
                style={{ cursor: "pointer" }}
                onClick={handleShow4}
              />
            </div>
            {showfaq4 && <div className="faq-main1">$0.06 </div>}
          </div>
        </div>
        <img src="/images/Vectorbee.svg" alt="brand" />
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
