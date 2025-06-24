import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logoimg from "../src/images/logo.png";
import cartimg from "./images/cart.png";

export const Header = ({ cartCount, headdesign, setHeaddesign }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <div>
      <nav className="stickyheader">
        <div className="mainheader">
          <div className="logo">
            <img src={logoimg} alt="Logo" />
            <h2 className='meatify'><span>M</span>EATIF<span>Y</span></h2>
          </div>

          <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? 'bar1-open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'bar2-open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'bar3-open' : ''}`}></div>
          </div>

          <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <li onClick={() => { setHeaddesign("home"); setMenuOpen(false); }}>
              <Link to='/'>Home {headdesign === "home" && <hr />}</Link>
            </li>
            <li onClick={() => { setHeaddesign("aboutus"); setMenuOpen(false); }}>
              <Link to='/aboutuspg'>About Us {headdesign === "aboutus" && <hr />}</Link>
            </li>
            <li onClick={() => { setHeaddesign("productpage"); setMenuOpen(false); }}>
              <Link to='/productpg'>Products {headdesign === "productpage" && <hr />}</Link>
            </li>
            <li onClick={() => { setHeaddesign("cartpage"); setMenuOpen(false); }}>
              <Link to='/cartpg'>
                <div className="cartli">
                  <div className="carttext">
                    Cart {headdesign === "cartpage" && <hr />}
                  </div>
                  <img src={cartimg} className='cartimage' alt="Cart" />
                  {cartCount > 0 && <span className='cartcount'>{cartCount}</span>}
                </div>
              </Link>
            </li>
          </ul>

          <div className="loginbuttonsec">
            <Link to="https://meatify-login-signup.netlify.app/"><button className='loginbutton'>Login</button></Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};
