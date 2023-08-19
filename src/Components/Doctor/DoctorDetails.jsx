import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { clearErrors, getDoctorDetails } from '../../actions/DoctorAction';
import {addDoctorAppoin} from '../../actions/AppointmentAction';
import MetaData from '../../more/Metadata';
import Footer from '../Footer/Footer';
import "../Products/ProductDetails.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const DoctorDetails = () => {
    const navigate = useNavigate();
    const dispatch =useDispatch();
    const { doctor, error } = useSelector(
        (state) => state.doctorDetails
      );



  const {id} =useParams();
      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }

        dispatch(getDoctorDetails(id));
      }, [dispatch,id,error]);

      const addToDoctorHandler = () => {
       
          dispatch(addDoctorAppoin(id));
          // toast.success("Get Doctor Appointment ");
          navigate("/date")
      };

    return (
      <>
       <MetaData title={`${doctor.name}`} /> 
         
       <div className="ProductDetails">
            <div className="first__varse">
            <Zoom Zoom top >
            <div className="caro">
               
               <img
                 className="CarouselImage"
                 src={doctor.images}
                 alt={doctor.name}
               />
           
         </div>
            </Zoom>
            </div>
            <div className="varse__2">
             <Roll right>
             <div className="detailsBlock-1">
                <h2>{doctor.name}</h2>
              </div>
             </Roll>
              
              <div className="detailsBlock">
                <Roll left>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h1>{`${doctor.degree}`}</h1>
                 
                </div>
                </Roll>
               <Roll right>
               <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h1>{`${doctor.university}`}</h1>
                
                 
                </div>
               </Roll>
                <Roll left>
                <div
                  style={{
                    display: "flex",
                   
                  }}
                >
                  <h1>Specilized : {`${doctor.category}`}</h1>
                
                 
                </div>
                </Roll>

                <Roll left>
                <div
                  style={{
                    display: "flex",
                    border: "1px solid red",
                    width: "300px",
                    margin: "5px",
                    padding: "5px",
                    borderRadius:"10px 10px 10px 10px",
                  }}
                >
                  <h4>Consultation : {`${doctor.availability}`}</h4>
                
                 
                </div>
                </Roll>
              
               <div>
                <table className="produttable">
                         <tbody className="tbody">
                           <Roll left cascade>
                           <tr className="trow">
                            <td className="tdb">Registration No</td>
                            <td className="tdb">{doctor.registration}</td>
                           </tr>
                           </Roll>
                           <Roll right cascade>
                           <tr className="trow">
                            <td className="tdb">Location</td>
                            <td className="tdb">{doctor.location}</td>
                           </tr>
                           </Roll>
                           <Roll left cascade>
                           <tr className="trow">
                            <td className="tdb">Email</td>
                            <td className="tdb">{doctor.email}</td>
                           </tr>
                           </Roll>
                           < Roll right cascade>
                           <tr className="trow">
                            <td className="tdb">Nationality</td>
                            <td className="tdb">{doctor.nationality}</td>
                           </tr>
                           </Roll>
                         
                           
                          
                         </tbody>
                    </table>
                </div>
               
               
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                
                <Zoom bottom>
                <div
                    className="pointer flex"
                    style={{
                      padding: "10px 5px",
                      alignItems: "center",
                      backgroundColor: "#E4EAEC",
                    }}
                    onClick={addToDoctorHandler}
                   
                  >
                    <LocalHospitalIcon />
                    <button
                      className="cartBtn"
                      style={{
                        opacity: 0.7,
                        padding: "0px 5px",
                        border: "none",
                        cursor: "pointer",
                        background: "none",
                      }}
                    >
                      Get Appointment
                    </button>
                  </div>
                </Zoom>
                </div>
              </div>
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

          <Footer />

      </>  
    )
};

export default DoctorDetails; 