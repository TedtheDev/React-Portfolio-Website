import React from 'react';
import PropTypes from 'prop-types';

const Position = ({ position, ...props }) => {
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

React.propTypes = {
    position: PropTypes.object.isRequired
};

export default Position;
