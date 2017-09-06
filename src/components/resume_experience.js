import React from 'react';
import PropTypes from 'prop-types';
import Position from './resume_experience_position';

const ResumeExperience = ({experience, ...props}) => {
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {
          experience.map((position, index) => {
            return <Position key={index} position={position} />
          })
        }
      </ul>
    </div>
  )
};

React.propTypes = {
    experience: PropTypes.array.isRequired
};

export default ResumeExperience;
