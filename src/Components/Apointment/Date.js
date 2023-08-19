import React, { useState } from "react";
import "./Animalinfo.css";
import { useSelector, useDispatch } from "react-redux";
import CheckoutAppointment from "./CheckoutAppoinment.js";
import MetaData from "../../more/Metadata";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { apointmentDate } from "../../actions/AppointmentAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";



const Date = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { Date } = useSelector((state) => state.doctorCart);
  const [date, setDate] = useState(Date.date);
  const [time, setTime] = useState(Date.time);

  const shippingSubmit = (e) => {
    e.preventDefault();
    dispatch(apointmentDate({ date,time }));
    navigate("/animalinfo");
  };


  return (
    <>
      <MetaData title="Animal Details" />

      <CheckoutAppointment activeStep={1} />

      <div className="shippingContainer">
        <div >
          <h2 >Appointment Date</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <AccessTimeIcon />

              <input
                type="date"
                placeholder="Appointment Date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)} 
                min="2022-11-29"
              />
            </div>

            <div>
             
              <AccessTimeIcon />
              <input
                type="time"
                placeholder="Appointment time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)} 
              />
            </div>

            <input
              type="submit"
              value="Continue"
              className="shippingBtn"

            />
          </form>
        </div>
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
  );
};

export default Date;