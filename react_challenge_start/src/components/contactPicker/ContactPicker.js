import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="Choose Contact" key="none">Choose Contact</option>
      {contacts.map(contact => {
          console.log(contact);
          return <option key={contact.name} value={contact.name}>{contact.name}</option>;
      })}
      
    </select>
  );
};

export default ContactPicker;