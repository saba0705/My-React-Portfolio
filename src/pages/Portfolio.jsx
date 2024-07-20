import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Portfolio.css';
import projectData from '../helpers/projectData';




function Portfolio (){
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
       {projectData.map((project) => {
        return <ProjectItem project= {project} key= {project.name}/>;
      })}

      </div>
    </div>
  );
}

export default Portfolio;
