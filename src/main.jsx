import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import Template from './Template';
import Control from './Control';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <div className="input-container">
        <Control />
        <Personal />
        <Education />
        <Experience />
      </div>
      <div className="output-container">
        <Template />
      </div>
    </div>
  </StrictMode>
);
