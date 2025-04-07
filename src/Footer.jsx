import React from 'react'
import logoimg from "../src/images/footerlogo.png";
import facebook from "./images/smfacebook.png"
import instagram from "./images/sminstagram.png"
import twitter from "./images/smtwitter.png"
import linkedin from "./images/smlinkedin.png"
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div>
            <div className="mainfooter">
                <div className="footerlogoanddesc">
                    <div className="footerlogo">
                        <img src={logoimg} alt="" />
                        <h2 className='meatify'><span>M</span>EATIF<span>Y</span></h2>
                    </div>
                </div>
                <div className="footerflex">
                    <div className='quicklinks'>
                        <ul>
                            <li className='footerlihead'>Quick Links</li>
                            <Link to="/"><li>🏠 Home</li></Link>
                            <Link to="/aboutuspg"><li>🛍️ About Us</li></Link>
                            <Link to="/productpg"><li>🍖 Product</li></Link>
                            <Link to="/cartpg"><li>📦 Cart</li></Link>
                            <Link to="#"><li>📞 Login</li></Link> 
                        </ul>
                    </div>
                    <div className="customservice">
                        <ul>
                            <li className='footerlihead'>Contact Us</li>
                            <li>☎️ Phone: +91 90581 16583</li>
                            <li>📧 Email: meatify@abc.com</li>
                            <li>🏢 Address: 31, Meat Street,<br /> Chennai, India</li>
                        </ul>
                    </div>
                    <div className="legallinks">
                        <ul>
                            <li className='footerlihead'>Legal Links</li>
                            <li>📜 Privacy Policy</li>
                            <li>⚖️ Terms & Conditions</li>
                            <li>🚚 Shipping & Return Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="footermainhr">
                    <hr className='footerhr'/>
                </div>

                <div className="socialmedialink">
                    <ul>
                        <li><img src={facebook} alt="" /></li>
                        <li><img src={instagram} alt="" /></li>
                        <li><img src={twitter} alt="" /></li>
                        <li><img src={linkedin} alt="" /></li>
                    </ul>
                </div>
                <div className="rights">
                    <p>©2025 Santhosh. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
