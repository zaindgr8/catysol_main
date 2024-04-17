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
              White Paper
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
          {/* <li>
          <NavLink className='nav-link' to='/' style={{cursor:'pointer',textDecoration:'none'}}>Whitepaper</NavLink>
          </li> */}
          {/* <li>
          <NavLink to='/faq' className='nav-link' style={{cursor:'pointer',textDecoration:'none'}}>FAQ</NavLink>
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
      <div className="hero-inner">
        <h1 className="grobold hero-title">Catty SOL</h1>
        {/* <h3 >Latest Meme Coin</h3> */}
        <p>Buy yours now!</p>
        <button>Enter Presale</button>
      </div>
      <div className="countdown">
        <div className="countdown-inner">
          <h2 className="grobold">Buy Catty SOL Now</h2>
          <p>Hurry! & get your Catty SOL Now</p>
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
              <p className="grobold countdown_value">9.4%</p> <br /> CEX LISTING
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar