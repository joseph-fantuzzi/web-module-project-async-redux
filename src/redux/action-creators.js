import axios from "axios";

import { INPUT_CHANGE, FIND_ZIP, ERROR_MSG } from "./action-types";

export const inputChange = (name, value) => {
  return { type: INPUT_CHANGE, payload: { name, value } };
};

export const fetchZip = (zip) => (dispatch) => {
  axios
    .get(`https://api.zippopotam.us/us/${zip}`)
    .then((res) => {
      dispatch({ type: FIND_ZIP, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR_MSG, payload: err.message });
    });
};
