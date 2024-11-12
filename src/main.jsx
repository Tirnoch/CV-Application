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
    <Control />
    <Personal />
    <Education />
    <Experience />
    <Template />
  </StrictMode>
);
