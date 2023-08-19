import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createDoctor } from "../../actions/DoctorAction";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_DOCTOR_RESET } from "../../constants/DoctorConstants";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const AddDoctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createDoctor);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [registration, setRegistration] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [category, setCategory] = useState("");
  
 


  const [image, setImage] = useState(null);
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

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please upload your profile picture");
    const url = await uploadImage(image);
    dispatch(createDoctor({ name,email,degree,university,registration,location,availability, category, images: url }))
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Doctor Added Successfully");
      navigate("/dashboard");
      dispatch({ type: NEW_DOCTOR_RESET });
    }
  }, [dispatch, error, navigate, success]);


  const categories = [
    "Anesthesia and Analgesia",
    "Behavioral medicine",
    "Emergency and critical care",
    "Laboratory animal medicine",
    
  ];



  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Add Doctor</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Doctor Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <MailOutlineIcon />
              <input
                type="text"
                placeholder="Doctor Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <SchoolIcon />
              <input
                type="text"
                placeholder="Doctor Degree"
                required
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
              />
            </div>
            <div>
              <HistoryEduIcon />
              <input
                type="text"
                placeholder="Doctor University"
                required
                onChange={(e) => setUniversity(e.target.value)}
                value={university}
              />
            </div>

            <div>
              <AppRegistrationIcon />
              <input
                type="text"
                placeholder="Reistration Number"
                required
                onChange={(e) => setRegistration(e.target.value)}
                value={registration}
              />
            </div>

            <div>
              <AccessTimeIcon />
              <input
                type="text"
                placeholder="Consultation Time"
                required
                onChange={(e) => setAvailability(e.target.value)}
                value={availability}
              />
            </div>

            <div>
              <AddLocationIcon  />
              <input
                type="text"
                placeholder="Doctor Location"
                required
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Specialization</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>


            <div id="createProductFormFile">
              <input type="file" id="image-upload" hidden accept="image/png, image/jpeg" onChange={validateImg} />
            </div>

            <div id="createProductFormImage">
             
            </div>
            <Button id="createProductBtn" type="submit">
              {upladingImg || loading ? "Createing....." : "Create"}
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
    </Fragment>
  );
};

export default AddDoctor;