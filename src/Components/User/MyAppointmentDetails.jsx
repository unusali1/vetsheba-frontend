import React, { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./MyAppointmentDetail.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getGetAppointmentDetails, clearErrors } from "../../actions/GetAppointmentAction";
import Loading from "../../more/Loader";


const MyAppointmentDetails = () => {
  const componentRef = useRef();
  const { appointment, error, loading } = useSelector((state) => state.myappointmentdetails);

  const dispatch = useDispatch();

  const {id} = useParams();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getGetAppointmentDetails(id));
  }, [dispatch, error, id]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Appointment Details" />
          <div>
         
          <div className="orderDetailsPagee" ref={componentRef}>
            <div className="orderDetailsContainerr">
              <Typography component="h1">
              Appointment #{appointment && appointment._id}
              </Typography>
              <Typography>Appointment Info</Typography>
              <div className="orderDetailsContainerBox">
              <table className="aptable">
                         <tbody className="tbody">
                           
                           <tr className="trow">
                            <td className="tdb">Appointment Date:</td>
                            <td className="tdb">{appointment.Date && appointment.Date.date}</td>
                           </tr>
                          
                           
                           <tr className="trow">
                            <td className="tdb">User Name:</td>
                            <td className="tdb">{appointment.user && appointment.user.name}</td>
                           </tr>
                          
                           
                           <tr className="trow">
                            <td className="tdb">Animal Name:</td>
                            <td className="tdb">{appointment.AnimalInfo && appointment.AnimalInfo.animal}</td>
                           </tr>
                           
                           
                           <tr className="trow">
                            <td className="tdb">Animal Problem:</td>
                            <td className="tdb"> {appointment.AnimalInfo && appointment.AnimalInfo.problem}</td>
                           </tr>

                           <tr className="trow">
                            <td className="tdb">Animal image:</td>
                            <td className="tdb">   <img className="tdbimg" src={appointment.AnimalInfo && appointment.AnimalInfo.image} alt="not found" /></td>
                           </tr>
                           
                           <tr className="trow">
                            <td className="tdb">Animal Age:</td>
                            <td className="tdb">{appointment.AnimalInfo && appointment.AnimalInfo.age}</td>
                           </tr>

                           <tr className="trow">
                            <td className="tdb">Phone:</td>
                            <td className="tdb">{appointment.AnimalInfo && appointment.AnimalInfo.phone}</td>
                           </tr>

                           <tr className="trow">
                            <td className="tdb">Address :</td>
                            <td className="tdb">{appointment.AnimalInfo && appointment.AnimalInfo.address}</td>
                           </tr>
                         
                         </tbody>
                    </table>

                    <div>
                    
                    </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                
                  <p style={{
                      color:"green"
                  }}>
                  PAID
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>৳ {appointment.totalPrice && appointment.totalPrice}</span>
                </div>
              </div>

            
            </div>

            <div className="orderDetailsCartItemss">
              <Typography>Doctor :</Typography>
              <div className="orderDetailsCartItemsContainerr">

                {appointment.getDoctor &&
                  appointment.getDoctor.map((item) => (
                    <div key={item.price}>
                      <img src={item.image} alt="Product" />
                       <Link to="#">
                        {item.name}
                      </Link>{" "}
                      
                      <span>
                         
                         <b>Location: {item.location}</b>
                       </span>
                      
                      
                      <span>
                         
                        <b>Fee: ৳{item.price}</b>
                      </span>
                    </div>
                  ))}


              </div>
            </div>
          </div>

          <button onClick={handlePrint} className="print__button">  Print Appointment </button>
          </div>
        </>
      )}
     
    </>
  );
};

export default  MyAppointmentDetails;