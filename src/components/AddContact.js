import React, { useState } from "react";
import { connect } from "react-redux";
import { addContact } from "../store";

const AddContact = ({ addContact }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(Date.now(), firstname, lastname, position);
    setFirstname("")
    setLastname("")
    setPosition("")
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="m-4">
        <input
          id="firstname"
          name="firstname"
          required
          className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
      </div>

      <div className="m-4">
        <input
          id="lastname"
          name="lastname"
          required
          className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
      </div>

      <div className="m-4">
        <input
          id="position"
          name="position"
          required
          className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Position"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add new contact
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (id, firstName, lastName, position) =>
      dispatch(addContact(id, firstName, lastName, position)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
