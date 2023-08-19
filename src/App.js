import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import { loadUser } from './actions/userAction.js';
import "./App.css";
import Header from './Components/Home/Header.jsx';
import Home from './Components/Home/Home.jsx';
import ProductDetails from "./Components/Products/ProductDetails";
import Profile from './Components/User/Profile.jsx';
import UserData from './more/UserData.jsx';
import Store from "./Store";
// import ProtectedRoute from './route/ProtectedRoute.js';
import ProtectedRoute from './route/ProtectedRoute.js';
import About from './Components/about/About.jsx';
import Cart from './Components/cart/Cart.jsx';
import Products from './Components/Products/Products.jsx';
import Search from './Components/Products/Search.jsx';
import UpdatePassword from './Components/User/UpdatePassword.jsx';
import Support from './more/Support.jsx';

import {

  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import AllMedicines from './Components/Admin/AllMedicines.jsx';
import AllOrder from './Components/Admin/AllOrder.jsx';
import AllProducts from './Components/Admin/AllProducts.jsx';
import AllReviews from './Components/Admin/AllReviews.jsx';
import AllUsers from './Components/Admin/AllUsers.jsx';
import CreateMedicine from './Components/Admin/CreateMedicine.jsx';
import CreateProduct from './Components/Admin/CreateProduct.jsx';
import Dashboard from './Components/Admin/Dashboard.jsx';
import EditMedicine from './Components/Admin/EditMedicine.jsx';
import EditProduct from './Components/Admin/EditProduct.jsx';
import EditDoctor from './Components/Admin/EditDoctor.jsx';
import UpdateOrder from './Components/Admin/UpdateOrder.jsx';
import UpdateUser from './Components/Admin/UpdateUser.jsx';
import Animalinfo from './Components/Apointment/Animalinfo.js';
import Appointment from "./Components/Apointment/Appointment.js";
import CartMedicine from './Components/cart/CartMedicine.jsx';
import ConfirmOrder from './Components/cart/ConfirmOrder.jsx';
import Payment from './Components/cart/Payment.jsx';
import Shipping from './Components/cart/Shipping.jsx';
import Success from './Components/cart/Success.jsx';
import DoctorDetails from './Components/Doctor/DoctorDetails.jsx';
import Doctors from './Components/Doctor/Doctors.jsx';
import MedicineDetails from './Components/Medicine/MedicineDetails.jsx';
import Medicines from './Components/Medicine/Medicines.jsx';
import ForgotPassword from './Components/User/ForgotPassword.jsx';
import MoreOption from './Components/User/MoreOption.jsx';
import MyOrder from './Components/User/MyOrder.jsx';
import ResetPassword from './Components/User/ResetPassword.jsx';
import BottomTab from './more/BottomTab.jsx';
import Contact from './more/Contact.jsx';
import Rules from './more/Rules.jsx';
import ConfirmAppointment from './Components/Apointment/ConfirmAppointment.js';
import PaymentAppointment from "./Components/Apointment/PaymentAppointment.js";
import SuccessAppointment from "./Components/Apointment/SuccessAppointment.js";
import AllDoctors from './Components/Admin/AllDoctor.jsx';
import AllAppointment from './Components/Admin/AllApointments.jsx';
import MyOrderDetails from './Components/User/MyOrderDetails.jsx';
import MyAppointment from './Components/User/MyAppointment.jsx';
import MyAppointmentDetails from './Components/User/MyAppointmentDetails.jsx';
import Date from './Components/Apointment/Date.js';
import AddDoctor from './Components/Admin/AddDoctor.jsx';

import Signup from "./Components/Authentication/Singup/SignUp.jsx";
import Login from "./Components/Authentication/Login/Login.jsx";
// import EmailVerify from "./Components/Authentication/EmailVerify/EmailVerify.jsx";

const App = () => {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState(" ");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v2/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      }
    });
    Store.dispatch(loadUser());
    getStripeApiKey();

  }, []);



  return (
    <BrowserRouter>

      <Header />
      <BottomTab />
      {isAuthenticated && <UserData user={user} />}

      <Routes  >
        <Route path="/" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/password/forgot" element={< ForgotPassword />} />
        <Route path="/password/reset/:token" element={< ResetPassword />} />
        <Route path="/more" element={< MoreOption />} />
        <Route path="/cart" element={< Cart />} />
        <Route path="/login" element={< Login />} />
        <Route path="/signup" element={< Signup />} />
        <Route path="/doctorcart" element={< Appointment />} />
        <Route path="/doctors" element={< Doctors />} />
        <Route path="/doctor/:id" element={< DoctorDetails />} />
        <Route path="/cartmedi" element={< CartMedicine />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/faq" element={< Rules />} />
        <Route path="/products" element={< Products />} />
        <Route path="/search" element={< Search />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/product/:id" element={< ProductDetails />} />
        <Route path="/medicines" element={< Medicines />} />
        <Route path="/medicines/:keyword" element={< Medicines />} />
        <Route path="/medicine/:id" element={< MedicineDetails />} />

        <Route
          path="/admin/medicine"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
              <CreateMedicine />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/medicines"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
              <AllMedicines />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit/medicine/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
              <EditMedicine />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/doctors"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
              <AllDoctors />
            </ProtectedRoute>
          }
        />

         <Route
          path="/admin/createdoctor"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
              < AddDoctor />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/date"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} >
              < Date />
            </ProtectedRoute>
          }
        />

        <Route
          path="/animalinfo"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} >
              <Animalinfo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointment/confirm"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} >
              <ConfirmAppointment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointment/success"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <SuccessAppointment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointments"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              <MyAppointment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/appointments"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              <AllAppointment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointment/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              < MyAppointmentDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/me"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              < Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/me/update"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              < UpdatePassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="/support"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              < Support />
            </ProtectedRoute>
          }
        />

        <Route
          path="/shipping"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              < Shipping />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order/confirm"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              < ConfirmOrder />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              < MyOrderDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/process/payment"
          element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              <Payment />
            </Elements>
          }
        />

        <Route
          path="/process/appointment/payment"
          element={
            <Elements stripe={loadStripe(stripeApiKey)}>
              < PaymentAppointment />
            </Elements>
          }
        />

        <Route
          path="/success"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              < Success />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              < Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/product"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              < CreateProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              < AllProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit/product/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              < EditProduct />
            </ProtectedRoute>
          }
        />

         <Route
          path="/edit/doctor/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              < EditDoctor  />
            </ProtectedRoute>
          }
        />


        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              <  AllOrder />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/order/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              < UpdateOrder />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              < AllUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/user/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              < UpdateUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/reviews"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} >
              <AllReviews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}  >
              <MyOrder />
            </ProtectedRoute>
          }
        />



      </Routes>



    </BrowserRouter>
  );
};

export default App;