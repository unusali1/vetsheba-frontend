import axios from "axios";
import {
    ALL_APPOINTMENTS_FAIL,
    ALL_APPOINTMENTS_REQUEST,
    ALL_APPOINTMENTS_SUCCESS,
    APPOINTMENT_DETAILS_FAIL,
    APPOINTMENT_DETAILS_REQUEST,
    APPOINTMENT_DETAILS_SUCCESS,
    CLEAR_ERRORS,
    CREATE_APPOINTMENT_REQUEST, 
    CREATE_APPOINTMENT_FAIL, 
    CREATE_APPOINTMENT_SUCCESS, 
    DELETE_APPOINTMENT_FAIL, 
    DELETE_APPOINTMENT_REQUEST, 
    DELETE_APPOINTMENT_SUCCESS, 
    MY_APPOINTMENTS_FAIL, 
    MY_APPOINTMENTS_REQUEST,
    MY_APPOINTMENTS_SUCCESS
} from "../constants/GetAppointmentConstant.js"

// Create Appointment
export const createGetAppointment = (appointment) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_APPOINTMENT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v2/appointment/new", appointment, config);

    dispatch({ type: CREATE_APPOINTMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_APPOINTMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};


// My Appointment
export const myGetAppointments = () => async (dispatch) => {
    try {
      dispatch({ type: MY_APPOINTMENTS_REQUEST });
  
      const { data } = await axios.get("/api/v2/apointments/me");
  
      dispatch({ type: MY_APPOINTMENTS_SUCCESS, payload: data.appointments });
    } catch (error) {
      dispatch({
        type: MY_APPOINTMENTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get Appointment Details
export const getGetAppointmentDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: APPOINTMENT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v2/appointment/${id}`);
  
      dispatch({ type: APPOINTMENT_DETAILS_SUCCESS, payload: data.appointment });
    } catch (error) {
      dispatch({
        type: APPOINTMENT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


// All Appointment -----Admin
export const getAllGetAppointments = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_APPOINTMENTS_REQUEST });

    const { data } = await axios.get("/api/v2/admin/appointments");

    dispatch({ type: ALL_APPOINTMENTS_SUCCESS, payload: data.appointments });
  } catch (error) {
    dispatch({
      type: ALL_APPOINTMENTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// // Update Order
// export const updateOrder = (id, order) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_ORDER_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.put(
//       `/api/v2/admin/order/${id}`,
//       order,
//       config
//     );

//     dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_ORDER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Delete Appointment
export const deleteGetAppointment = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_APPOINTMENT_REQUEST });

    const { data } = await axios.delete(`/api/v2/admin/appointment/${id}`);

    dispatch({ type: DELETE_APPOINTMENT_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_APPOINTMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};



 
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
}; 