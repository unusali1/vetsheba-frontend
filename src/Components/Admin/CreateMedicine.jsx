import React, { Fragment, useEffect, useState } from "react";
import "./newMedicine.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { NEW_MEDICINE_RESET } from "../../constants/MedicineConstant";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import {clearErrors, createMedicine } from "../../actions/MedicineAction";

const CreateMedicine = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createMedicine);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [psize, setPsize] = useState("");
  const [packaging, setPackaging] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
 


  const [image, setImage] = useState(null);
  const [upladingImg, setUploadingImg] = useState(false);
  const [ setImagePreview] = useState(null);

  function validateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 5mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
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
    dispatch(createMedicine({ name,price,brand,type,description,stock,psize, packaging , category, images: url }))
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Medicine Created Successfully");
      navigate("/dashboard");
      dispatch({ type: NEW_MEDICINE_RESET });
    }
  }, [dispatch, error, navigate, success]);


  const categories = [
    "Cow Medicine",
    "Buffalo Medicine",
    "Goat Medicine",
    "Horse Medicine",
    "Cat Medicine",
    "Dog Medicine",
    "Fish Medicine",
    "Chicken Medicine",
    "Veccines",
  ];



  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainerr">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Medicine</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Medicine Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <InventoryTwoToneIcon />
              <input
                type="text"
                placeholder="Brand Name"
                required
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div>
              <MergeTypeIcon />
              <input
                type="text"
                placeholder="Medicine Type"
                required
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div>
              <MergeTypeIcon />
              <input
                type="text"
                placeholder="Packaging Type"
                required
                onChange={(e) => setPackaging(e.target.value)}
              />
            </div>

            <div>
              <MergeTypeIcon />
              <input
                type="text"
                placeholder="Packiaging Size"
                required
                onChange={(e) => setPsize(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Medicine Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
              />
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

export default CreateMedicine;