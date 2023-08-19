import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateMedicine, getMedicineDetails } from "../../actions/MedicineAction";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import SideBar from "./Sidebar";
import { UPDATE_MEDICINE_RESET } from "../../constants/MedicineConstant";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";

const UpdateMedicine = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { error, medicine } = useSelector((state) => state.medicineDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.deleteMedicine);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [stock, setStock] = useState(0);

  const categories = [
    "Feed Mix",
    "Cow Food",
    "Buffalo Food",
    "Goat Food",
    "Horse Food",
    "Cat Food",
    "Dog Food",
    "Fish Food",
    "Chicken Food",
  ];

  const { id } = useParams();

  useEffect(() => {
    if (medicine && medicine._id !== id) {
      dispatch(getMedicineDetails(id));
    } else {
      setName(medicine.name);
      setDescription(medicine.description);
      setPrice(medicine.price);
      setBrand(medicine.brand);
      setType(medicine.type);
      setCategory(medicine.category);
      setStock(medicine.stock);

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
      toast.success("Medicine Updated Successfully");
      navigate("/dashboard");
      dispatch({ type: UPDATE_MEDICINE_RESET });
    }
  }, [
    dispatch,
    error,
    isUpdated,
    id,
    medicine,
    navigate,
    updateError,
  ]);

  const updateMedicineSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("brand", brand);
    myForm.set("type", type);
    myForm.set("category", category);
    myForm.set("stock", stock);

    dispatch(updateMedicine(id, myForm));
  };

  return (
    <Fragment>
      <MetaData title="Edit Medicine" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateMedicineSubmitHandler}
          >
            <h1>Edit Medicine</h1>

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
                placeholder="Medicine Price"
                required
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
            <div>
              <InventoryTwoToneIcon />
              <input
                type="text"
                placeholder="Medicine Brand"
                required
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
              />
            </div>
            <div>
              <MergeTypeIcon />
              <input
                type="text"
                placeholder="Medicine Type"
                required
                onChange={(e) => setType(e.target.value)}
                value={type}
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

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
                value={stock}
              />
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

export default UpdateMedicine;