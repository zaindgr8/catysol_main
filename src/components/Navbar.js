import React, { useRef, useState } from 'react'
import './Navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link';
import { Link as ScrollLink } from "react-scroll";
import SmoothScroll from './SmoothScroll';



const Navbar = () => {
  const[click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)
  
  return (
    <div className="hero">
      <nav className="nav bg-[#1C0738] bg-opacity-70 py-5 mt-5 xl:ml-8 rounded-full">
        <Link to="/">
          <img src="/images/gc1.png" alt="logo" />
        </Link>
        <ul className={click ? "navList active" : "navList"}>
          <li>
            <Link
              to="#home"
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
              to="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              style={{ cursor: "pointer", textDecoration: "none" }}
              to="#why"
            >
              Why $CSOL
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              style={{ cursor: "pointer", textDecoration: "none" }}
              to="#tokenomics"
            >
              Tokenomics
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              style={{ cursor: "pointer", textDecoration: "none" }}
              to="#roadmap"
            >
              Roadmap
            </Link>
          </li>
          <li>
            <a
              className="nav-link"
              style={{ cursor: "pointer", textDecoration: "none" }}
              href="https://csol-whitepaper.vercel.app/"
            >
              Whitepaper
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "" }} />
          ) : (
            <FaBars className="mt-7" size={20} style={{ color: "#F91FA2" }} />
          )}
        </div>
      </nav>

      <div className="hero-inner">
        <h1 id="home" className="grobold hero-title">
          Catty SOL
        </h1>
        {/* <h3 >Latest Meme Coin</h3> */}
        <p>
          Welcome to CattySol $CSOL, a place in the Solana network, <br /> where
          the magic of the Solana meets the mystery of cats!
        </p>
        <button>Enter Presale</button>
      </div>
      <div className="countdown">
        <div className="countdown-inner">
          {/* <h2 className="grobold">Become Part of Solana Mystery</h2>
          <p>Hurry! & get your Catty SOL Now</p> */}
          <div className="timer">
            <div className="rounded-lg">
              <p className="grobold">Chart</p> <br />
            </div>
            {/* <div>
              <p className="grobold countdown_value">60%</p> <br /> PRESALE
            </div> */}
            <div className="rounded-lg">
              <p className="grobold">Raydium </p>
              <br />
            </div>
            <div className="rounded-lg">
              <p className="grobold">Jupiter</p> <br />
            </div>
          </div>
        </div>
      </div>
      <span id='about'></span>
    </div>
  );
}

export default Navbar