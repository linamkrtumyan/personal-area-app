import request from "../../request";
import { ON_REGISTER_REQUEST, ON_REGISTER_SUCCESS, ON_REGISTER_FAILURE } from "../types";


export const onRegister = (email, password) => {
  
  return (dispatch) => {
 
    dispatch(onRegisterRequest());
    request("/users", "POST", {email,password})
      .then((data) => {
        dispatch(onRegisterSuccess(data.accessToken));
        localStorage.setItem("token", data.accessToken);
      })
      .catch((e) => {
        // dispatch(onRegisterFailure(e.message));
      });
  };
};

const onRegisterRequest = () => {
  return {
    type: ON_REGISTER_REQUEST,
  };
};

const onRegisterSuccess = (token) => {
  return {
    type: ON_REGISTER_SUCCESS,
    payload: {
      token,
    },
  };
};

const onRegisterFailure = (error) => {
  return {
    type: ON_REGISTER_FAILURE,
    payload: { error },
  };
};
