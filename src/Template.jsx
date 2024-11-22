import './template.css';
import CvTitle from './CvTitle';

function Template() {
  return (
    <>
      <div className="cv-template">
        <div className="personal-output">
          <p id="name-output">Name data </p>
          <div className="contact-details">
            <p>Mail data</p>
            <p>Phone data</p>
            <p>Location data</p>
          </div>
        </div>
        <div className="other-output">
          <div className="education-output cv-section">
            <div className="section-title">Education</div>
            <div className="sub-section">
              <div className="ss-date">
                <p>Start-Date</p>
                <p>End-Date</p>
              </div>
              <div className="ss-data">
                <p>School Title</p>
                <p>Degree</p>
              </div>
            </div>
          </div>
          <div className="experience-output cv-section">
            <div className="section-title">Professional Experience</div>
            <div className="sub-section">
              <div className="ss-date">
                <p>Start-Date</p>
                <p>End-Date</p>
              </div>
              <div className="ss-data">
                <p>Company Name</p>
                <p>Title</p>
                <p>a brief describtion of your work there</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template;
