import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PositionDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: .1fr 1fr;
  grid-template-areas:
    "position company time"
    "duties duties duties";
`;

const PositionDuties = styled.div`
    grid-area: duties;
`;

const Position = ({ position, ...props }) => {
  const { positionTitle, employer, timePeriod, duties } = position;
    return (
      <PositionDiv>
        <div style={{gridArea:"position"}}><strong>{positionTitle}</strong></div>
        <div style={{gridArea:"company"}}>{employer}</div>
        <div style={{gridArea:"time"}}>{timePeriod}</div>
        <PositionDuties>
          {
            duties.map((duty, index) => {
              return <div key={index}>• {duty}</div>
            })
          }
        </PositionDuties>
      </PositionDiv>
    )
};

React.propTypes = {
    position: PropTypes.object.isRequired
};

export default Position;
