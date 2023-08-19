import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
const MedicineCard = ({ medicine }) => {
  const options = {
    value: medicine.ratings,
    readOnly: true,
    precision: 0.5,
  };
  
  return (
    <>
      <Link className="ProductCard" to={`/medicine/${medicine._id}`}>
            <img
              src={medicine.images}
              alt={medicine.name}
              className="ProductImg"
            />
            <p className="productName">{medicine.name}</p>
            <div>
            <Rating {...options} />
              <span>({medicine.numOfReviews} Reviews)</span>
            </div>
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
                <span className="p__Price">{`৳${medicine.price}`}</span>
              </div>
            </div>
          </Link>
    </>
  );
};

export default MedicineCard;