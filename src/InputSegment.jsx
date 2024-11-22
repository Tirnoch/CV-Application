/* eslint-disable react/prop-types */
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import './box.css';
const InputSegment = ({
  type,
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
          <label htmlFor={type + ' button'}>
            {type === 'School' ? 'Education' : 'Experience'}
          </label>
          <button
            className={isActive ? 'active' : ''}
            id={type + ' button'}
            onClick={handleDisplay}
          >
            <FaAngleDown className={!isActive ? 'segment' : 'hidden'} />
            <FaAngleUp className={isActive ? 'segment' : 'hidden'} />
          </button>
        </div>
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor={type + ' name'}>{type} Name: </label>
          <input
            type="text"
            value={name}
            onChange={handleName}
            id={type + ' name'}
          />
        </div>
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor={type + ' title'}>
            {type === 'School' ? 'Degree' : 'Title'}{' '}
          </label>
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            id={type + ' title'}
          />
        </div>
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor={type + ' start'}>Start Date: </label>
          <input
            type="date"
            value={start}
            onChange={handleStart}
            id={type + ' start'}
          />
        </div>
        {/*End-date cannot be earlier than the start-date. Handle it when you are free*/}
        <div className={isActive ? 'segment' : 'hidden'}>
          <label htmlFor={type + ' end'}>End Date: </label>
          <input
            type="date"
            value={end}
            min={start}
            onChange={handleEnd}
            id={type + ' end'}
          />
        </div>

        {type === 'Company' ? (
          <div className={isActive ? 'segment' : 'hidden'}>
            <label htmlFor={type + ' description'}>Description: </label>
            <textarea
              rows="5"
              value={description}
              onChange={handleDescription}
              id={type + ' description'}
              placeholder="Type here. . ."
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default InputSegment;
