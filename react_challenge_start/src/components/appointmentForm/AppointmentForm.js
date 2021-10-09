import React from "react";
import ContactPicker from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleContactChange = (e) => {
    setContact(e.target.value);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={handleTitleChange} />
      <input type="date" name="date" value={date} min={getTodayString()} onChange={handleDateChange} />
      <input type="time" name="time" value={time} onChange={handleTimeChange} />
      <ContactPicker 
        contacts={contacts}
        onChange={handleContactChange}
      />
      <input type="submit" name="submit" />
    </form>
  );
};

export default AppointmentForm