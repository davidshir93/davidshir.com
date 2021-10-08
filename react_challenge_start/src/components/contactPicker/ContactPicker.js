import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option value="Choose Contact" />
      {contacts.map(contact => {
        return <option key={contact} value={contact} />
      })}
    </select>
  );
};

export default ContactPicker;