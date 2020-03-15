import authActionTypes from "./actionTypes";
import firebase from "../../../firebase/firebase";
const createUserWithEmailAndPassword = (email, password) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        dispatch({
          type: authActionTypes.createUser,
          payload: response
        });
      })
      .catch(error => {
        dispatch({
          type: authActionTypes.createUser,
          payload: error
        });
      });
  };
};

export default createUserWithEmailAndPassword;
