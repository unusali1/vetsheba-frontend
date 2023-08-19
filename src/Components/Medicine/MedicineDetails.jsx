import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { clearErrors, getMedicineDetails, newMedicineReview } from '../../actions/MedicineAction';
import MetaData from '../../more/Metadata';
import Footer from '../Footer/Footer';
import "./MedicineDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@material-ui/lab";
import { addItemsToCart } from "../../actions/CartActionMedicine";
import ReviewCard from './ReviewCard';
import { NEW_REVIEW_RESET } from '../../constants/MedicineConstant';

const MedicineDetails = () => {
    const navigate = useNavigate();
    const dispatch =useDispatch();
    const { medicine, error } = useSelector(
        (state) => state.medicineDetails
      );

  const { isAuthenticated } = useSelector((state) => state.user);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  
  const reviewSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("medicineId", id);

     isAuthenticated !== true ? navigate(`/login`) : <> </> 

    dispatch(newMedicineReview(myForm));

    comment.length === 0
        ? toast.error("Please fill the comment box")
        : toast.success("Review done successfully reload for watch it")
        
    dispatch({ type: NEW_REVIEW_RESET });
  };


      const {id} =useParams();
      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }

        dispatch(getMedicineDetails(id));
      }, [dispatch,id,error]);

      const options = {
        value: medicine.rating,
        readOnly: true,
        precision: 0.5,
      };

      

      const [quantity, setQuantity] = useState(1);

      const increaseQuantity = () => {
        if (medicine.stock <= quantity){
          return toast.error("Medicine is out of stock")
        }
        const qty = quantity + 1;
        setQuantity(qty);
      };
     
      
      const decreaseQuantity = () => {
        if (1 >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);
      };
      
      const addToCartHandler = () => {
        if (medicine.stock > 0) {
          dispatch(addItemsToCart(id, quantity));
          toast.success("Medicine Added to cart");
        } else {
          toast.error("Medicine stock limited");
        }
      };

    return (
      <>
       <MetaData title={`${medicine.name}`} /> 
         
       <div className="ProductDetails">
            <div className="first__varse">
              <div className="caro">
               
                    <img
                      className="CarouselImage"
                      src={medicine.images}
                      alt={medicine.name}
                    />
                
              </div>
            </div>
            <div className="varse__2">
              <div className="detailsBlock-1">
                <h2>{medicine.name}</h2>
              </div>
              <div className="detailsBlock-2">
              <Rating {...options} />
                <span>({medicine.numofReviews} Reviews)</span>
              </div>
              <div className="detailsBlock">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h1>{`৳${medicine.price}`}</h1>
                 
                </div>
                <div className="detailsBlock-3-1">
                  <span className="quantity">Quantity</span>
                  <div className="detailsBlock-3-1-1">
                    <button onClick={decreaseQuantity} >-</button>
                    <input type="number" readOnly value={quantity}  />
                    <button onClick={increaseQuantity}>+</button>
                  </div>{" "}
                </div>
                <p className="stock__meta" style={{ paddingBottom: ".5vmax" }}>
                  <b className={medicine.stock < 1 ? "redColor" : "greenColor"}>
                    {medicine.stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
                <div>
                <table className="produttable">
                         <tbody className="tbody">
                         <tr className="trow">
                            <td className="tdb">Brand</td>
                            <td className="tdb">{medicine.brand}</td>
                           </tr>
                           <tr className="trow">
                            <td className="tdb"> Type</td>
                            <td className="tdb">{medicine.type}</td>
                           </tr>
                           <tr className="trow">
                            <td className="tdb">Packaging Type</td>
                            <td className="tdb">{medicine.packaging}</td>
                           </tr>
                           <tr className="trow">
                            <td className="tdb">Packaging Size</td>
                            <td className="tdb">{medicine.psize}</td>
                           </tr>
                           <tr className="trow">
                            <td className="tdb">Shelf Life</td>
                            <td className="tdb">{medicine.shelf}</td>
                           </tr>
                           
                          
                         </tbody>
                    </table>
                </div>
                <div
                  className="Description"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>Description:</span>
                  <p>{medicine.description}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                
                 <div
                    className="pointer flex"
                    style={{
                      padding: "10px 5px",
                      alignItems: "center",
                      backgroundColor: "#E4EAEC",
                    }}
                    onClick={addToCartHandler}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
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
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Reviews */}
          <div className="reviews__heading">
            <h1
              style={{
                padding: "5px 30px",
                opacity: 1,
                borderBottom: "1px solid #999",
                fontFamily: "Poppins,sans-serif",
              }}
            >
              Reviews
            </h1>
          </div>
          <div>
            {/* Reviews */}
            <div
              style={{
                padding: "1vmax",
              }}
            >
              {medicine.reviews && medicine.reviews[0] ? ( 
                <div className="review__option">
                  {medicine.reviews &&
                    medicine.reviews.map((review) => (
                       
                    <ReviewCard review={review} />
                    ))}
                </div>
              ) : (
                <p
                  className="noReviews"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                  }}
                >
                  No Reviews Yet *
                </p>
              )}
              <div
                style={{
                  padding: "0px 2vmax",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: "1.8vmax",
                    fontWeight: "700",
                    lineHeight: 1,
                    letterSpacing: "-.0125em",
                    color: "#222",
                    fontFamily: "Poppins,sans-serif",
                  }}
                >
                  Add a Review
                </span>
                <div
                  style={{
                    margin: "1vmax 0",
                    flexDirection: "column",
                    display: "flex",
                  }}
                >
                  <div>
                    <span
                      style={{
                        color: "#222",
                        fontFamily: "Poppins,sans-serif",
                        padding: "1vmax 0",
                      }}
                    >
                      Your Rating*
                    </span>
                    <Rating
                      onChange={(e) => setRating(e.target.value)}
                      value={rating}
                      size="large"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    ></div>
                  </div>
                </div>
                <textarea
                  cols="30"
                  rows="6"
                  placeholder="Comment *"
                   value={comment}
                   onChange={(e) => setComment(e.target.value)}
                  style={{
                    maxWidth: "100%",
                    color: "#111",
                    borderColor: "#e1e1e1",
                    background: "#fff",
                    borderRadius: "0.3rem",
                    outline: "none",
                    padding: "5px",
                    fontSize: "1.2vmax",
                    lineHeight: "1.5",
                    resize: "none",
                    display: "block",
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    width: "12vmax",
                    margin: "1vmax 0px",
                    fontFamily: "sans-serif",
                    padding: "10px 15px",
                    background: "#3BB77E",
                    border: "none",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                   onClick={reviewSubmitHandler}
                >
                  Submit
                </button>
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

export default MedicineDetails;