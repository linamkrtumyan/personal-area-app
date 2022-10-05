import request from "../../request";
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
} from "../types";

export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(fetchContactsRequest());
    request("/contacts")
      .then((data) => {
        dispatch(fetchContactsSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchContactsFailure(e.message));
      });
  };
};

const fetchContactsRequest = () => {
  return {
    type: FETCH_CONTACTS_REQUEST,
  };
};

const fetchContactsSuccess = (data) => {
  const contacts = data ? data : [];

  return {
    type: FETCH_CONTACTS_SUCCESS,
    payload: {
      contacts,
    },
  };
};

const fetchContactsFailure = (error) => {
  return {
    type: FETCH_CONTACTS_FAILURE,
    payload: { error },
  };
};
