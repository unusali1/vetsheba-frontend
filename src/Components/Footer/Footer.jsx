import React from "react";
import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">Medicines</a></li>
            <li><a href="#">Animal Food</a></li>
           
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="copyright">
				<small>
					Designed & Build by{" "}
					<a
						href="mailto:support@gmail.com"
						style={{ color: "rgb(26 210 14)" }}
					>
						Online Vatenary & Food Odering System
					</a>
				</small>
				<br />
				<small>
					{new Date().getFullYear()} &copy; copyright | Online Vatenary & Food Odering System
				</small>
				<br />
			</div>
      </div>
    </div>
 </footer>
  );
};

export default Footer;