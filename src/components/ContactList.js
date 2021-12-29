import React from "react";
import ContactsCard from "./ContactsCard";

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactsCard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      ></ContactsCard>
    );
  });
  return <div className=" ui celled list">{renderContactList}</div>;
};

export default ContactList;
