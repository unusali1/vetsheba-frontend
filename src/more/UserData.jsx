import React, { useState,useRef } from "react";
import "./UserData.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Support from "@material-ui/icons/ReportProblem"
import HomeIcon from "@material-ui/icons/Home";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import { toast, ToastContainer } from 'react-toastify';

const UserData = ({ user }) => {
  const navigate =useNavigate();

   const { cartItems } = useSelector((state) => state.cart);
   const { doctorAppoin } = useSelector((state) => state.doctorCart);


  const [open, setOpen] = useState(false);
 
  
  const scroolEffect = useRef(null);

  window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        document.querySelector(".speedDial").classList.add("active");
    }
    else{
      document.querySelector(".speedDial").classList.remove("active");
    }
  })

  const dispatch = useDispatch();

  const options = [
    { icon: <HomeIcon />, name: "Home", func: home },
    { icon: <PersonIcon />, name: "Profile", func: account },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];
  if (user.role === "user") {
    options.unshift({
      icon:<Support />,
      name: "Report us",
      func: report,
    });
  }
  if (user.role === "user") {
    options.unshift({
      icon: <ListAltIcon />,
      name: "Orders",
      func: orders,
    });
  }

  if (user.role === "user") {
    options.unshift({
      icon:<LocalHospitalIcon />,
      name: "Appointments",
      func: appointments,
    });
  }

  if (user.role === "user") {
    options.unshift({
      icon: <ShoppingCartIcon
      style={{
        color: cartItems.length === 0 ? "" :"tomato" ,
      }}
      />,
      name: `Cart (${cartItems.length })`,
      func: cart,
    });
  }
  if (user.role === "user") {
    options.unshift({
      icon: <FavoriteBorderIcon
      style={{
        color: doctorAppoin.length === 0 ? "" :"tomato" ,
      }}
      />,
      name:`Doctor Appoint (${doctorAppoin.length })`,
      func: appointment,
    });
  }
 
  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  if (user.role === "Creator") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/dashboard");
  }
  function home() {
    navigate("/");
  }
 
  function account() {
    navigate("/me");
  }

  function report() {
    navigate("/support");
  }

  function logoutUser() {
    
    dispatch(logout());
    localStorage.removeItem("cartItems")
    // localStorage.removeItem(doctorAppoin);
    navigate("/");
    // window.location.reload();
    toast.success("Logout Successfully");

   
  }

  function orders() {
    navigate("/orders");
  }
  function appointments() {
    navigate("/appointments");
  }
  function cart() {
    navigate("/cart");
  }

  function appointment() {
    navigate("/doctorcart");
  }
 

  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        useRef={scroolEffect}
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar}
            alt="Profile"
            style={{
            position:"fixed"
            }}
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={false}
          />
        ))}
      </SpeedDial>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </>
  );
};

export default UserData;