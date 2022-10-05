import {
  ON_LOGIN_REQUEST,
  ON_LOGIN_SUCCESS,
  ON_LOGIN_FAILURE,
  ON_REGISTER_REQUEST,
  ON_REGISTER_SUCCESS,
  ON_REGISTER_FAILURE,
} from "./types";

const initialState = {
  loading: false,  
  error: null,  
  accessToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ON_LOGIN_SUCCESS:
      return {
        ...state,
        loading:false,
        accessToken: action.payload.token,
      };
    case ON_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case ON_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ON_REGISTER_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.token,
        loading: false,        
        error: null,
      };
    case ON_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,       
        error: action.payload.error.errorMessage,
      };

    default:
      return { ...state };
  }
};

export default authReducer;
