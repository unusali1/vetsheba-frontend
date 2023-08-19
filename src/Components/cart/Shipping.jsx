import React, { useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../cart/CheckoutSteps.jsx";
import MetaData from "../../more/Metadata";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import { saveShippingInfo } from "../../actions/CartAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Filter1Icon from '@mui/icons-material/Filter1';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AddHomeIcon from '@mui/icons-material/AddHome';

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { shippingInfo } = useSelector((state) => state.cart);
  const [house, setHouse] = useState(shippingInfo.house);
  const [road, setRoad] = useState(shippingInfo.road);
  const [village, setVillage] = useState(shippingInfo.village);
  const [postoffce, setPostoffice] = useState(shippingInfo.postoffce);
  const [upozilla, setUpozilla] = useState(shippingInfo.upozilla);
  const [zilla, setZilla] = useState(shippingInfo.zilla);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 11 || phoneNo.length > 11) {
      toast.error("Phone Number should be 11digits");
      return;
    }
    dispatch(saveShippingInfo({ house, road, village, postoffce, upozilla, zilla, phoneNo }));
    navigate("/order/confirm");
  };

  return (
    <>
      <MetaData title="Shipping Details" />

      <CheckoutSteps activeStep={0} />

      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Shipping Details</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <Filter1Icon />
              <input
                type="text"
                placeholder="House No"
                required
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </div>

            <div>
              <ConfirmationNumberIcon />
              <input
                type="text"
                placeholder="Road No"
                required
                value={road}
                onChange={(e) => setRoad(e.target.value)}
              />
            </div>

            <div>
              <HouseSidingIcon />
              <input
                type="text"
                placeholder="Village"
                required
                value={village}
                onChange={(e) => setVillage(e.target.value)}
              />
            </div>

            <div>
              <HomeWorkIcon />
              <input
                type="text"
                placeholder="Post Office"
                required
                value={postoffce}
                onChange={(e) => setPostoffice(e.target.value)}
              />
            </div>

            <div>
              <AddHomeIcon />
              <input
                type="text"
                placeholder="Upozilla"
                required
                value={upozilla}
                onChange={(e) => setUpozilla(e.target.value)}
              />
            </div>

            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Zilla"
                required
                value={zilla}
                onChange={(e) => setZilla(e.target.value)}
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
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

export default Shipping;