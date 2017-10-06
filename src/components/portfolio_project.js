import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectDiv = styled.div`
`;

const ProjectHeading = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr .5fr .5fr 1fr;
    margin-bottom: 2%;
`;

const Project = (props) => {
  return (
    <ProjectDiv>
      <ProjectHeading>
        <div style={{fontSize:"1.3rem"}}><strong>{props.project.projectName}</strong></div>
        <a href={props.project.liveLink} target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x" aria-hidden="true"></i></a>
        <a href={props.project.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
      </ProjectHeading>
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
