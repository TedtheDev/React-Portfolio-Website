import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectDiv = styled.div`
  display: grid;
  background-color: rgba(255, 243, 176, .8);
  color: ${props => props.theme.first.blue};
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 3%;
  border-radius: 10px;
  margin-bottom: 5%;
`;

const ProjectHeading = styled.div`
    display: flex;
    margin-bottom: 2%;
    & a {
      margin-right: 2%;
    }
`;

const linkNoDecoration = {
  textDecoration: "none",
  color: "rgba(51, 92, 103)"
};

const liveLink = (link) => {
  if(link !== '') {
    return <a style={linkNoDecoration} href={link} target="_blank" rel="noopener noreferrer"><i className="fa fa-desktop fa-2x" aria-hidden="true"></i></a>
  } else {
    return <div></div>
  }
};

const Project = (props) => {
  return (
    <ProjectDiv style={props.style}>
      <ProjectHeading>
        <div style={{fontSize:"1.3rem",marginRight:"2%"}}><strong>{props.project.projectName}</strong></div>
        {
          liveLink(props.project.liveLink)
        }
        <a style={linkNoDecoration} href={props.project.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x" aria-hidden="true"></i>
        </a>
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
