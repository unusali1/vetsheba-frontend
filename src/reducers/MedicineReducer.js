import {
    ALL_MEDICINE_FAIL,
    ALL_MEDICINE_REQUEST,
    ALL_MEDICINE_SUCCESS,
    CLEAR_ERRORS,
    MEDICINE_DETAILS_FAIL,
    MEDICINE_DETAILS_REQUEST,
    MEDICINE_DETAILS_SUCCESS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    ADMIN_MEDICINE_REQUEST,
    ADMIN_MEDICINE_SUCCESS,
    ADMIN_MEDICINE_FAIL,
    NEW_MEDICINE_REQUEST,
    NEW_MEDICINE_SUCCESS,
    NEW_MEDICINE_FAIL,
    NEW_MEDICINE_RESET,
    DELETE_MEDICINE_REQUEST,
    UPDATE_MEDICINE_REQUEST,
    DELETE_MEDICINE_SUCCESS,
    UPDATE_MEDICINE_SUCCESS,
    DELETE_MEDICINE_FAIL,
    UPDATE_MEDICINE_FAIL,
    DELETE_MEDICINE_RESET,
    UPDATE_MEDICINE_RESET,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
  } from "../constants/MedicineConstant";
  
  export const medicinesReducer = (state = { medicines: [] }, action) => {
    switch (action.type) {
      case ALL_MEDICINE_REQUEST :
      case ADMIN_MEDICINE_REQUEST:
        return {
          loading: true,
          medicines: [],
        };
      case ALL_MEDICINE_SUCCESS:
        return {
          loading: false,
          medicines: action.payload.medicines,
          medicinesCount: action.payload.medicinesCount,
          resultPerPage: action.payload.resultPerPage,
          filteredMedicinesCount: action.payload.filteredMedicinesCount,
        };
  
      case ADMIN_MEDICINE_SUCCESS:
        return {
          loading: false,
          medicines: action.payload,
        };
  
      case ALL_MEDICINE_FAIL:
      case ADMIN_MEDICINE_FAIL:
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
  
  export const medicineDetailsReducer = (state = { medicine: {} }, action) => {
    switch (action.type) {
      case MEDICINE_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case MEDICINE_DETAILS_SUCCESS:
        return {
          loading: false,
          medicine: action.payload,
        };
      case MEDICINE_DETAILS_FAIL:
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
  
  // medicine review
  export const newMedicineReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_REVIEW_SUCCESS:
        return {
          loading: false,
          success: action.payload,
        };
      case NEW_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_REVIEW_RESET:
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
  
  // New medicine ----Admin
  export const newMedicineReducer = (state = { medicine: {} }, action) => {
    switch (action.type) {
      case NEW_MEDICINE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_MEDICINE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          medicine: action.payload.medicine,
        };
      case NEW_MEDICINE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_MEDICINE_RESET:
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
  
  // Delete medicine
  export const deleteMedicineReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_MEDICINE_REQUEST:
      case UPDATE_MEDICINE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_MEDICINE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_MEDICINE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_MEDICINE_FAIL:
      case UPDATE_MEDICINE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_MEDICINE_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_MEDICINE_RESET:
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
  
  // All reviews --- Admin
  export const medicineReviewsReducer = (state = { reviews: [] }, action) => {
    switch (action.type) {
      case ALL_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_REVIEW_SUCCESS:
        return {
          loading: false,
          reviews: action.payload,
        };
      case ALL_REVIEW_FAIL:
        return {
          ...state,
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
  
  // Delete Review ----- Admin
  export const deleteMedicineReviewReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
      case DELETE_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_REVIEW_RESET:
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