import React, { useState } from "react";
import { connect } from "react-redux";
import { editContact } from "../store/contacts/actions";
import { deleteContact } from "../store/contacts/actions/deleteContact";

const ContactCard = ({ contact, editContact, deleteContact }) => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(contact.id);
  const [firstname, setFirstname] = useState(contact.firstName);
  const [lastname, setLastname] = useState(contact.lastName);
  const [position, setPosition] = useState(contact.position);

  const handleEditShow = () => {
    setEdit((prev) => !prev);
  };
  const handleEdit = () => {
    editContact(id, firstname, lastname, position);

    setEdit(false);
  };

  const handleDelete = () => {
    deleteContact(id);
  };

  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {edit ? (
            <>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <input
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <input
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </>
          ) : (
            <>
              <p>
                {contact.firstName} {contact.lastName}
              </p>
              <p className="text-gray-700 text-base">{contact.position} </p>
            </>
          )}
        </div>
      </div>

      <div className="px-6 pt-4 pb-2">
        <button
          onClick={edit ? handleEdit : handleEditShow}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          {edit ? "Save" : "Edit"}
        </button>{" "}
        <button
          onClick={handleDelete}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    editContact: (id, firstName, lastName, position) =>
      dispatch(editContact(id, firstName, lastName, position)),
    deleteContact: (id) => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactCard);
