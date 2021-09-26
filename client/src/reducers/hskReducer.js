import { SET_SELECTED_HSK } from "../actions/types";

const hskReducer = (state = { selectedHsk: 1 }, action) => {
  switch (action.type) {
    case SET_SELECTED_HSK:
      return { ...state, selectedHsk: action.payload };
    default:
      return state;
  }
};

export default hskReducer;
