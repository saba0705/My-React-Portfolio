import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Portfolio.css';


import { ProjectList } from '../helpers/ProjectList';


function Portfolio (){
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
       {ProjectList.map((project, idx) => {
        return <ProjectItem id ={idx} name={project.name} image={project.image} />;
      })}

      </div>
    </div>
  );
}

export default Portfolio;
