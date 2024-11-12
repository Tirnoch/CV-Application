import { useState } from 'react';
import './box.css';

function Personal() {
  const [person, setPerson] = useState({
    name: 'Damla Oz',
    mail: 'senihic@alakadar.etmez',
    number: '123456789',
    location: 'Bursa, Kalbimin Ortasi',
  });
  const handleName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };
  const handleMail = (e) => {
    setPerson({ ...person, mail: e.target.value });
  };
  const handleNumber = (e) => {
    setPerson({ ...person, number: e.target.value });
  };
  const handleLocation = (e) => {
    setPerson({ ...person, location: e.target.value });
  };

  return (
    <>
      <div className="container">
        <h2>Personal Details</h2>
        <div className="segment">
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            value={person.name}
            onChange={handleName}
            id="name"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="mail">Email: </label>
          <input
            type="mail"
            value={person.mail}
            onChange={handleMail}
            id="mail"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="phone">Phone: </label>
          <input
            type="phone"
            value={person.number}
            onChange={handleNumber}
            id="phone"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            value={person.location}
            onChange={handleLocation}
            id="location"
          />
        </div>
        <br />
      </div>
    </>
  );
}

export default Personal;
