import React from 'react';
import * as projects from '../assets';


function ProjectItem ({ project }) {
  const { name, image, link, repo, description  } = project;
 
  
  return (
    <div 
      className="projectItem"


      
    >
      <a href = {link} target="_blank"><div style={{ backgroundImage:`url(${projects[image]})` }} className="bgImage"></div></a>

      <h3>{name}</h3>
      <p>{description}</p>
      <div className='repolinks'><a href = {repo}>GitHub Repo</a>
    </div>
    </div>
  );
};

export default ProjectItem;
