import React from 'react'
import "./Contact.css";
import Footer from "../Components/Footer/Footer.jsx"
const Contact = () => {
  return (
   <>
    <section className="contact">
    <div className="content">
        <h2>Contact Us</h2>
        <p>Please contact us if you need any further inquries.</p>
    </div>
    <div className="container">
        <div className="contactInfo">
            <div className="box">
                <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Address</h3>
                    <p>Rampura,Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>+8801717600000</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>support@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="contactForm">
            <form>
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input type="text" placeholder='Full Name' required="required" />
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" placeholder='Email' required="required" />
                    <span>Eamil</span>
                </div>
                <div className="inputBox">
                    <textarea name="" id="" placeholder='Type your Message...' required="required"></textarea>
                    <span>Type your Message...</span>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
        </div>
       
</section>
<Footer/>
   </>
  )
}

export default Contact