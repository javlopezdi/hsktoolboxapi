import {
  SET_MATCHING_GAME_CARDS,
  FLIP_CARD,
  HANDLE_TRANSITION_END,
  CLEAN_MATCHING_GAME,
  SET_IS_MATCHING_GAME_DIALOG_OPEN,
} from "../actions/types";

const INITIAL_STATE = {
  matchingGameCards: [],
  isPaused: false,
  isMatchingGameDialogOpen: false,
};

const matchingGameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MATCHING_GAME_CARDS:
      return {
        ...state,
        matchingGameCards: action.payload,
        isPaused: false,
      };
    case FLIP_CARD:
      return {
        ...state,
        matchingGameCards: action.payload.cards,
        isPaused: action.payload.isPaused,
      };
    case HANDLE_TRANSITION_END:
      return {
        ...state,
        matchingGameCards: action.payload.cards,
        isPaused: action.payload.isPaused,
        isMatchingGameDialogOpen: action.payload.isDialogOpen,
      };
    case CLEAN_MATCHING_GAME:
      return {
        ...INITIAL_STATE,
      };
    case SET_IS_MATCHING_GAME_DIALOG_OPEN:
      return {
        ...state,
        isMatchingGameDialogOpen: action.payload,
      };
    default:
      return state;
  }
};
export default matchingGameReducer;
