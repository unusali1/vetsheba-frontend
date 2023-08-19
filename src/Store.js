import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { deleteProductReducer, deleteReviewReducer, newProductReducer, newReviewReducer, productDetailsReducer, productReviewsReducer, productsReducer } from "./reducers/ProductReducer";
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/CartRuducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/OrderReducer";
import { deleteMedicineReducer, deleteMedicineReviewReducer, medicineDetailsReducer, medicineReviewsReducer, medicinesReducer, newMedicineReducer, newMedicineReviewReducer } from "./reducers/MedicineReducer";
import { cartMedicineReducer } from "./reducers/CartReducerMedicine";
import { deleteDoctorReducer, doctorDetailsReducer, doctorsReducer, newDoctorReducer } from "./reducers/DoctorReducer";
import { doctorReducer } from "./reducers/AppointmentReducer";
import { allGetAppointmentsReducer, getAppointmentDetailsReducer, getAppointmentReducer, myGetAppointmentReducer, newGetAppointmentReducer } from "./reducers/GetAppointmentReducer";



const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  productReviews: productReviewsReducer,
  deleteReview: deleteReviewReducer,
  createProduct: newProductReducer,
  deleteProduct: deleteProductReducer,
  newReview: newReviewReducer,
  medicines: medicinesReducer,
  medicineDetails: medicineDetailsReducer,
  medicineReviews: medicineReviewsReducer,
  deleteMedicineReview: deleteMedicineReviewReducer,
  createMedicine: newMedicineReducer,
  deleteMedicine: deleteMedicineReducer,
  newMedicineReview: newMedicineReviewReducer,
  user: userReducer,
  profile: profileReducer,
  cart: cartReducer,
  cartmedi: cartMedicineReducer,
  order: newOrderReducer,
  myOrder: myOrdersReducer,
  myOrderDetails: orderDetailsReducer,
  AllOrders: allOrdersReducer,
  deleteOrder: orderReducer,
  allUsers: allUsersReducer,
  doctors: doctorsReducer,
  doctorDetails: doctorDetailsReducer,
  deleteDoctor: deleteDoctorReducer,
  createDoctor: newDoctorReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  doctorCart: doctorReducer,
  appointment: newGetAppointmentReducer,
  myappointment: myGetAppointmentReducer,
  myappointmentdetails: getAppointmentDetailsReducer,
  allappointment: allGetAppointmentsReducer,
  deleteappointment: getAppointmentReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],

    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},


  },

  doctorCart: {
    doctorAppoin: localStorage.getItem("doctorAppoin")
      ? JSON.parse(localStorage.getItem("doctorAppoin"))
      : [],

    Date: localStorage.getItem("Date")
      ? JSON.parse(localStorage.getItem("Date"))
      : {},

      AnimalInfo: localStorage.getItem("AnimalInfo")
      ? JSON.parse(localStorage.getItem("AnimalInfo"))
      : {},

  }

}



const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;