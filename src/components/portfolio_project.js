import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectDiv = styled.div`
`;

const Project = (props) => {
  return (
    <ProjectDiv>
      <div style={{display:"flex", alignItems: "center", marginBottom:"2%"}}>
        <div style={{fontSize:"1.3rem"}}><strong>{props.project.projectName}</strong></div>
        <a href={props.project.liveLink} target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x" aria-hidden="true"></i></a>
        <a href={props.project.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
      </div>
      <div>{props.project.description}</div>
      <p>
        <strong>Technologies</strong>:
        {
          props.project.technologiesUsed.map((tech, index, array) => {
            if(index !== array.length - 1) {
              return " " + tech + ",";
            } else {
              return " " + tech;
            }
          })
        }
      </p>
    </ProjectDiv>
  )
};

React.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project;
