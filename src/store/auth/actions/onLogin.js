import request from "../../request";
import { ON_LOGIN_REQUEST, ON_LOGIN_SUCCESS, ON_LOGIN_FAILURE } from "../types";

export const onLogin = (email, password) => {
  return (dispatch) => {
    dispatch(onLoginRequest());
    request("/login", "POST", { email, password })
      .then((data) => {
        if (data.accessToken) {
          dispatch(onLoginSuccess(data.accessToken));
          localStorage.setItem("token", data.accessToken);
        } else {
          dispatch(onLoginFailure(data));
        }
      })
      .catch((e) => {
        dispatch(onLoginFailure(e.message));
      });
  };
};

const onLoginRequest = () => {
  return {
    type: ON_LOGIN_REQUEST,
  };
};

const onLoginSuccess = (token) => {
  return {
    type: ON_LOGIN_SUCCESS,
    payload: {
      token,
    },
  };
};

const onLoginFailure = (error) => {
  return {
    type: ON_LOGIN_FAILURE,
    payload: { error },
  };
};
