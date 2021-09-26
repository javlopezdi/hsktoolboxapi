import {
  SET_SELECTED_MULTIPLE_CHOICE_ANSWER,
  SET_MULTIPLE_CHOICE_QUESTIONS,
  SET_CURRENT_QUESTION,
  SET_IS_RESULTS_DIALOG_OPEN,
  SUBMIT_MULTIPLE_CHOICE_QUESTIONS,
} from "../actions/types";

const INITIAL_STATE = {
  selectedMultipleChoiceAnswer: -1,
  multipleChoiceQuestions: [],
  currentQuestion: 0,
};

const multipleChoiceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SELECTED_MULTIPLE_CHOICE_ANSWER:
      return {
        ...state,
        selectedMultipleChoiceAnswer:
          action.payload.selectedMultipleChoiceAnswer,
        multipleChoiceQuestions: action.payload.multipleChoiceQuestions,
      };
    case SET_MULTIPLE_CHOICE_QUESTIONS:
      return {
        ...state,
        multipleChoiceQuestions: action.payload,
        currentQuestion: 0,
        selectedMultipleChoiceAnswer: -1,
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload.currentQuestion,
        selectedMultipleChoiceAnswer:
          action.payload.selectedMultipleChoiceAnswer,
      };
    case SET_IS_RESULTS_DIALOG_OPEN:
      return { ...state, ...INITIAL_STATE };
    case SUBMIT_MULTIPLE_CHOICE_QUESTIONS:
      return { ...state, multipleChoiceQuestions: action.payload };
    default:
      return state;
  }
};
export default multipleChoiceReducer;
