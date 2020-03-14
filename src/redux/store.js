import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const middleware = [thunk];
let enhancers =
  process.env.REACT_APP_PRODUCTION !== "false"
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

let store = createStore(rootReducer, enhancers);

export default store;
