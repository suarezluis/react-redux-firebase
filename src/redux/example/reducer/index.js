import produce from "immer";

const initialState = {
  number: 0
};

let exampleReducer = produce((draft, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      draft.number = draft.number + 1;
      break;
    default:
      return draft;
  }
}, initialState);

export default exampleReducer;
