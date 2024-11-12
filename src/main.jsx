import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import Template from './Template';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Personal />
    <Education />
    <Experience />
    <Template />
  </StrictMode>
);
