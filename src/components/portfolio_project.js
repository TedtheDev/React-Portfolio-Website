import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectWrapper = styled.div`

`;

const Project = (props) => {
  return (
    <div>
      {props.project.projectName}
    </div>
  )
};

React.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project;
