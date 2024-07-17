import React from 'react';
import '../styles/AboutMe.css';


function AboutMe()  {
  return (
    <div>
      <div className="about-me">
        <img src={profile} alt="Profile" className="profile-pic" />
        <h2>About Me</h2>
        <p>My name is Saba, I'm a software developer with a passion for learning and creating</p>
      </div>

      <div className='skills'>
        <h2>Skills</h2>
        <ol className='list'>
          <li className='item'>
            <h3> Front-End</h3>
            <span>
              React, HTML, CSS, Bootstrap, Material-UI.
            </span>
          </li>
          <li className='item'>
            <h3> Back-End</h3>
            <span>
              Node.js, ExpressJS, MongoDB, GraphQL, ApolloServer, RESTful APIs, SQL.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AboutMe;
