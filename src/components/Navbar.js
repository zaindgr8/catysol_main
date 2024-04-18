import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
  const[click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)
  
  return (
    <div className="hero">
      <nav className="nav bg-black bg-opacity-80">
        <Link to="/">
          <img src="/images/gc1.png" alt="logo" />
        </Link>
        {/* <ul className={click ? "navList active" : "navList"}>
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
        </ul> */}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "" }} />
          ) : (
            <FaBars size={20} style={{ color: "" }} />
          )}
        </div>
      </nav>
      <div className="hero-inner">
        <h1 className="grobold hero-title">Catty SOL</h1>
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
              <p className="grobold countdown_value">Chart</p> <br />
            </div>
            {/* <div>
              <p className="grobold countdown_value">60%</p> <br /> PRESALE
            </div> */}
            <div className="rounded-lg">
              <p className="grobold countdown_value">Raydium </p>
              <br />
            </div>
            <div className="rounded-lg">
              <p className="grobold countdown_value">Jupiter</p> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar