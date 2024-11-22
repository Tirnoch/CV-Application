import { useState } from 'react';
import InputSegment from './InputSegment';

function Education() {
  const [school, setSchool] = useState({
    type: 'School',
    name: 'Mimar Sinan University',
    title: 'Sanat Sepet Isleri',
    start: '',
    end: '',
    description: null,
    id: '',
  });
  const [isActive, setIsActive] = useState(false);
  const handleName = (e) => {
    setSchool({ ...school, name: e.target.value });
  };
  const handleTitle = (e) => {
    setSchool({ ...school, title: e.target.value });
  };
  const handleStart = (e) => {
    setSchool({ ...school, start: e.target.value });
  };
  const handleEnd = (e) => {
    setSchool({ ...school, end: e.target.value });
  };
  const handleDescription = (e) => {
    setSchool({ ...school, description: e.target.value });
  };

  const handleDisplay = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <InputSegment
        handleName={handleName}
        handleTitle={handleTitle}
        handleStart={handleStart}
        handleEnd={handleEnd}
        handleDisplay={handleDisplay}
        handleDescription={handleDescription}
        isActive={isActive}
        name={school.name}
        title={school.title}
        start={school.start}
        end={school.end}
        type={school.type}
      />
    </>
  );
}

export default Education;
