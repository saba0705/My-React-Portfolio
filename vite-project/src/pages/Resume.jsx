import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/path-to-resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express</li>
        {/* Add more as needed */}
      </ul>
    </section>
  );
};

export default Resume;
