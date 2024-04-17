import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
// import Navbar from '../../components/Navbar'
import "./TokenAllocation.css";
import { FaTimes, FaBars } from "react-icons/fa";
// import '../../components/Navbar.css'

const TokenAllocation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="tokenAllocation">
      <nav className="nav">
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
              About
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
          {/* <li>
          <Link className='nav-link' to='/roadmap' style={{cursor:'pointer',textDecoration:'none'}}>Roadmap</Link>
          </li>
          <li>
          <Link className='nav-link' to='/' style={{cursor:'pointer',textDecoration:'none'}}>Whitepaper</Link>
          </li>
          <li>
          <Link to='/faq' className='nav-link' style={{cursor:'pointer',textDecoration:'none'}}>FAQ</Link>
          </li> */}
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
              </p>{" "}
            </p>
          </div>
          <div className="tokenAllocation-inner1_1">
            <img src="/images/Frame 332.png" alt="chart" />
            <div className="sales_percent">
              <div className="sales_percent_inner">
                <div className="sales_percent1">
                  <span
                    style={{
                      backgroundColor: "#6A8D00",
                      height: "80px",
                      width: "10px",
                    }}
                  ></span>
                  <div>
                    <p style={{ color: "#F91FA2", fontWeight: "600" }}>
                      25% Private Sale
                    </p>
                    <p className="grobold">250,000,000</p>
                  </div>
                </div>
                <div className="sales_percent1">
                  <span
                    style={{
                      backgroundColor: "#A2BE02",
                      height: "80px",
                      width: "10px",
                    }}
                  ></span>
                  <div>
                    <p style={{ color: "#F91FA2", fontWeight: "600" }}>
                      25% Public Sale
                    </p>
                    <p className="grobold">150,000,000</p>
                  </div>
                </div>
                <div className="sales_percent1">
                  <span
                    style={{
                      backgroundColor: "#BDDD05",
                      height: "80px",
                      width: "10px",
                    }}
                  ></span>
                  <div>
                    <p style={{ color: "#F91FA2", fontWeight: "600" }}>
                      10% Founder's Sale
                    </p>
                    <p className="grobold"> 100,000,000</p>
                  </div>
                </div>
                <div className="sales_percent1">
                  <span
                    style={{
                      backgroundColor: "#D9FF00",
                      height: "80px",
                      width: "10px",
                    }}
                  ></span>
                  <div>
                    <p style={{ color: "#F91FA2", fontWeight: "600" }}>
                      10% Private Sale
                    </p>
                    <p className="grobold">100,000,000</p>
                  </div>
                </div>
              </div>
              <div className="sales_percent_inner_2">
                <div className="sales_percent2">
                  <span
                    style={{
                      backgroundColor: "#A4FC00",
                      height: "80px",
                      width: "10px",
                    }}
                  ></span>
                  <div>
                    <p style={{ color: "#F91FA2", fontWeight: "600" }}>
                      10% Presale
                    </p>
                    <p className="grobold">100,000,000</p>
                  </div>
                </div>
                <div className="sales_percent2">
                  <span
                    style={{
                      backgroundColor: "#85CD00",
                      height: "80px",
                      width: "10px",
                    }}
                  ></span>
                  <div>
                    <p style={{ color: "#F91FA2", fontWeight: "600" }}>
                      10% Marketing
                    </p>
                    <p className="grobold">100,000,000</p>
                  </div>
                </div>
                <div className="sales_percent2">
                  <span
                    style={{
                      backgroundColor: "#639900",
                      height: "80px",
                      width: "10px",
                    }}
                  ></span>
                  <div>
                    <p style={{ color: "#F91FA2", fontWeight: "600" }}>
                      10% investments
                    </p>
                    <p className="grobold">100,000,000</p>
                  </div>
                </div>
                <div className="sales_percent2">
                  <span
                    style={{
                      backgroundColor: "#476A06",
                      height: "80px",
                      width: "10px",
                    }}
                  ></span>
                  <div>
                    <p style={{ color: "#F91FA2", fontWeight: "600" }}>
                      10% Strategic Partners
                    </p>
                    <p className="grobold">100,000,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table_token">
        <h2
          className="grobold"
          style={{
            color: "#F91FA2",
            textAlign: "center",
            paddingTop: "50px",
            paddingBottom: "20px",
          }}
        >
          Token Details
        </h2>
        <div className="table_token_inner">
          <div className="row1">
            <div className="border-side">Total Supply</div>
            <div>Ticker</div>
            <div>Presale</div>
            <div>Launch Date</div>
            <div className="border-side1">Start Price</div>
          </div>
          <div className="row2">
            <div className="border-side3">1 billion tokens</div>
            <div>CARL</div>
            <div> 1st August 2022- 17 Occtober 2022</div>
            <div>17 October 2022</div>
            <div className="border-side4">$0.005556</div>
          </div>
        </div>
        <div className="table_token_inner_2">
          <h2
            className="grobold"
            style={{
              color: "#F91FA2",
              textAlign: "center",
              paddingTop: "50px",
              paddingBottom: "40px",
            }}
          >
            Presale Stages
          </h2>
          <div>
            <div className="row3">
              <div className="inner-row3 inner-row30">
                <div className="borderpresale1">Stages</div>
                <div>Date</div>
                <div>Number of Tokens</div>
                <div>Allocations</div>
                <div className="borderpresale2">Weeks</div>
              </div>
              <div className="inner-row3 inner-row31">
                <div>Stage 1</div>
                <div>1st August - 5th September</div>
                <div>180 Million Tokens</div>
                <div>18%</div>
                <div>5</div>
              </div>
              <hr style={{ backgroundColor: "black" }} />
              <div className="inner-row3 inner-row31">
                <div>Stage 2</div>
                <div>5th September - 26th September</div>
                <div>75 million Tokens</div>
                <div>7.5%</div>
                <div>3</div>
              </div>
              <hr style={{ backgroundColor: "black" }} />
              <div className="inner-row3 inner-row31">
                <div className="borderpresale3">Stage 3</div>
                <div>26th September- 17th October</div>
                <div>45 Million Tokens</div>
                <div>4.5%</div>
                <div className="borderpresale4">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="participate">
        <h2 className="grobold">How to participle in presale</h2>
        <div className="participate_each">
          <div className="participate1">
            <img src="/images/GroupToken1.png" alt="register" />
            <p className="grobold">1. Register</p>
            <p className="participate_text">
              Create your account on carlossy catarpillar website and verify
              your account to get started
            </p>
          </div>
          <div className="participate1">
            <img src="/images/GroupToken2.png" alt="make payment" />
            <p className="grobold">2. Make Payment</p>
            <p className="participate_text">
              Purchase $CAR token using your preferred means of payment via
              crypto or fiat transactions
            </p>
          </div>
          <div className="participate1">
            <img src="/images/VectorToken.png" alt="recieve Token" />
            <p className="grobold">3. Recieve token</p>
            <p className="participate_text">
              After presale is complete, your purchased token will be airdropped
              into your connected wallet address.
            </p>
          </div>
        </div>
      </div>
      <div className="about_four">
        <div className="about_four_inner">
          {/* <h2 className='grobold' style={{textAlign:'center'}}>Presale Countdown</h2>
            <p>Hurry! Register for presale before time runs out</p>
            <div className='about_four_timer'>
              <div className='grobold' style={{textAlign:'center',fontSize:'30px'}}>120 <br/><p className='grobold'style={{fontSize:'12px'}}>DAYS</p></div>
              <div className='grobold' style={{textAlign:'center',fontSize:'30px'}}>03 <br/><p className='grobold'style={{fontSize:'12px'}}>HOURS</p></div>
              <div className='grobold' style={{textAlign:'center',fontSize:'30px'}}>54 <br/><p className='grobold'style={{fontSize:'12px'}}>MINUTES</p></div>
              <div className='grobold' style={{textAlign:'center',fontSize:'30px'}}>09 <br/><p className='grobold'style={{fontSize:'12px'}}>SECONDS</p></div>
            </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TokenAllocation;
