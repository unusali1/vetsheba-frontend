import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors,  updateDoctor, getDoctorDetails } from "../../actions/DoctorAction";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { UPDATE_DOCTOR_RESET } from "../../constants/DoctorConstants";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const UpdateDoctor = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { error, doctor } = useSelector((state) => state.doctorDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.deleteDoctor);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [registration, setRegistration] = useState(0);
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "Anesthesia and Analgesia",
    "Behavioral medicine",
    "Emergency and critical care",
    "Laboratory animal medicine",
  ];

  const { id } = useParams();

  useEffect(() => {
    if (doctor && doctor._id !== id) {
      dispatch(getDoctorDetails(id));
    } else {
      setName(doctor.name);
      setEmail(doctor.email);
      setDegree(doctor.degree);
      setUniversity(doctor.University);
      setRegistration(doctor.Registration);
      setAvailability(doctor.Availability);
      setCategory(doctor.Category);
      setLocation(doctor.location);

    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Doctor Updated Successfully");
      navigate("/admin/doctors");
      dispatch({ type: UPDATE_DOCTOR_RESET });
    }
  }, [
    dispatch,
    error,
    isUpdated,
    id,
    doctor,
    navigate,
    updateError,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("degree", degree);
    myForm.set("university", university);
    myForm.set("registration", registration);
    myForm.set("availability", availability);
    myForm.set("category", category);
    myForm.set("location", location);

    dispatch(updateDoctor(id, myForm));
  };

  return (
    <Fragment>
      <MetaData title="Edit Doctor" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <h1>Edit Doctor</h1>

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
                placeholder="Consultation"
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
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            
            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Update
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

export default UpdateDoctor;