/* eslint-disable react/prop-types */
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import './box.css';
const InputSegment = ({
  name,
  title,
  start,
  end,
  description,
  handleEnd,
  handleStart,
  handleTitle,
  handleName,
  handleDisplay,
  handleDescription,
  isActive,
}) => {
  return (
    <>
      <div className="box-container">
        <div className="input-section-title">
          <label htmlFor="education-button">
            {description ? 'Experience' : 'Education'}
          </label>
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
          <label htmlFor="edu-name">Name: </label>
          <input type="text" value={name} onChange={handleName} id="edu-name" />
        </div>
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="degree">Title: </label>
          <input type="text" value={title} onChange={handleTitle} id="degree" />
        </div>
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="edu-start-date">Start Date: </label>
          <input
            type="date"
            value={start}
            onChange={handleStart}
            id="edu-start-date"
          />
        </div>
        {/*End-date cannot be earlier than the start-date. Handle it when you are free*/}
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor="edu-end-date">End Date: </label>
          <input
            type="date"
            value={end}
            onChange={handleEnd}
            id="edu-end-date"
          />
        </div>

        {description && (
          <div className={isActive ? 'segment' : 'hidden'}>
            <label htmlFor="descrtipion">Description: </label>
            <textarea
              rows="5"
              value={description}
              onChange={handleDescription}
              id="descrtipion"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default InputSegment;
