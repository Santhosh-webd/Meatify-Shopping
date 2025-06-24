import React from 'react'
import logoimg from "../src/images/footerlogo.png";
import facebook from "./images/smfacebook.png"
import instagram from "./images/sminstagram.png"
import twitter from "./images/smtwitter.png"
import linkedin from "./images/smlinkedin.png"
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="mainfooter">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logoimg} alt="Meatify Logo" />
                            <h2 className='meatify'><span>M</span>EATIF<span>Y</span></h2>
                        </div>
                        <p className="footer-description">Fresh & Hygienic Meat Delivered to Your Doorstep</p>
                    </div>

                    <div className="footer-links">
                        <div className='footer-column'>
                            <h3 className='footer-heading'>Quick Links</h3>
                            <ul className="footer-list">
                                <li><Link to="/">🏠 Home</Link></li>
                                <li><Link to="/aboutuspg">🛍️ About Us</Link></li>
                                <li><Link to="/productpg">🍖 Products</Link></li>
                                <li><Link to="/cartpg">📦 Cart</Link></li>
                                <li><Link to="#">📞 Login</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className='footer-heading'>Contact Us</h3>
                            <ul className="footer-list">
                                <li>☎️ +91 90581 16583</li>
                                <li>📧 meatify@abc.com</li>
                                <li>🏢 31, Meat Street, Chennai</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className='footer-heading'>Legal</h3>
                            <ul className="footer-list">
                                <li>📜 Privacy Policy</li>
                                <li>⚖️ Terms & Conditions</li>
                                <li>🚚 Shipping Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><img src={facebook} alt="Facebook" /></a>
                        <a href="#" aria-label="Instagram"><img src={instagram} alt="Instagram" /></a>
                        <a href="#" aria-label="Twitter"><img src={twitter} alt="Twitter" /></a>
                        <a href="#" aria-label="LinkedIn"><img src={linkedin} alt="LinkedIn" /></a>
                    </div>
                    <div className="copyright">
                        ©2025 Santhosh. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}
