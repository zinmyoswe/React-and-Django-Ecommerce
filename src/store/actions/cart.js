import axios from "axios";
import { CART_START, CART_SUCCESS, CART_FAIL } from "./actionTypes";
import { authAxios } from "../../utils";

export const cartStart = () => {
  return {
    type: CART_START
  };
};

export const cartSuccess = data => {
  console.log(data);
  return {
    type: CART_SUCCESS
  };
};

export const cartFail = error => {
  return {
    type: CART_FAIL,
    error: error
  };
};

export const cartFetch = () => {
  return dispatch => {
    dispatch(cartStart());
    authAxios
      .post("http://127.0.0.1:8000/rest-auth/login/")
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};
