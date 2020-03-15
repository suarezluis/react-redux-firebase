import { combineReducers } from "redux";

import exampleReducer from "./example/reducer";
import authReducer from "./auth/reducer";
let rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer
});

export default rootReducer;
