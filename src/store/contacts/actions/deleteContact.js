import request from "../../request";
import {
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
} from "../types";

export const deleteContact = (id) => {
  return (dispatch) => {
    dispatch(deleteContactsRequest());
    request(`/contacts/${id}`, "DELETE")
      .then(() => {
        dispatch(deleteContactSuccess(id));
      })
      .catch((e) => {
        dispatch(deleteContactFailure(e.message));
      });
  };
};

const deleteContactsRequest = () => {
  return {
    type: DELETE_CONTACT_REQUEST,
  };
};

const deleteContactSuccess = (id) => {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload: {
      id,
    },
  };
};

const deleteContactFailure = (error) => {
  return {
    type: DELETE_CONTACT_FAILURE,
    payload: { error },
  };
};
