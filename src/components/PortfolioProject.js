import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GitHubLogoPNG from '../../assets/GitHub-Mark-120px-plus.png';

const ProjectDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-bottom: 5%;
  &:not(:last-child)::after {
    position: relative;
    content: "";
    width: 100%;
    height: 2px;
    background: #6CCFF6;
  }
`;

const ProjectHeading = styled.div`
    display: flex;
    margin-bottom: 2%;
    & a {
      margin-right: 2%;
    }
`;

const linkNoDecoration = {
  textDecoration:"none",
  color:"#000c11"
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
    <ProjectDiv>
      <ProjectHeading>
        <div style={{fontSize:"1.3rem",marginRight:"2%"}}><strong>{props.project.projectName}</strong></div>
        {
          liveLink(props.project.liveLink)
        }
        <a style={linkNoDecoration} href={props.project.github} target="_blank" rel="noopener noreferrer">
          <img src={GitHubLogoPNG} width="32px" height="32px" alt="GitHub Repo" />
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
