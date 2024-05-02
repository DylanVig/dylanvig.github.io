import React from 'react';
import './Intro.css'

const ResumeView = ({ pdf }) => {
  return (
    <div>
      <a href={pdf} target="_blank" rel="noopener noreferrer">
        <button className="btn-color-1">Resume</button>
      </a>
    </div>
  );
};

export default ResumeView;