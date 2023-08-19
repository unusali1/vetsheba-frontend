import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import logo2 from "../../Assets/Logo2.PNG";

const Sidebar = () => {
  
  const button = () =>{
    
   
}

  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo2} alt="Ecommerce" 
        />
      </Link>
      <Link to="/dashboard">
        <p className="Dashboard__item" onClick={button}>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
          <Link to="/admin/products">
              <p className="Dashboard__item"><PostAddIcon /> All Products</p>
          </Link>
          <Link to="/admin/medicines">
              <p className="Dashboard__item"><PostAddIcon /> All Medicines</p>
          </Link>
          <Link to="/admin/doctors">
              <p className="Dashboard__item"><PostAddIcon /> All Doctor</p>
          </Link>
          
          <Link to="/admin/product">
             <p><AddIcon />Create Product</p>
          </Link>
          <Link to="/admin/medicine">
             <p><AddIcon />Create Medicine</p>
          </Link>
          <Link to="/admin/createdoctor">
             <p><AddIcon />Add Doctor</p>
          </Link>
          

         
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
     
      <Link to="/admin/appointments">
        <p>
          <ListAltIcon />
          Appointments
        </p>
      </Link>

      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;