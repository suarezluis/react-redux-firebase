import { combineReducers } from "redux";

import exampleReducer from "./example/reducer";

let rootReducer = combineReducers({ example: exampleReducer });

export default rootReducer;
