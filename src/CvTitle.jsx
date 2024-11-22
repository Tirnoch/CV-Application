import { useState } from 'react';
import Personal from './Personal';

const CvTitle = () => {
  return (
    <>
      <div className="personal-output">
        <Personal />
        {/* <p id="name-output">Name data: {name}</p>
        <div className="contact-details">
          <p>Mail data: {mail}</p>
          <p>Phone data: {number}</p>
          <p>Location data: {location}</p>
        </div> */}
      </div>
    </>
  );
};

export default CvTitle;
