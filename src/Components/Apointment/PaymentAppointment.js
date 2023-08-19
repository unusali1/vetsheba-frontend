import React, {useEffect, useRef } from "react";
import CheckoutAppointment from "./CheckoutAppoinment.js"; 
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata";
import { Typography } from "@material-ui/core";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createGetAppointment, clearErrors } from "../../actions/GetAppointmentAction";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../more/Loader";
import { useNavigate } from "react-router-dom";
import Animalinfo from "./Animalinfo.js";

const Payment = () => {

  const navigate = useNavigate();
  const appointmentInfo = JSON.parse(sessionStorage.getItem("appointmentInfo"));
  
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const {Date, AnimalInfo, doctorAppoin } = useSelector((state) => state.doctorCart);
  const { user } = useSelector((state) => state.user);
  const { error,loading } = useSelector((state) => state.appointment);

  const paymentData = {
    amount: Math.round(appointmentInfo.totalPrice * 100),
  };
   
  const appointment = {
    Date,
    AnimalInfo,
    getDoctor: doctorAppoin,
    itemsPrice: appointmentInfo.subtotal,
    totalPrice: appointmentInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://vetsheba-backend.onrender.com/api/v2/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: Animalinfo.address,
              animal: Animalinfo.animal,
              problem: Animalinfo.problem,
              age: Animalinfo.age,
              phoneNo: Animalinfo.phoneNo

            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
            appointment.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createGetAppointment(appointment));
          localStorage.removeItem("doctorAppoin");
          localStorage.removeItem("AnimalInfo");
          localStorage.removeItem("Date");
          navigate("/appointment/success");
          window.location.reload();
        } else {
          toast.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
   <>
   {loading ? (
     <Loading />
   ) : (
    <>
    <MetaData title="Payment" />
    <CheckoutAppointment activeStep={3} />
    <div className="paymentContainer">
      <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
        <Typography>Card Info</Typography>
        <div>
          <CreditCardIcon />
          <CardNumberElement className="paymentInput" />
        </div>
        <div>
          <EventIcon />
          <CardExpiryElement className="paymentInput" />
        </div>
        <div>
          <VpnKeyIcon />
          <CardCvcElement className="paymentInput" />
        </div>

        <input
          type="submit"
          value={`Pay -  ৳ ${appointmentInfo && appointmentInfo.totalPrice}`}
          ref={payBtn}
          className="paymentFormBtn"
        />
      </form>
    </div>
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
   )}
   </>
  );
};

export default Payment;