import React from 'react'
import { Link } from 'react-router-dom'
import popularchicken from "./images/popularcat-chicken.webp"
import popularmutton from "./images/popularcat-mutton.webp"
import popularfish from "./images/new popularcat-fish.jpg"
import popularprawn from "./images/popularcat-prawn.jpg"
import deliveryimage from "./images/deliveryimg.jpg"
import redsketch from "./images/redsketchnew.png"
import wcufresh from "./images/icons/wcufresh.png"
import wcunochemi from "./images/icons/wcunochemical.png"
import wcufastdel from "./images/icons/wcufastdel.png"
import wcufarmtohome from "./images/icons/wcufarmtohome.png"
import wcucleanexperts from "./images/icons/wcucleanexperts.png"
import wcufssai from "./images/icons/wcufssai.png"
import subscriptdelivery from "./images/subscriptdelivery.png"
import { Footer } from './Footer'

export const Home = ({setHeaddesign}) => {
  return (
    <div>
      {/* <h4>This is home page</h4> */}
      <div className="heropgmainsec">
        <div className="childhomepgmain">
          <h1><span>M</span>EATIF<span>Y</span></h1>
          <div className="h2andbuttonhome">
            <h2>Fresh & Hygienic Meat Delivered to Your Doorstep!</h2>
            <Link to="/productpg"><button className='herosecbutton' onClick={() => setHeaddesign("productpage")}>Shop Now</button></Link>
          </div>

        </div>
      </div>
      <div className="categoriesmain">
        <div className="categorieshead">
          <h2>Top Selling Categories</h2>
          <span className="redunderline">
            <img src={redsketch} alt="" />
          </span>
        </div>
        <div className="categorychildmainsec">
          <Link to="/Chicken" onClick={() => setHeaddesign("productpage")}>
          <div className="childcategory">
            <img src={popularchicken} alt="" />
            <h4>Chicken</h4>
          </div>
          </Link>
          <Link to="/Mutton">
          <div className="childcategory" onClick={() => setHeaddesign("productpage")}>
            <img src={popularmutton} alt="" />
            <h4>Mutton</h4>
          </div>
          </Link>
          <Link to="/Fish">
          <div className="childcategory"onClick={() => setHeaddesign("productpage")}>
            <img src={popularfish} className='popularfish' alt="" />
            <h4>Fish</h4>
          </div>
          </Link>
          <Link to="/Prawn">
          <div className="childcategory"onClick={() => setHeaddesign("productpage")}>
            <img src={popularprawn} alt="" />
            <h4>Prawn</h4>
          </div>
          </Link>
        </div>
        <div className="popularcategorysecbutt">
          <Link to="/productpg"><button className='popularcategorybutton' onClick={() => setHeaddesign("productpage")}>Browse all Categories <span className="arrow"></span></button></Link>
        </div>
      </div>
      <div className='deliveryimage'>
        <img src={deliveryimage} alt="" width="100%" />
      </div>
      <div className="mainchooseus">
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

      <div className="mainsubsciptsection">
        <div>
          <h1>Get Exclusive Deals on Fresh Meat</h1>
          <img src={redsketch} className='subscriptionredline' alt="" />
          <p>Join our mailing list for the freshest updates, special discounts, and premium offers on our high-quality meats!</p>
        </div>
        <div className='childsubscription'>
          <div className="mainsubscriptimage">
            <img src={subscriptdelivery} alt="" />
          </div>
          <div className="subscriptmaincont">
            <form action="">
              <input type="email" placeholder='Enter your email' required />
              <button type='Submit'>Subscribe Now</button>
            </form>
            <ul>
              <li>✅ Exclusive Member Discounts</li>
              <li>🛒 Early Access to Special Sales</li>
              <li>🚚 Free Delivery on Orders Above ₹500</li>
              <li>🔥 Flash Deals & Limited-Time Offers</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </div>
  )
}
