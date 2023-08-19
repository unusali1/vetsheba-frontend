import React from "react";
import { Link } from "react-router-dom";
const DoctorCard = ({ doctor }) => {

    return (
    <>
      <Link className="ProductCard" to={`/doctor/${doctor._id}`}>
            <img
              src={doctor.images}
              alt={doctor.name}
              className="ProductImg"
            />
            <p className="productName">{doctor.name}</p>
             <p className="productName">Specilized:{doctor.category}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="offerPriceBox">
                <h1
                  className="discountPrice"
                  style={{
                    paddingLeft: "2.5vmax",
                    fontSize: ".9vmax",
                    paddingBottom: "0",
                  }}
                >
                
                </h1>
               
                <p className="seemore">See Details</p>
              </div>
            </div>
          </Link>
    </>
  );
};

export default DoctorCard;