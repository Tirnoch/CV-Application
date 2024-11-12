import { useState } from 'react';
import './box.css';

function Experience() {
  const [experience, setExperience] = useState({
    name: 'Odunluk Graphic Design',
    title: 'Graphic Designer',
    start: '',
    end: '',
    description: '',
  });
  const handleName = (e) => {
    setExperience({ ...experience, name: e.target.value });
  };
  const handleTitle = (e) => {
    setExperience({ ...experience, title: e.target.value });
  };
  const handleStart = (e) => {
    setExperience({ ...experience, start: e.target.value });
  };
  const handleEnd = (e) => {
    setExperience({ ...experience, end: e.target.value });
  };
  const handleDescription = (e) => {
    setExperience({ ...experience, description: e.target.value });
  };

  return (
    <>
      <div className="container">
        <h2>Experience</h2>
        <div className="segment">
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            value={experience.name}
            onChange={handleName}
            id="name"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="degree">Title: </label>
          <input
            type="text"
            value={experience.title}
            onChange={handleTitle}
            id="degree"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="start-date">Start Date: </label>
          <input
            type="date"
            value={experience.start}
            onChange={handleStart}
            id="start-date"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="end-date">End Date: </label>
          <input
            type="date"
            value={experience.end}
            onChange={handleEnd}
            id="end-date"
          />
        </div>
        <br />
        <div className="segment">
          <label htmlFor="degree">Description: </label>
          <textarea
            rows="5"
            value={experience.description}
            onChange={handleDescription}
            id="degree"
          />
        </div>
      </div>
    </>
  );
}

export default Experience;
