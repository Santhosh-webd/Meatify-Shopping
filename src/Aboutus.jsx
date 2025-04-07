import React from 'react'
import './App.css'
import aboutusgif from './images/aboutusmainsec.gif'
import wcufresh from "./images/icons/wcufresh.png"
import wcunochemi from "./images/icons/wcunochemical.png"
import wcufastdel from "./images/icons/wcufastdel.png"
import wcufarmtohome from "./images/icons/wcufarmtohome.png"
import wcucleanexperts from "./images/icons/wcucleanexperts.png"
import wcufssai from "./images/icons/wcufssai.png"
import redsketch from "./images/redsketchnew.png"
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export const Aboutus = ({setHeaddesign}) => {
  return (
    <div>
      <div className="aboutusherosec">
        <h1>Ab<span>out Meati</span>fy</h1>
        <p>Delivering Freshness, One Cut at a Time</p>
        <Link to="/productpg">
        <button className='aboutusbutton' onClick={() => setHeaddesign("productpage")}>Shop Now</button>
        </Link>
      </div>
      <div className="aboutusmainsec">
        
        <div className='child2aboutus'>
          <h3>Our Story</h3>
          <p>At Meatify, our journey began with a simple mission: to deliver the freshest and highest-quality meat to every home in India. What started as a small local shop has now grown into a trusted name, bringing farm-fresh, hygienically processed, and 100% natural meat straight to your doorstep.</p>
          <p>We believe in quality, transparency, and trust. That's why we source our products directly from certified farms and ensure they go through rigorous quality checks. From farm to table, every cut of meat is handled with the utmost care, maintaining freshness and flavor.</p>
          <p>With a passion for excellence, we continue to serve our customers with fresh chicken, mutton, seafood, and more, ensuring every meal is a delicious and memorable experience.</p>
          <p>Join us on our journey and taste the difference with Meatify !</p>
          <div className='aboutuslist'>
            <ul>
              <li>🧼 100% Hygienic Processing.</li>
              <li>🚚 Fast & Safe Delivery.</li>
              <li>🐓 Farm-Fresh, Chemical-Free Meat.</li>
              <li>🧊 Vacuum Sealed, Temperature-Controlled Packs.</li>
            </ul>
          </div>
          <Link to="/productpg">
          <button className='aboutusbutton checkbutton' onClick={() => setHeaddesign("productpage")}>Check Our Products</button>
          </Link>

        </div>
        <div className='child1aboutus'>
          <img src={aboutusgif} alt="" width="100%" />
        </div>
      </div>
      <div className="mainchooseus auschooseus">
        <h2>Why Choose <span>Us</span></h2>
        <img src={redsketch} className='chooseusredline' alt="" />
        <p>We bring you the freshest, cleanest, and best-quality meat, ensuring every bite is pure, delicious, and safe for your family</p>
        <div className="chooseusmainchild">
          <div className="subchildwcu">
            <div className="wcuicon">
              <img src={wcufresh} alt="" />
            </div>
            <h3>100% Fresh & Hygenic</h3>
            <p>Our meat is sourced daily from trusted farms and processed under strict hygiene standards.</p>
          </div>
          <div className="subchildwcu">
            <div className="wcuicon">
              <img src={wcunochemi} alt="" />
            </div>
            <h3>No Preservatives, No Chemicals</h3>
            <p>We ensure 100% natural meat with no added chemicals, antibiotics, or preservatives.</p>
          </div>
          <div className="subchildwcu">
            <div className="wcuicon">
              <img src={wcufarmtohome} alt="" />
            </div>
            <h3>Farm-to-Table Sourcing</h3>
            <p>We directly source from local farmers and fisheries, ensuring top-notch quality and freshness.</p>
          </div>
          <div className="subchildwcu">
            <div className="wcuicon">
              <img src={wcufastdel} alt="" />
            </div>
            <h3>Fast & Safe Delivery</h3>
            <p>Get your meat delivered fresh to your doorstep within hours, packed in food-safe packaging.</p>
          </div>
          <div className="subchildwcu">
            <div className="wcuicon">
              <img src={wcucleanexperts} alt="" />
            </div>
            <h3>Cut & Cleaned by Experts</h3>
            <p>Our butchers are trained professionals, ensuring the perfect cut and portion size for your needs.</p>
          </div>
          <div className="subchildwcu">
            <div className="wcuicon">
              <img src={wcufssai} alt="" />
            </div>
            <h3>FSSAI Approved & Quality Checked</h3>
            <p>Every piece of meat undergoes strict quality checks and is FSSAI-certified for safety.</p>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}
