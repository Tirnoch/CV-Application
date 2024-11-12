import { useState } from 'react';

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
      <label htmlFor="name">Name: </label>
      <input type="text" value={person.name} onChange={handleName} id="name" />
      <br />
      <label htmlFor="mail">Mail: </label>
      <input type="mail" value={person.mail} onChange={handleMail} id="mail" />
      <br />
      <label htmlFor="phone">Phone: </label>
      <input
        type="phone"
        value={person.number}
        onChange={handleNumber}
        id="phone"
      />
      <br />
      <label htmlFor="location">Location: </label>
      <input
        type="text"
        value={person.location}
        onChange={handleLocation}
        id="location"
      />
      <br />
    </>
  );
}

export default Personal;
