import { useState } from 'react';
import './box.css';

function Education() {
  const [school, setSchool] = useState({
    name: 'Mimar Sinan University',
    degree: 'Sanat Sepet Isleri',
    start: '',
    end: '',
  });
  const handleName = (e) => {
    setSchool({ ...school, name: e.target.value });
  };
  const handleDegree = (e) => {
    setSchool({ ...school, degree: e.target.value });
  };
  const handleStart = (e) => {
    setSchool({ ...school, start: e.target.value });
  };
  const handleEnd = (e) => {
    setSchool({ ...school, end: e.target.value });
  };

  return (
    <>
      <div className="container">
        <h2>Education</h2>
        <div className="segment">
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            value={school.name}
            onChange={handleName}
            id="name"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="degree">Degree: </label>
          <input
            type="text"
            value={school.degree}
            onChange={handleDegree}
            id="degree"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="start-date">Start Date: </label>
          <input
            type="date"
            value={school.start}
            onChange={handleStart}
            id="start-date"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="end-date">End Date: </label>
          <input
            type="date"
            value={school.end}
            onChange={handleEnd}
            id="end-date"
          />
        </div>
        <br />
      </div>
    </>
  );
}

export default Education;
