import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Position from './resume_experience_position';

const ExperienceDiv = styled.div`
  grid-area: experience;
`;

const ResumeExperience = ({experience, ...props}) => {
  return (
    <ExperienceDiv>
      <h2>Experience</h2>
      <div>
        {
          experience.map((position, index, array) => {
            if(index !== array.length - 1) {
              return <div style={{marginBottom:"4%"}}><Position key={index} position={position} /></div>
            } else {
              return <Position key={index} position={position} />
            }
          })
        }
      </div>
    </ExperienceDiv>
  )
};

React.propTypes = {
    experience: PropTypes.array.isRequired
};

export default ResumeExperience;
