import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logoimg from "../src/images/logo.png";
import cartimg from "./images/cart.png"

export const Header = ({cartCount,headdesign,setHeaddesign}) => {

  return (
    <div>
      <nav className="stickyheader">
        <div className="mainheader">
          <div className="logo">
            <img src={logoimg} alt="" />
            <h2 className='meatify'><span>M</span>EATIF<span>Y</span></h2>
          </div>
          <ul>
            <li onClick={() => setHeaddesign("home")}>
              <Link to='/'>Home {headdesign === "home" && <hr />}</Link>
            </li>
            <Link to='/aboutuspg'>
              <li onClick={() => setHeaddesign("aboutus")}>
                About Us {headdesign === "aboutus" && <hr />}
              </li>
            </Link>
            <Link to='/productpg'>
              <li onClick={() => setHeaddesign("productpage")}>
                Products {headdesign === "productpage" && <hr />}
              </li>
            </Link>
            <Link to='/cartpg'>
              <li onClick={() => setHeaddesign("cartpage")}>
                <div className="cartli">
                  <div className="carttext">
                    Cart {headdesign === "cartpage" && <hr />}
                  </div>
                  <img src={cartimg} className='cartimage' alt="" />
                  {cartCount > 0 && <span className='cartcount'>{cartCount}</span>}
                </div>

              </li>
            </Link>
          </ul>
           <div className="loginbuttonsec">
            <Link to='#'><button className='loginbutton'>Login</button> </Link>
          </div>
        </div>
      </nav>

      <Outlet></Outlet>
    </div>
  )
}
