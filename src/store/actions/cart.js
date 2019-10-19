import axios from "axios";
import { CART_START, CART_SUCCESS, CART_FAIL } from "./actionTypes";
import { authAxios } from "../../utils";
import { fetchCart } from "../../constants";

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
      .post(fetchCart)
      .then(res => {
        dispatch(cartSuccess(res.data));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};
