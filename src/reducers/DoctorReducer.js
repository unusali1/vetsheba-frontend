import { ALL_DOCTORS_FAIL, ALL_DOCTORS_REQUEST, ALL_DOCTORS_SUCCESS, CLEAR_ERRORS, DOCTOR_DETAILS_REQUEST, DOCTOR_DETAILS_SUCCESS, DOCTOR_DETAILS_FAIL, DELETE_DOCTOR_REQUEST, DELETE_DOCTOR_SUCCESS, DELETE_DOCTOR_FAIL, DELETE_DOCTOR_RESET, ADMIN_DOCTOR_REQUEST, ADMIN_DOCTOR_SUCCESS, ADMIN_DOCTOR_FAIL, NEW_DOCTOR_REQUEST, NEW_DOCTOR_SUCCESS, NEW_DOCTOR_FAIL, NEW_DOCTOR_RESET, UPDATE_DOCTOR_REQUEST, UPDATE_DOCTOR_SUCCESS, UPDATE_DOCTOR_FAIL, UPDATE_DOCTOR_RESET } from "../constants/DoctorConstants";

export const doctorsReducer = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case ALL_DOCTORS_REQUEST:
    case ADMIN_DOCTOR_REQUEST:
      return {
        loading: true,
        doctors: [],
      };
    case ALL_DOCTORS_SUCCESS:
      return {
        loading: false,
        doctors: action.payload.doctors,
        doctorsCount: action.payload.doctorsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredDoctorsCount: action.payload.filteredDoctorsCount,
      };

    case ADMIN_DOCTOR_SUCCESS:
      return {
        loading: false,
        doctors: action.payload,
      };

    case ALL_DOCTORS_FAIL:
    case ADMIN_DOCTOR_FAIL:
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


// doctor detals reducer 
  export const doctorDetailsReducer = (state = { doctor: {} }, action) => {
    switch (action.type) {
      case DOCTOR_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case DOCTOR_DETAILS_SUCCESS:
        return {
          loading: false,
          doctor: action.payload,
        };
      case DOCTOR_DETAILS_FAIL:
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

  // Delete Doctor

  export const deleteDoctorReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_DOCTOR_REQUEST:
      case UPDATE_DOCTOR_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_DOCTOR_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_DOCTOR_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_DOCTOR_FAIL:
      case UPDATE_DOCTOR_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_DOCTOR_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_DOCTOR_RESET:
        return {
          ...state,
          isUpdated: false,
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


  // New Doctor ----Admin
  export const newDoctorReducer = (state = { doctor: {} }, action) => {
    switch (action.type) {
      case NEW_DOCTOR_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_DOCTOR_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          product: action.payload.product,
        };
      case NEW_DOCTOR_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_DOCTOR_RESET:
        return {
          ...state,
          success: false,
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