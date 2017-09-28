import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectDiv = styled.div`
  margin: 10% 0;
`;

const Project = (props) => {
  return (
    <ProjectDiv>
      <div style={{display:"flex"}}>
        <h3>{props.project.projectName}</h3>
        <a href={props.project.liveLink} target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x" aria-hidden="true"></i></a>
        <a href={props.project.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
      </div>
      <div>{props.project.description}</div>
      <div>
        Technologies:
        {
          props.project.technologiesUsed.map((tech, index, array) => {
            if(index !== array.length - 1) {
              return " " + tech + ",";
            } else {
              return " " + tech;
            }
          })
        }
      </div>
    </ProjectDiv>
  )
};

React.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project;
