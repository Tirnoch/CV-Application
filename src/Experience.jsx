import { useState } from 'react';
import './box.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

function Experience() {
  const [experience, setExperience] = useState({
    name: 'Odunluk Graphic Design',
    title: 'Graphic Designer',
    start: '',
    end: '',
    description: '',
  });
  const [isActive, setIsActive] = useState(false);
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
  const handleDisplay = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="box-container" id="experience">
        <div className="title">
          <label htmlFor="experience-button">Experience</label>
          <button
            className={isActive ? 'active' : ''}
            id="education-button"
            onClick={handleDisplay}
          >
            <FaAngleDown className={!isActive ? 'segment' : 'hidden'} />
            <FaAngleUp className={isActive ? 'segment' : 'hidden'} />
          </button>
        </div>
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="exp-name">Company Name: </label>
          <input
            type="text"
            value={experience.name}
            onChange={handleName}
            id="exp-name"
          />
        </div>
        <br />
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="exp-title">Title: </label>
          <input
            type="text"
            value={experience.title}
            onChange={handleTitle}
            id="exp-title"
          />
        </div>
        <br />
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="exp-start-date">Start Date: </label>
          <input
            type="date"
            value={experience.start}
            onChange={handleStart}
            id="exp-start-date"
          />
        </div>
        <br />
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="exp-end-date">End Date: </label>
          <input
            type="date"
            value={experience.end}
            onChange={handleEnd}
            id="exp-end-date"
          />
        </div>
        <br />
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="description">Description: </label>
          <textarea
            rows="5"
            value={experience.description}
            onChange={handleDescription}
            id="description"
          />
        </div>
      </div>
    </>
  );
}

export default Experience;
