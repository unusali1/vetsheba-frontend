import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors,  myGetAppointments } from "../../actions/GetAppointmentAction";
import { Link } from "react-router-dom";
import MetaData from "../../more/Metadata";
import LaunchIcon from "@material-ui/icons/Launch";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyAppointment = () => {
  const dispatch = useDispatch();

  const { loading, error, appointments } = useSelector((state) => state.myappointment);

  const { user } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "Appointment ID", minWidth: 300, flex: 1 },

    // {
    //   field: "status",
    //   headerName: "Status",
    //   minWidth: 150,
    //   flex: 0.5,
    //   cellClassName: (params) => {
    //     return params.getValue(params.id, "status") === "Delivered"
    //       ? "greenColor"
    //       : "redColor";
    //   },
    // },
    // {
    //   field: "itemsQty",
    //   headerName: "Items Qty",
    //   type: "number",
    //   minWidth: 150,
    //   flex: 0.3,
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
          <Link to={`/appointment/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  appointments  &&
  appointments.forEach((item, index) => {
      rows.push({
        // itemsQty: item.orderItems.length === 0 ? 1 : item.orderItems.length,
        id: item._id,
        // status: item.orderStatus,
        fee: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(myGetAppointments());
  }, [dispatch,error]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />

      {loading ? (
        <Loading />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
        </div>
      )}
   
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

export default MyAppointment;