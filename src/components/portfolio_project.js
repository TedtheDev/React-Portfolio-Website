import React from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.div`

`;

const Project = (props) => {
  return (
    <div>
      {props.project.projectName}
    </div>
  )
};

export default Project;
