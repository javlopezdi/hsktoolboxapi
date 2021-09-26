import { FETCH_HSK_WORDS } from "../actions/types";
import _ from "lodash";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_HSK_WORDS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    default:
      return state;
  }
};

export default authReducer;
