import { INPUT_CHANGE, FIND_ZIP, ERROR_MSG } from "./action-types";

const initialState = {
  search: "",
  zip: null,
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
        zip: action.payload,
        search: "",
        error: "",
      };

    case ERROR_MSG:
      return {
        ...state,
        error: action.payload,
        search: "",
      };

    default:
      return state;
  }
};

export default reducer;
