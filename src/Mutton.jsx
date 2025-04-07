import React from 'react';
import muttondetails from "./Muttondetails";
import redsketch from "./images/redsketchnew.png"
import Swal from 'sweetalert2'


export const Mutton = ({ cartdetails, setCartdetails }) => {
  return (
    <div>

      <div className="mainsubproduct">
        <div className="producttile">
          <h1>MUTTON</h1>
          <span className="pickeleredunderline">
            <img src={redsketch} alt="" />
          </span>
        </div>
        <div className="maincardsec">
          {muttondetails.map((alldata, index) =>
            <div key={index} className="productitem">
              <div className='card'>
                <div className="cardimage">
                  <span className="note">{alldata.productoffer}% Off </span>
                  <img src={alldata.productimage} alt={alldata.productname} />
                  <span className="cardprice">
                    <span className='ruppessymbol'><span>&#8377;{alldata.productogprice}</span></span>
                    &#8377;{alldata.productdiscprice}
                  </span>
                </div>
                <div className="cardcontent">
                  <h2 className='cardtitle'>{alldata.productname}</h2>
                  <p className='productweight'>{alldata.productweight} kgs </p>
                  <p className='cardtext'>{alldata.productdesc}</p>
                  <div >
                    <button
                      className="addcartbutton"
                      onClick={() => {
                        setCartdetails([...cartdetails, alldata]);
                        Swal.fire({
                          title: "Success!",
                          text: "Added to cart successfully!",
                          icon: "success",
                          timer: 1500,
                          showConfirmButton: false,
                          iconColor: "green",
                          color: "#000"
                        });
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>


    </div>
  )
}
