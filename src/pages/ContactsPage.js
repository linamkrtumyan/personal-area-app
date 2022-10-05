import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddContact from "../components/AddContact";
import ContactCard from "../components/ContactCard";
import Loading from "../components/Loading";
import { addContact, fetchContacts } from "../store";

export const ContactsPage = ({ fetchContacts, contacts, loading }) => {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <p className="italic md:not-italic text-xl text-center leading-5 my-8">
        My Contacts
      </p>
      <AddContact />

      {loading ? (
        <Loading />
      ) : (
        <div className="m-8 flex flex-wrap">
          {contacts.length > 0 ? (
            contacts.map((contact, index) => {
              return <ContactCard contact={contact} key={contact.id} />;
            })
          ) : (
            <p className="text-center">No data</p>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer.contacts,
    loading: state.contactsReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => {
      dispatch(fetchContacts());
    },
    addContact: (firstName, lastName, position) =>
      dispatch(addContact(firstName, lastName, position)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
