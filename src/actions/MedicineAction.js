import axios from "axios";
import { ADMIN_MEDICINE_FAIL, ADMIN_MEDICINE_REQUEST, ADMIN_MEDICINE_SUCCESS, ALL_MEDICINE_FAIL, ALL_MEDICINE_REQUEST, ALL_MEDICINE_SUCCESS, ALL_REVIEW_FAIL, ALL_REVIEW_REQUEST, ALL_REVIEW_SUCCESS, CLEAR_ERRORS, DELETE_MEDICINE_FAIL, DELETE_MEDICINE_REQUEST, DELETE_MEDICINE_SUCCESS, DELETE_REVIEW_FAIL, DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS, MEDICINE_DETAILS_FAIL, MEDICINE_DETAILS_REQUEST, MEDICINE_DETAILS_SUCCESS, NEW_MEDICINE_FAIL, NEW_MEDICINE_REQUEST, NEW_MEDICINE_SUCCESS, NEW_REVIEW_FAIL, NEW_REVIEW_REQUEST, NEW_REVIEW_SUCCESS, UPDATE_MEDICINE_FAIL, UPDATE_MEDICINE_REQUEST, UPDATE_MEDICINE_SUCCESS } from "../constants/MedicineConstant";



export const getMedicine= (keyword="",currentPage=1,category) => async (dispatch)=>{
  try {
      dispatch({
          type: ALL_MEDICINE_REQUEST
      });

     let link = `/api/v2/medicines?keyword=${keyword}&page=${currentPage}`;
      
     if(category){
      link = `/api/v2/medicines?keyword=${keyword}&page=${currentPage}&category=${category}`;
     }
      const {data} = await axios.get(link);

      dispatch({
          type:ALL_MEDICINE_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({
          type:ALL_MEDICINE_FAIL,
          payload: error.response.data.message,
      })
  }
}; 


// Get All Medicines Details
export const getMedicineDetails= (id) => async (dispatch)=>{
  try {
      dispatch({ type: MEDICINE_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v2/medicine/${id}`);
  
      dispatch({
        type: MEDICINE_DETAILS_SUCCESS,
        payload: data.medicine,
      });
    } catch (error) {
      dispatch({
        type: MEDICINE_DETAILS_FAIL,
        payload: error.response.message,
      });
    }
  };


// NEW REVIEW
export const newMedicineReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v2/medicine/review`, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Create Medicine --------Admin
export const createMedicine = (medicineData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_MEDICINE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/medicine/new`,
      medicineData,
      config
    );

    dispatch({
      type: NEW_MEDICINE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_MEDICINE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Admin Medicine -----Admin
  export const getAdminMedicine = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_MEDICINE_REQUEST });
  
      const { data } = await axios.get("/api/v2/admin/medicines");
  
      dispatch({
        type: ADMIN_MEDICINE_SUCCESS,
        payload: data.medicines,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_MEDICINE_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Delete Medicine ------Admin
export const deleteMedicine = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_MEDICINE_REQUEST });

    const { data } = await axios.delete(`/api/v2/medicine/${id}`);

    dispatch({
      type: DELETE_MEDICINE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MEDICINE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Medicine
export const updateMedicine = (id, medicineData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_MEDICINE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/medicine/${id}`,
      medicineData,
      config
    );

    dispatch({
      type: UPDATE_MEDICINE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_MEDICINE_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Get AllMedicine  Reviews of a Medicine
export const getAllMedicineReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v2/medicine/reviews?id=${id}`);

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Delete Medicine Review of a Medicine ------ Admin
export const deleteMedicineReviews = (reviewId, medicineId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v2/medicine/reviews?id=${reviewId}&medicineId=${medicineId}`
    );

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Clearing errors
export const clearErrors= () => async (dispatch)=>{
  dispatch({
      type: CLEAR_ERRORS
  })
}