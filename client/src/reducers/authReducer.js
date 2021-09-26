import {
  FAILED_SIGN_IN,
  SIGN_IN,
  SIGN_IN_WITH_TOKEN,
  SIGN_OUT,
  SIGN_UP,
  TRY_SIGN_IN,
} from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  isSignedIn: false,
  user: null,
  failedSignIn: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        failedSignIn: false,
        user: {
          _id: action.payload.userId,
          firstName: action.payload.firstName,
        },
      };
    case SIGN_IN_WITH_TOKEN:
      return {
        ...state,
        isSignedIn: true,
        failedSignIn: false,
        user: {
          _id: action.payload.userId,
          firstName: action.payload.firstName,
        },
      };
    case SIGN_UP:
      return {
        ...state,
        isSignedIn: true,
        failedSignIn: false,
        user: {
          _id: action.payload.userId,
          firstName: action.payload.firstName,
        },
      };
    case FAILED_SIGN_IN:
      return {
        ...state,
        failedSignIn: true,
      };
    case TRY_SIGN_IN:
      return {
        ...state,
        failedSignIn: false,
      };
    case SIGN_OUT:
      return { ..._.omit(state, "user"), isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;
