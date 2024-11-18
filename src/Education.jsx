import { useState } from 'react';
import InputSegment from './InputSegment';

function Education() {
  const [school, setSchool] = useState({
    name: 'Mimar Sinan University',
    title: 'Sanat Sepet Isleri',
    start: '',
    end: '',
    description: 'Ahmet',
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
        isActive={isActive}
        name={school.name}
        title={school.title}
        start={school.start}
        end={school.end}
      />
    </>
  );
}

export default Education;
