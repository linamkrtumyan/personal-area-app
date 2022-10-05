import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILURE,
  EDIT_CONTACT_REQUEST,
  EDIT_CONTACT_SUCCESS,
  EDIT_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
} from "./types";

const initialState = {
  contacts: [],
  success: true,
  error: null,
  loading: true,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        contacts: action.payload.contacts,
      };
    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.error,
      };

    case ADD_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        contacts: [...state.contacts, action.payload.contact],
      };
    case ADD_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.error,
      };

    case EDIT_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_CONTACT_SUCCESS:
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.contact.id
      );
      const newArray = [...state.contacts];
      newArray[index] = action.payload.contact;
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        contacts: newArray,
      };
    case EDIT_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.error,
      };

    case DELETE_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CONTACT_SUCCESS:
      const filteredContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
      return {
        ...state,
        loading:false,
        contacts: filteredContacts,
      };
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload.error,
      };

    default:
      return { ...state };
  }
};

export default contactsReducer;
