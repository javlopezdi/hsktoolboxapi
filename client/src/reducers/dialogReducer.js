import {
  SET_IS_DIALOG_OPEN,
  SET_IS_RESULTS_DIALOG_OPEN,
  SUBMIT_MULTIPLE_CHOICE_QUESTIONS,
  SIGN_IN,
} from "../actions/types";

const dialogReducer = (
  state = { isDialogOpen: false, isResultsDialogOpen: false },
  action
) => {
  switch (action.type) {
    case SET_IS_DIALOG_OPEN:
      return { ...state, isDialogOpen: action.payload };
    case SET_IS_RESULTS_DIALOG_OPEN:
      return { ...state, isResultsDialogOpen: action.payload };
    case SUBMIT_MULTIPLE_CHOICE_QUESTIONS:
      return { ...state, isResultsDialogOpen: true };
    case SIGN_IN:
      return { ...state, isDialogOpen: false };
    default:
      return state;
  }
};

export default dialogReducer;
