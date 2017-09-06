import React from 'react';
import PropTypes from 'prop-types';

const Position = ({ position }) => {
  const { positionTitle, employer, timePeriod, duties } = position;
    return (
      <div>
        <div>{positionTitle}</div>
        <div>{employer}</div>
        <div>{timePeriod}</div>
        <ul>
          {
            duties.map((duty, index) => {
              return <li key={index}>{duty}</li>
            })
          }
        </ul>
      </div>
    )
};

const ResumeExperience = (props) => {
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {
          props.experience.map((position, index) => {
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
