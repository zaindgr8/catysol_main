import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TokenAllocation.css";
import { FaTimes, FaBars } from "react-icons/fa";

const TokenAllocation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="tokenAllocation">
      <nav className="nav bg-black bg-opacity-80">
        <Link to="/">
          <img src="/images/gc1.png" alt="logo" />
        </Link>
        <ul className={click ? "navList active" : "navList"}>
          <li>
            <Link
              to="/"
              style={{ cursor: "pointer", textDecoration: "none" }}
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              style={{ cursor: "pointer", textDecoration: "none" }}
              to="/token-allocation"
            >
              White Paper
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              style={{ cursor: "pointer", textDecoration: "none" }}
              to="/roadmap"
            >
              Roadmap
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
      <div className="tokenAllocation-inner_1">
        <div className="tokenAllocation-inner">
          <div className="tokenAllocation-inner1">
            <h2 className="grobold">Welcome to Catty SOL</h2>
            <p>
              Welcome to CattySol ($CSOL), a place in the Solana network, where
              the magic of the Solana meets the mystery of cats! Our mission
              revolves around enhancing the vibrancy and dynamism of the Solana
              ecosystem.
              <p style={{ paddingTop: "30px" }}></p>Our objective is to
              cultivate a flourishing and inclusive community, fostering an
              environment where individuals can freely share their thoughts,
              support one another, and engage in the collective enthusiasm of
              internet culture.
              <p />
              <p style={{ paddingTop: "30px" }}>
                CattySol is poised to reign over the realm of Cat Memes! Join
                forces with us to establish the feline trend!
              </p>
            </p>
          </div>

          {/* <div className="about_one about">
            <h2
              style={{ textAlign: "center", marginBottom: "10px" }}
              className="grobold"
            >
              Team Vision
            </h2>
            <div className="circle circle_one"></div>
            <div className="circle circle_two"></div>
            <div className="circle circle_three"></div>
            <div className="about_image">
              <img
                style={{ marginTop: "-100px", marginLeft: "30px" }}
                src="/images/csol2.png"
                alt="brandImage"
              />
              <p>
                In the world of memecoins, a captivating story unfolds: a feline
                rebellion against the dog-dominated status quo. CattySol emerges
                as the symbolic leader of this uprising, embodying the essence
                of cats and rallying support. Yet, beyond symbolism, CattySol
                stands as a potential leader who truly embodies the movement's
                values and aspirations, offering both symbolic representation
                and genuine leadership in this meme revolution.
              </p>
            </div>
            <div className="circle circle_four"></div>
            <div className="circle circle_five"></div>
            <div className="circle circle_six"></div>
          </div> */}
        </div>
      </div>
      {/* <div className="footer-inner footer">
        <h1 className="grobold" style={{ color: "#F91FA2" }}>
          Our Mission
        </h1>
        <p>
          CattySol firmly believes that the traditional notion of a universal
          standard for pet care falls short in meeting the diverse needs of
          individual pets. Understanding that every pet is unique, we reject the
          idea of a generic "best cat" approach to pet care. Instead, we are
          committed to harnessing the power of cutting-edge technologies such as
          blockchain and artificial intelligence (AI), specially trained in the
          intricacies of pet care. By doing so, our aim is to revolutionize the
          way pet care is delivered, ensuring that it becomes tailored to the
          specific requirements of each pet. Through this innovative approach,
          we strive to simplify the complexities of pet care while making it
          accessible and affordable for pet owners everywhere.
        </p>
        <button>Enter Presale</button>
      </div> */}

      <div className="participate">
        <h2 className="grobold">Why CattySol ?</h2>
        <div className="participate_each">
          <div className="participate1">
            <img
              className="rounded-lg"
              src="/images/new/cc.jpg"
              alt="make payment"
            />
            <p className="grobold">Strong Community</p>
            <p className="participate_text">
              CattySol is delighted to call Solana Network its home. Our
              objective is to inject vibrancy into the blockchain realm and
              offer our community unforgettable experiences.
            </p>
          </div>
          <div className="participate1">
            <img
              className="rounded-lg"
              src="/images/new/bc.jpg"
              alt="recieve Token"
            />
            <p className="grobold">Blockchain on Solana</p>
            <p className="participate_text">
              Utilizing Solana's robust infrastructure as its foundation, $CSOL
              leverages a secure, scalable, and user-friendly blockchain.
              Whether you're an experienced cryptocurrency trader or a novice
              venturing into the realm of memes, CattySol Memecoin welcomes
              everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="about_four">
        <div className=""></div>
      </div>
      <div className="about_one about mb-10">
        <h2
          style={{ textAlign: "center", marginBottom: "10px" }}
          className="grobold text-2xl "
        >
          Tokenomics
        </h2>
        <div className="circle circle_one"></div>
        <div className="circle circle_two"></div>
        <div className="circle circle_three"></div>
        <div className="about_image">
          <img
            style={{ marginTop: "-100px", marginLeft: "30px" }}
            src="/images/csol2.png"
            alt="brandImage"
          />
          <p>
            Utilizing Solana's robust infrastructure as its foundation, $CSOL
            leverages a secure, scalable, and user-friendly blockchain. Whether
            you're an experienced cryptocurrency trader or a novice venturing
            into the realm of memes, CattySol Memecoin welcomes everyone.
          </p>
        </div>
        <div className="circle circle_four"></div>
        <div className="circle circle_five"></div>
        <div className="circle circle_six"></div>
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

export default TokenAllocation;
