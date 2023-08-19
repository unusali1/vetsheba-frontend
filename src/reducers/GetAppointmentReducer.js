import {
    ALL_APPOINTMENTS_FAIL,
    ALL_APPOINTMENTS_REQUEST,
    ALL_APPOINTMENTS_SUCCESS,
    CLEAR_ERRORS,
    CREATE_APPOINTMENT_FAIL,
    CREATE_APPOINTMENT_REQUEST,
    CREATE_APPOINTMENT_SUCCESS,
    DELETE_APPOINTMENT_FAIL,
    DELETE_APPOINTMENT_REQUEST,
    DELETE_APPOINTMENT_RESET,
    DELETE_APPOINTMENT_SUCCESS,
    MY_APPOINTMENTS_FAIL,
    MY_APPOINTMENTS_REQUEST,
    MY_APPOINTMENTS_SUCCESS,
    APPOINTMENT_DETAILS_FAIL,
    APPOINTMENT_DETAILS_REQUEST,
    APPOINTMENT_DETAILS_SUCCESS,
   
  } from "../constants/GetAppointmentConstant";
  
  export const newGetAppointmentReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_APPOINTMENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_APPOINTMENT_SUCCESS:
        return {
          loading: false,
          appointment: action.payload,
        };
  
      case CREATE_APPOINTMENT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export const myGetAppointmentReducer = (state = { appointments: [] }, action) => {
      switch (action.type) {
        case MY_APPOINTMENTS_REQUEST:
          return {
            loading: true,
          };
    
        case MY_APPOINTMENTS_SUCCESS:
          return {
            loading: false,
            appointments: action.payload,
          };
    
        case MY_APPOINTMENTS_FAIL:
          return {
            loading: false,
            error: action.payload,
          };
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
          };
    
        default:
          return state;
      }
    };
  
    export const getAppointmentDetailsReducer = (state = { appointment: {} }, action) => {
      switch (action.type) {
        case APPOINTMENT_DETAILS_REQUEST:
          return {
            loading: true,
          };
    
        case APPOINTMENT_DETAILS_SUCCESS:
          return {
            loading: false,
            appointment: action.payload,
          };
    
        case APPOINTMENT_DETAILS_FAIL:
          return {
            loading: false,
            error: action.payload,
          };
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
          };
    
        default:
          return state;
      }
    };
  
    // All Appointment ------ Admin
    export const allGetAppointmentsReducer = (state = { appointments: [] }, action) => {
      switch (action.type) {
        case ALL_APPOINTMENTS_REQUEST:
          return {
            loading: true,
          };
    
        case ALL_APPOINTMENTS_SUCCESS:
          return {
            loading: false,
            appointments: action.payload,
          };
    
        case ALL_APPOINTMENTS_FAIL:
          return {
            loading: false,
            error: action.payload,
          };
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
          };
    
        default:
          return state;
      }
    };
    
    export const getAppointmentReducer = (state = {}, action) => {
      switch (action.type) {
      
        case DELETE_APPOINTMENT_REQUEST:
          return {
            ...state,
            loading: true,
          };
  
       case DELETE_APPOINTMENT_SUCCESS:
          return {
            ...state,
            loading: false,
            isDeleted: action.payload,
          };
    
        case DELETE_APPOINTMENT_FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
    
        case DELETE_APPOINTMENT_RESET:
          return {
            ...state,
            isDeleted: false,
          };
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
          };
    
        default:
          return state;
      }
    };