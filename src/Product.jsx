import React from 'react'
import redsketch from "./images/redsketchnew.png"
import popularchicken from "./images/popularcat-chicken.webp"
import popularmutton from "./images/popularcat-mutton.webp"
import popularfish from "./images/new popularcat-fish.jpg"
import popularprawn from "./images/popularcat-prawn.jpg"
import popularegg from "./images/popularcat-eggs.webp"
import popularcountrychicken from "./images/popularcat-countrychicken.webp"
import popularcrab from "./images/popularcat-crab.webp"
import popularpickles from "./images/popularcat-pickles.webp"
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export const Product = () => {
  return (
    <div>

      <div className="mainproductsec">
        <div className="productsecheading">
          <h1>Shop By Category</h1>
          <span className="redunderline productredline">
            <img src={redsketch} alt="" />
          </span>
        </div>
        <div className='productdisplay'>
          <div className="categorydisplaysec">
            <Link to="/Chicken">
              <div className="childcategory">
                <img src={popularchicken} alt="" />
                <h4>Chicken</h4>
              </div>
            </Link>
            <Link to="/Mutton">
            <div className="childcategory">
              <img src={popularmutton} alt="" />
              <h4>Mutton</h4>
            </div>
            </Link>
            <Link to="/Fish">
            <div className="childcategory">
              <img src={popularfish} className='popularfish' alt="" />
              <h4>Fish</h4>
            </div>
            </Link>
            <Link to="/Prawn">
            <div className="childcategory">
              <img src={popularprawn} alt="" />
              <h4>Prawn</h4>
            </div>
            </Link>
            <Link to="/CountryChicken">
            <div className="childcategory">
              <img src={popularcountrychicken} alt="" />
              <h4>Country Chicken</h4>
            </div>
            </Link>
            <Link to="/Crab">
            <div className="childcategory">
              <img src={popularcrab} alt="" />
              <h4>Crab</h4>
            </div>
            </Link>
            <Link to="/Egg">
            <div className="childcategory">
              <img src={popularegg} alt="" />
              <h4>Eggs</h4>
            </div>
            </Link>
            <Link to="/Pickle">
            <div className="childcategory">
              <img src={popularpickles} alt="" />
              <h4>Pickles</h4>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
