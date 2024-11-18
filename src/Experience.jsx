import { useState } from 'react';
import InputSegment from './InputSegment';

function Experience() {
  const [experience, setExperience] = useState({
    name: 'Odunluk Graphic Design',
    title: 'Graphic Designer',
    start: '',
    end: '',
    description: 'Type here. . . ',
    id: '',
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
      <InputSegment
        handleName={handleName}
        handleTitle={handleTitle}
        handleStart={handleStart}
        handleEnd={handleEnd}
        handleDisplay={handleDisplay}
        handleDescription={handleDescription}
        isActive={isActive}
        name={experience.name}
        title={experience.title}
        start={experience.start}
        end={experience.end}
        description={experience.description}
      />
    </>
  );
}

export default Experience;
