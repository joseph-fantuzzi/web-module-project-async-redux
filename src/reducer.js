import { INPUT_CHANGE, FIND_ZIP, ERROR_MSG } from "./action-types";

const initialState = {
  search: "",
  zip: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case FIND_ZIP:
      return {
        ...state,
        zip: action.payload,
      };

    case ERROR_MSG:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
