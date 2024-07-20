import React from 'react';
import '../styles/Resume.css';
import PDF from '../assets/SabaPervezResume.pdf';

const Resume = () => {
  const handleDownload = () => {
    fetch(PDF).then((response) => {
      response.blob().then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        open(fileURL, '_blank'); // Opens embedded adobe viewer
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Saba_Pervez_Resume.pdf";
        alink.click(); 
      });
    });
  };

  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        Click here to download my{" "}
        <a href="#download" onClick={handleDownload} className="resume-link">
          resume as a PDF
        </a>
      </p>
    
      <div className="skills">
        <div className="skills-section">
          <h3>Front-End</h3>
          <p>React, HTML, CSS, Bootstrap, JavaScript</p>
        </div>
        <div className="skills-section">
          <h3>Back-End</h3>
          <p>Node.js, ExpressJS, MongoDB, GraphQL, ApolloServer, RESTful APIs, SQL</p>
        </div>
      </div>
    </section>
  );
};

export default Resume;

