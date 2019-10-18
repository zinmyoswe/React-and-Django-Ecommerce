import axios from "axios";
import * as actionTypes from "./actionTypes";
import { authAxios } from "../../utils";

export const cartStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const cartSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const cartFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
