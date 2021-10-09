import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter a Name"
      />
      <input 
        type="tel"
        name="phone"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Enter a Phone"
        // pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
      />
      <input 
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter an Email" 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;