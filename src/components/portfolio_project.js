import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-bottom: 10%;
  &:not(:last-child)::after {
    position: relative;
    content: "";
    width: 100%;
    height: 2px;
    background: #6CCFF6;
  }
  &:first-child {
    margin-top: 10%;
  }
`;

const ProjectHeading = styled.div`
    display: flex;
    margin-bottom: 2%;
    & a {
      margin-right: 2%;
    }
`;

const liveLink = (link) => {
  if(link !== '') {
    return <a href={link} target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x" aria-hidden="true"></i></a>
  } else {
    return <div></div>
  }
};

const Project = (props) => {
  return (
    <ProjectDiv>
      <ProjectHeading>
        <div style={{fontSize:"1.3rem",marginRight:"2%"}}><strong>{props.project.projectName}</strong></div>
        {
          liveLink(props.project.liveLink)
        }
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
