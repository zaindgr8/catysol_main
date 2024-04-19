import React from "react";
import "./Footer.css";
import Footer1 from "./Footer1"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <h1
 
          className="uppercase mb-5 font-bold grobold text-[36px] xs:text-[20px] sm:text-[24px] text-center"
          style={{ color: "#F91FA2" }}
        >
          Why Catty SOL?
        </h1>
        <p>
          <span className="text-xl">Strong Community:</span> We're nurturing a
          community, not just launching a token. Join us and immerse yourself in
          a lively gathering of cryptocurrency enthusiasts who appreciate the
          playful side of blockchain technology. Experience the camaraderie by
          becoming part of the CattySol community.
          <br />
          <br />
          <span className="text-xl">Blockchain on Solana:</span> CattySol is
          delighted to call Solana Network its home. Our objective is to inject
          vibrancy into the blockchain realm and offer our community
          unforgettable experiences.
        </p>
        <button>Enter Presale</button>
        <div className="footer-logos">
          {/* <img src="/images/Coingecko.png" alt="coin gecko" />
                <img src="/images/CoinmarketCap.png" alt="coin market cap" /> */}
          {/* <img src="/images/PancakeSwap.png" alt="pancake swap" /> */}
        </div>
      </div>
      
 {/* <div className="footer-inner2" style={{ backgroundImage: `url(/images/your-footer-bg.jpg)` }}>
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
</div> */}
<Footer1/>


    </div>
  );
};

export default Footer;
