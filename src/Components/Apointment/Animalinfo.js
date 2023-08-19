import React, { useState } from "react";
import "./Animalinfo.css";
import { useSelector, useDispatch } from "react-redux";
import CheckoutAppointment from "./CheckoutAppoinment.js";
import MetaData from "../../more/Metadata";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { saveAnimalInfo } from "../../actions/AppointmentAction";
import { Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Animalinfo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const { AnimalInfo } = useSelector((state) => state.doctorCart);

  const [address, setAddress] = useState(AnimalInfo.address);
  const [animal, setAnimal] = useState(AnimalInfo.animal);
  const [problem, setProblem] = useState(AnimalInfo.problem);
  const [age, setAge] = useState(AnimalInfo.age);
  const [phone, setPhone] = useState(AnimalInfo.phoneNo);

  const [image, setImage] = useState(AnimalInfo.image);
  const [upladingImg, setUploadingImg] = useState(false);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 5mb");
    } else {
      setImage(file);
     
    }
  }


  async function uploadImage() {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "lt2tb7ci");
    try {
      setUploadingImg(true);
      let res = await fetch("https://api.cloudinary.com/v1_1/dddvfrdb1/image/upload", {
        method: "post",
        body: data,
      });
      const urlData = await res.json();
      setUploadingImg(false);
      return urlData.url;
    } catch (error) {
      setUploadingImg(false);
      console.log(error);
    }
  }



  const shippingSubmit = async(e) => {
    e.preventDefault();

    if (phone.length < 11 || phone.length > 11) {
      toast.error("Phone Number should be 11digits");
      return;
    }

    if (!image) return alert("Please upload your previous documents or animal conditons for better treatment");
    const url = await uploadImage(image);
    
    dispatch(saveAnimalInfo({ address,animal,problem,age,phone ,image: url }));
    navigate("/appointment/confirm");
  };

  return (
    <>
      <MetaData title="Animal Details" />

      <CheckoutAppointment activeStep={1} />

      <div className="shippingContainer">
        <div className="shippingBoxx">
          <h2 className="shippingHeading">Animal Details</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
           
            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <DriveFileRenameOutlineIcon />
              <input
                type="text"
                placeholder="Animal Name"
                required
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
              />
            </div>

            <div>
              <SyncProblemIcon/>
              <input
                type="text"
                placeholder="Animal Problem"
                required
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input type="file" id="image-upload" hidden accept="image/png, image/jpeg, image/pdf" onChange={validateImg} />
            </div>

            <div>
              <CalendarMonthIcon />
              <input
                type="number"
                placeholder="Animal Age"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

          

            <div>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                size="10"
              />
            </div>
            <Button id="createProductBtn" type="submit">
              {upladingImg ||  "Continue"}
            </Button>
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

export default Animalinfo;