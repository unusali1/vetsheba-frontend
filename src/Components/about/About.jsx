import React from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import about from "../../Assets/about.jpg"


const About = () => {
  const { loading } = useSelector(
    (state) => state.profile
  );
  return (
    <>
      {loading ? <Loading /> :
        <>
          <MetaData title="About" />
          <div>

            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img src={about} alt="not found" />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Welcome to OVFOS
                      </span>
                      <p>
                        Vet Sheba is the platform where everyone will benefit, from animal farm owners to single pet owners.
                        The website allows users to find the best food and medicine for their pets. Multiple veterinary
                        specialist doctors will be available to provide treatment. Customers can get an appointment online.
                        Ordering food and medicine is one of the excellent features of Vet Sheba. Animal farm owners and
                        pet owners don't need to give extra time for three different places. Vet Sheba will provide those
                        three services in one platform. You can order food or medicine after login in.
                      </p>
                      <p>
                        You can get a
                        specialized doctor's appointment and pay online. After an appointment, also see the appointment
                        list and food ordering list. You can track where the parcel is. After delivery, they can see
                        the order status. You can rate the products as well. You can also chat with doctors
                        and share the current conditions of their animals. So Vet Sheba will provide 360 solution for
                        animals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>What We Provide?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="not found" />
                        </div>
                        <span>Best Prices & Offers</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" alt="not found" />
                        </div>
                        <span>Best For Trust & Quality</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" alt="not found" />
                        </div>
                        <span>Fast Delivery System</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>


                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" alt="not found" />
                        </div>
                        <span>Easy Returns Service</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" alt="not found" />
                        </div>
                        <span>100% satisfication</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px"
                      }}>
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" alt="not found" />
                        </div>
                        <span>Great Daily Deal</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in some
                          form
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>

        </>
      }
    </>
  );
};

export default About;