import { useState } from 'react';
import './box.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

function Education() {
  const [school, setSchool] = useState({
    name: 'Mimar Sinan University',
    degree: 'Sanat Sepet Isleri',
    start: '',
    end: '',
  });
  const [isActive, setIsActive] = useState(false);
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
  const handleDisplay = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="box-container" id="education">
        <div className="title">
          <label htmlFor="education-button">Education</label>
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
          <label htmlFor="edu-name">School Name: </label>
          <input
            type="text"
            value={school.name}
            onChange={handleName}
            id="edu-name"
          />
        </div>

        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="degree">Degree: </label>
          <input
            type="text"
            value={school.degree}
            onChange={handleDegree}
            id="degree"
          />
        </div>

        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="edu-start-date">Start Date: </label>
          <input
            type="date"
            value={school.start}
            onChange={handleStart}
            id="edu-start-date"
          />
        </div>

        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="edu-end-date">End Date: </label>
          <input
            type="date"
            value={school.end}
            onChange={handleEnd}
            id="edu-end-date"
          />
        </div>
      </div>
    </>
  );
}

export default Education;
