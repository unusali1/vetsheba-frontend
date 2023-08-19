import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProducts.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteDoctor,
  getAdminDoctor,
} from "../../actions/DoctorAction";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import { DELETE_DOCTOR_RESET } from "../../constants/DoctorConstants";


const AllDoctors = () => {
    const navigate = useNavigate();

const dispatch = useDispatch();

const { error, doctors } = useSelector((state) => state.doctors);

const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteDoctor);

  const deleteProductHandler = (id) => {
    dispatch(deleteDoctor(id));
  };

useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
        toast.error(deleteError);
        dispatch(clearErrors());
      }
  
      if (isDeleted) {
        toast.success("Doctor Deleted Successfully");
        navigate("/dashboard");
        dispatch({ type: DELETE_DOCTOR_RESET });
      }
    dispatch(getAdminDoctor());
  }, [dispatch, error, deleteError, isDeleted ,navigate]);

const columns = [
    { field: "id", headerName: "Doctor ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    // {
    //   field: "stock",
    //   headerName: "Stock",
    //   type: "number",
    //   minWidth: 150,
    //   flex: 0.0,
    // },

    {
      field: "fee",
      headerName: "Fee",
      type: "number",
      minWidth: 270,
      flex: 0,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/edit/doctor/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
            onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  doctors &&
    doctors.forEach((item) => {
      rows.push({
        id: item._id,
        fee: item.price,
        name: item.name,
      });
    });

    return (
       <Fragment>
      <MetaData title={`ALL Doctors - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL DOCTORS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
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
    )
}

export default AllDoctors