import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dialogReducer from "./dialogReducer";
import authReducer from "./authReducer";
import hskReducer from "./hskReducer";
import multipleChoiceReducer from "./multipleChoiceReducer";
import hskWordsReducer from "./hskWordsReducer";
import matchingGameReducer from "./matchingGameReducer";

export default combineReducers({
  form: formReducer,
  dialog: dialogReducer,
  auth: authReducer,
  hsk: hskReducer,
  multipleChoice: multipleChoiceReducer,
  hskWords: hskWordsReducer,
  matchingGame: matchingGameReducer,
});
