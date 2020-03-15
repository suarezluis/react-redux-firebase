import produce from "immer";
import authActionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  additionalUserInfo: null,
  error: { code: null, message: null }
};

let authReducer = produce((draft, action) => {
  switch (action.type) {
    case authActionTypes.createUser:
      draft.user = action.payload.user || null;
      draft.additionalUserInfo = action.payload.additionalUserInfo || null;
      draft.error.code = action.payload.code || null;
      draft.error.message = action.payload.message || null;
      break;
    default:
      break;
  }
}, initialState);

export default authReducer;
