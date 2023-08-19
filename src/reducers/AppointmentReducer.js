import {
    ADD_TO_APOINTMENT,
    REMOVE_APPOINTMENT_DOCTOR,
    SAVE_ANIMAL_INFO,
    SAVE_APPOINTMENT_DATE,
  } from "../constants/AppointmentConstans";
  
  export const doctorReducer = (
    state = { doctorAppoin: [], AnimalInfo: {}, Date: {} },
    action
  ) => {
    switch (action.type) {
      case ADD_TO_APOINTMENT:
        const item = action.payload;
     
        const isItemExist = state.doctorAppoin.find(
          (i) => i.doctor === item.doctor
        );

        if (isItemExist) {
          return {
            ...state,
            doctorAppoin: state.doctorAppoin.map((i) =>
              i.doctor === isItemExist.doctor ? item : i
            ),
          };
        } else {
          return {
            ...state,
            doctorAppoin: [...state.doctorAppoin, item],
          };
      }

      case REMOVE_APPOINTMENT_DOCTOR:
        return {
          ...state,
          doctorAppoin: state.doctorAppoin.filter((i) => i.doctor !== action.payload),
        };
     
        case SAVE_APPOINTMENT_DATE:
          return {
            ...state,
            Date: action.payload,
          };

      case SAVE_ANIMAL_INFO:
        return {
          ...state,
          AnimalInfo: action.payload,
        };
  
      default:
        return state;

    }
  };