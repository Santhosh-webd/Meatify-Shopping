import React, { useEffect, useState } from 'react'
import { Footer } from './Footer';
import { Link } from 'react-router-dom';

export const Cart = ({ cartdetails, setCartdetails,setHeaddesign }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let dummy = 0;
    cartdetails.map((sepprice) => dummy = sepprice.productweight * sepprice.productdiscprice + dummy)
    setPrice(dummy)
  }, [cartdetails])

  function deletefunction(params) {
    const removedata = cartdetails.filter((cartdetailscode) => cartdetailscode.chickencount !== params.chickencount || cartdetailscode.muttoncount !== params.muttoncount || cartdetailscode.fishcount !== params.fishcount || cartdetailscode.crabcount !== params.crabcount || cartdetailscode.prawncount !== params.prawncount || cartdetailscode.countrychickencount !== params.countrychickencount || cartdetailscode.eggcount !== params.eggcount || cartdetailscode.picklecount !== params.picklecount)
    setCartdetails(removedata)
  }

  function increamentprogram(params, increamentordec) {
  const particularproduct = cartdetails.indexOf(params);
  let updatedCart = [...cartdetails];

  
  if (updatedCart[particularproduct].productweight + increamentordec <= 0) {
    updatedCart = updatedCart.filter(item => item !== params);
  } else {
    updatedCart[particularproduct].productweight += increamentordec;
  }

  setCartdetails(updatedCart);
}


  return (
    <div>

      {cartdetails.length === 0 ? (
        <div className="cartemptyimage">
          <h1>Your Cart is Empty</h1>
          <h4>Start Shopping Now!</h4>
          <Link to="/productpg">
          <button className='cartemptybutton' onClick={() => setHeaddesign("productpage")}>Shop Now</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="centertable">
            <table className='maincarttable'>
              <tr>
                <th>Product</th>
                <th>Product Details</th>
                <th className='righlefpadding'>Quantity</th>
                <th className='righlefpadding'>Price</th>
                <th className='righlefpadding'>Total Price</th>
                <th>Remove</th>
              </tr>
              {cartdetails.map((alldata, index) =>
                <tr key={index} className='carttablebody '>
                  <td className='bottomborder rightborder'>
                    <img src={alldata.productimage} alt={alldata.productname} />
                  </td>
                  <td className='proddetails bottomborder rightborder'>
                    <h3>{alldata.productname}</h3>
                    <p>{alldata.productdesc}</p>
                  </td>
                  <td className='bottomborder rightborder'>
                    <div className='cartbutton'>
                      <button onClick={() => increamentprogram(alldata, -1)} className='incdecbutton'>-</button>
                      <p>{alldata.productweight}</p>
                      <button onClick={() => increamentprogram(alldata, 1)} className='incdecbutton'>+</button>
                    </div>
                  </td>
                  <td className='prodprice bottomborder rightborder'>
                    <span className='cartrupees'>&#8377;</span>  {alldata.productdiscprice}
                  </td>
                  <td className='prodprice bottomborder rightborder'>
                    <span className='cartrupees'>&#8377;</span> {alldata.productdiscprice * alldata.productweight}
                  </td>
                  <td className='bottomborder'>
                    <button className="addcartbutton" onClick={() => deletefunction(alldata)}>Remove</button>
                  </td>
                </tr>
              )}

            </table>


          </div>
          <div className="totalpricecart">
            <h1>
              Total Price: <span className='cartrupees'>&#8377;</span> <span className='p'>{price}</span>
            </h1>
          </div>
          <div className='finaltwobuttons'>
            <Link to="/productpg"><button className='continueshopbutton' onClick={() => setHeaddesign("productpage")}>Continue Shopping</button></Link>
            <Link to="/">
            <button className='checkoutbutton' onClick={(e)=> e.stopPropagation()}>Proceed to Checkout</button>
            </Link>
          </div>
          <Footer></Footer>
        </>








      )}
    </div>
  );
}
