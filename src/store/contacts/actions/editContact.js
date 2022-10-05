import request from "../../request";
import {
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
} from "../types";

export const editContact = (id, firstName, lastName, position) => {
  return (dispatch) => {
    dispatch(editContactsRequest());
    request(`/contacts/${id}`, "PUT", { firstName, lastName, position })
      .then(() => {
        dispatch(editContactSuccess({ id, firstName, lastName, position }));
      })
      .catch((e) => {
        dispatch(editContactFailure(e.message));
      });
  };
};

const editContactsRequest = () => {
  return {
    type: EDIT_CONTACT_REQUEST,
  };
};

const editContactSuccess = (data) => {
  const contact = data ? data : [];

  return {
    type: EDIT_CONTACT_SUCCESS,
    payload: {
      contact,
    },
  };
};

const editContactFailure = (error) => {
  return {
    type: EDIT_CONTACT_FAILURE,
    payload: { error },
  };
};
