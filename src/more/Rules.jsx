import React from 'react'
import "./Rules.css";
import MetaData from './Metadata';
import Footer from '../Components/Footer/Footer';

const Rules = () => {
    return (
        <>
        <MetaData title="Rules" />
        
        <div className='rules' style={{
            padding:"50px 30px",
            display:"flex",
            width:"95%",
            overflow:"hidden"
        }}>
            <ul className='rules'>
                <span style={{
                    color:"#000",
                    fontSize:"1.3rem",
                    fontWeight:"800",
                    fontFamily:"Roboto",
                }}>Some Rules:</span>
                <li>1. You can easily return your product..But you have to give us the delivery charge...</li>
                <li>2. You have to give delivery charge & product price first for Delivery..In Los Dhaka City you have to give 70tk and outside charge will be 120 tk</li>
                <li>3. You can get doctor appointment for your animals...</li>
                <li>4. You can buy animal medicine i our website...</li>
                <li>5. You can not buy the outofstock products...</li>
                <li>6. You can buy any products from us...we are trying to our best for give the best quality of products...</li>
                <li>7. You can find more new features in our buiseness in very soon...Our developers team always work for your good services...</li>
                <li>8. At last thanks for visit our website...Have a good day !</li>
            </ul>
        </div>
        <Footer />
       
        </>
    )
}

export default Rules