import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../more/Loader";
import DoctorCard from "./DoctorCard.jsx";
import { clearErrors, getDoctor } from "../../actions/DoctorAction";
import Pagination from "react-js-pagination";
import "../Products/Products.css"
import Typography from"@material-ui/core/Typography"
import MetaData from "../../more/Metadata";
import { useParams } from "react-router-dom";
import Rotate from 'react-reveal/Rotate';





const Doctors = ( ) => {
  const dispatch = useDispatch();
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const [category,setCategory] = useState("");

  const {
    doctors,
    loading,
    error,
    doctorsCount,
    resultPerPage,
  } = useSelector((state) => state.doctors);

  const { keyword} =useParams();
  

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };


  useEffect(() => {
      if(error){
          alert(error);
          dispatch(clearErrors())
      }
    dispatch(getDoctor( keyword ,currentPage,category));
  }, [dispatch,keyword ,currentPage,category,error]); 



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
        <MetaData title="Doctors" />
        
          <div>
           
            <h2
            style={{
              textAlign: "center",
              borderBottom: "1px solid rgba(21,21,21,0.5)",
              width: "20vmax",
              fontSize: "1.4vmax",
              fontFamily: "Poppins,sans-serif",
              margin: "3vmax auto",
              color: "rgb(0, 0, 0, 0.7)",
            }}
          >
            Doctors
          </h2>
           
            <div className="sidebar__product" style={{
                display:"flex",
                flex:1,
            }}>
                
            <div
             className="products"
             style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center",
               flex:".9"
             }}
           >
             {doctors &&
               doctors.map((doctor) => (
                <Rotate top left>
                 <DoctorCard key={doctor.id} doctor={doctor} />
                 </Rotate>
               ))}
           </div>
              
             
             </div>
           
              <div
                className="pagination__box"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "6vmax",
                }}
              >
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={doctorsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="First"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
              
          </div>
          <Footer />
          
        </>
      )}
    </>
  );
};

export default Doctors;