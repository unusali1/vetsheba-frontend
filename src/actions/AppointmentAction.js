import {
    ADD_TO_APOINTMENT,
    REMOVE_APPOINTMENT_DOCTOR,
    SAVE_ANIMAL_INFO,
    SAVE_APPOINTMENT_DATE,
  } from "../constants/AppointmentConstans";
  import axios from "axios";
  
  // Add to doctorAppointment ---Doctor
  export const addDoctorAppoin = (id,quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v2/doctor/${id}`);
  
    dispatch({
      type: ADD_TO_APOINTMENT,
      payload: {
        doctor: data.doctor._id,
        name: data.doctor.name,
        price: data.doctor.price,
        image: data.doctor.images,
        stock: data.doctor.stock,
        location: data.doctor.location,
        quantity,
       
      },
    });
  
    localStorage.setItem("doctorAppoin", JSON.stringify(getState().doctorCart.doctorAppoin));
  };

  // REMOVE FROM CART ---Product
  export const removeDoctorFromAppoin = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_APPOINTMENT_DOCTOR,
      payload: id,
    });
  
    localStorage.setItem("doctorAppoin", JSON.stringify(getState().doctorCart.doctorAppoin));
  };


    // SAVE Appointment Date,
    export const apointmentDate = (data) => async (dispatch) => {
      dispatch({
        type: SAVE_APPOINTMENT_DATE,
        payload: data,
      });
    
      localStorage.setItem("Date", JSON.stringify(data));
    }

  // SAVE Animal INFO 
  export const saveAnimalInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_ANIMAL_INFO,
      payload: data,
    });
  
    localStorage.setItem("AnimalInfo", JSON.stringify(data));
  }