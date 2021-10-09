import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  const getHoursString = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    {
      name: "David",
      phoneNumber: "0509290166",
      email: "davidshir93@gmail.com"
    },
    {
      name: "Dana",
      phoneNumber: "0505454166",
      email: "danaporat@gmail.com"
    }
  ])
  const [appointments, setAppointments] = useState([
    {
      title: "The most important meeting in the world",
      contact: contacts[0].name,
      date: getTodayString(),
      time: getHoursString()
    }
  ])


  const newContact = (name, phoneNumber, email) => {
    setContacts(prev => 
      [
        ...prev,
        {
          name: name,
          phoneNumber: phoneNumber,
          email: email
        }
      ]
    )
  }

  const newAppointment = (title, contact, date, time) => {
    setAppointments(prev => 
      [
        ...prev,
        {
          title: title,
          contact: contact,
          date: date,
          time: time
        }
      ]
    )
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              contacts={contacts}
              newContact={newContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              appointments={appointments}
              contacts={contacts}
              newAppointment={newAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
