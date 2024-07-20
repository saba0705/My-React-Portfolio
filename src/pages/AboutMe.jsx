import React from 'react';
import '../styles/AboutMe.css';
import myprofileImg from '../assets/myprofileImg.jpg';


function AboutMe()  {
  return (
    <div>
      <div className="about-me">
         <img src= {myprofileImg} alt="myprofileImg" className="profile-pic" /> 
        <div className= "title"><h2>About Me</h2>
        </div>
        <section className="content">
        <p>
        Hi, I'm Saba, a dedicated and versatile Full Stack Developer with a passion for crafting robust and scalable web applications. With a strong foundation in both front-end and back-end technologies, I excel in creating seamless user experiences and efficient server-side solutions. My expertise spans HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, allowing me to build end-to-end solutions that meet the highest standards of performance and reliability.
      </p>
      <p>
        Throughout my career, I have been involved in numerous projects, ranging from simple landing pages to complex web applications. My approach to development emphasizes clean, maintainable code and a keen eye for detail. I thrive in dynamic environments where I can continually learn and adapt to the latest industry trends and technologies.
      </p>
      <p>
        Beyond coding, I am an avid problem solver who enjoys the challenge of debugging and optimizing performance. I believe in the power of teamwork and enjoy collaborating with designers, product managers, and other developers to bring innovative ideas to life. My strong communication skills and proactive attitude have always been an asset in delivering successful projects on time and within scope.
      </p>
      <p>
        When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge through blog posts and tech meetups. I am always looking for new opportunities to grow and make a positive impact through my work. Let's connect and create something amazing together!
      </p>
      </section>
      </div>

    </div>
  );
};

export default AboutMe;
