import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about_one">
          <h2
            style={{ textAlign: "center", marginBottom: "10px" }}
            className="grobold"
          >
            About Us
          </h2>
          <div className="circle circle_one"></div>
          <div className="circle circle_two"></div>
          <div className="circle circle_three"></div>
          <div className="about_image">
            <img
              style={{ marginTop: "-100px", marginLeft: "30px" }}
              src="/images/new/Cat1.png"
              alt="brandImage"
            />
            <p>
              The goal of this coin is to build more interest in the digital
              world, using the interests of the common people and giving them a
              platform to not only focus on their interests but also earn from
              them.
            </p>
          </div>
          <div className="circle circle_four"></div>
          <div className="circle circle_five"></div>
          <div className="circle circle_six"></div>
        </div>

        <div className="about_four">
          <div className="about_four_inner"></div>
          <div className="about_three">
            <div className="circle circle_twelve"></div>
            <div className="circle circle_thirteen"></div>
            <div className="circle circle_fourteen"></div>
            <div className="circle circle_fifteen"></div>
            <div className="about_three_inner">
              <h2 className="grobold" style={{ color: "#7D7975" }}>
                As seen on
              </h2>
              <div className="companies">
                <div>
                  <img src="/images/Dailycoin 1.png" alt="dailycoin" />
                  <img src="/images/Coincodex 1.png" alt="Coin codex" />
                  <img
                    src="/images/Enonomic Times 1.png"
                    alt="The Economic Times"
                  />
                  <img src="/images/be-incrypto 1.png" alt="bein crypto" />
                  <img src="/images/Newsbtc 1.png" alt="news btc" />
                </div>

                <div>
                  <img
                    src="/images/Insider Monkey 1.png"
                    alt="Insider monkey"
                  />
                  <img src="/images/techtimes 1.png" alt="tech times" />
                  <img src="/images/Frame 57.png" alt="coin telegraph" />
                  <img src="/images/Crytpo news 1.png" alt="crypto news" />
                  <img
                    src="/images/Ourbitcoin News 1.png"
                    alt="ourbitcoin news"
                  />
                </div>

                <div>
                  <img
                    src="/images/CoinMarket Blog 1.png"
                    alt="Coin Market Blog"
                  />
                  <img
                    src="/images/Jesusalem post 1.png"
                    alt="The Jerusalem Post"
                  />
                  <img src="/images/theguardian 1.png" alt="The guardian" />
                  <img
                    src="/images/Internation Business  1.png"
                    alt="International business times"
                  />
                  <img
                    src="/images/The business standard 1.png"
                    alt="the business standard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
