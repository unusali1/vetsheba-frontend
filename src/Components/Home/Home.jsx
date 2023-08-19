import React, { useEffect } from "react";
import "./Home.css";
import ProductCard from "../Products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/ProductActions";
import Carousel from "react-material-ui-carousel";
import MetaData from "../../more/Metadata";
import { ToastContainer } from "react-toastify";
import home1 from "../../Assets/home1.jpg"
import home2 from "../../Assets/home2.jpg"
import home3 from "../../Assets/home3.PNG"
import Footer from "../Footer/Footer";
import Bounce from 'react-reveal/Bounce';



const Home = () => {


    const { products, error, loading } = useSelector(
        (state) => state.products
    );

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProduct());
    }, [dispatch])


    return (
        <div className="home-container">
           
            <div className="home-section">
                <MetaData title="Home" />

                
                <div className="banners">
                    <Carousel className="caros">
                        <img src={home3} className="bgImgs" alt="not found" />
                        <img src={home2} className="bgImgs" alt="not found" />
                        <img src={home1} className="bgImgs" alt="not found" />
                    </Carousel>
                    <div className="home__content">
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            
                            <span style={{
                                padding: "10px",

                                margin: "0px 10px",
                                textAlign: "center",
                                width: "150px",
                                height: "40px",
                                color: "#26c",
                                fontFamily: "Segoe Script",
                                fontSize: "2.4em",
                                display: "flex",
                                justifyContent: "center",
                                lineHeight: ".7",
                                alignItems: "center"
                            }}></span>
                        </div>
                       
                        <div>
                            <h2
                                style={{
                                    fontWeight: "400",
                                    fontFamily: "Poppins,sans-serif",
                                    color: "#fff",
                                    fontSize: "1em",
                                    paddingTop: "10px"
                                }}
                            >

                            </h2>
                        </div>
                        <div>
                            <a href="#container">
                                <button type="submit" style={{
                                    width: "135px",
                                    height: "50px",
                                    border: "none",
                                    background: "#3BB77E",
                                    margin: "10px 0",
                                    fontSize: "1.2vmax",
                                    color: "#fff",
                                    cursor: "pointer"
                                }}
                                    className="Home__button"
                                >SHOP NOW</button>
                            </a>
                        </div>
                    </div>
                </div>


                <h2 className="homeHeading">Featured Products</h2>
                <div className="container" id="container">
                    {loading && <h3>Loading....</h3>}
                    {error && <h4>{error.message}</h4>}
                    {products && products.map((product) => (
                       <Bounce left>
                         <ProductCard key={product._id} product={product} />
                       </Bounce>
                    ))}

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
            </div>

        </div>
    )
}


export default Home;