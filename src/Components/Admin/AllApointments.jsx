import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import {
  getAllGetAppointments,
  clearErrors,
  deleteGetAppointment,
} from "../../actions/GetAppointmentAction";
import { DELETE_APPOINTMENT_RESET } from "../../constants/GetAppointmentConstant";
import { ToastContainer, toast } from 'react-toastify';


const  AllAppointment = () => {
  const navigate =useNavigate();
  const dispatch = useDispatch();

  const { error, appointments } = useSelector((state) => state.allappointment);

  const { error: deleteError, isDeleted } = useSelector((state) => state.deleteappointment);

  const deleteOrderHandler = (id) => {
    dispatch(deleteGetAppointment(id));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Appointment Deleted Successfully");
      navigate("/admin/appointments");
      dispatch({ type: DELETE_APPOINTMENT_RESET });
    }

    dispatch(getAllGetAppointments());
  }, [dispatch, error, deleteError,navigate, isDeleted]);

  const columns = [
    { field: "id", headerName: "Appointment ID", minWidth: 300, flex: 1 },

    {
      field: "user",
      headerName: "User Id",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    // {
    //   field: "itemsQty",
    //   headerName: "Items Qty",
    //   type: "number",
    //   minWidth: 150,
    //   flex: 0.4,
    // },

    {
      field: "fee",
      headerName: "Fee",
      type: "number",
      minWidth: 270,
      flex: 0.5,
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
            <Link to={`/appointment/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
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

  appointments  &&
  appointments.forEach((item) => {
      rows.push({
         id: item._id,
         user: item.user,
        fee: item.totalPrice,
       
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL ORDERS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL Appointment</h1>

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
  );
};

export default AllAppointment;