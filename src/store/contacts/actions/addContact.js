import request from "../../request";
import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILURE,
} from "../types";

export const addContact = (id, firstName, lastName, position) => {
  return (dispatch) => {
    dispatch(addContactsRequest());
    request("/contacts", "POST", { id, firstName, lastName, position })
      .then(() => {
        dispatch(addContactSuccess({ id, firstName, lastName, position }));
      })
      .catch((e) => {
        dispatch(addContactFailure(e.message));
      });
  };
};

const addContactsRequest = () => {
  return {
    type: ADD_CONTACT_REQUEST,
  };
};

const addContactSuccess = (data) => {
  const contact = data ? data : [];

  return {
    type: ADD_CONTACT_SUCCESS,
    payload: {
      contact,
    },
  };
};

const addContactFailure = (error) => {
  return {
    type: ADD_CONTACT_FAILURE,
    payload: { error },
  };
};
