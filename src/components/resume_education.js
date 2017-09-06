import React from 'react';
import PropTypes from 'prop-types';

const ResumeEducation = ({ education }) => {
  const { collegeName, location, timePeriod, degree, secondaryMajor, minor, studyAbroad } = education;
  return (
    <div>
      <h2>Education</h2>
      <div>{collegeName}</div>
      <div>{location}</div>
      <div>{timePeriod}</div>
      <div>{degree}</div>
      <div>{secondaryMajor}</div>
      <div>{minor}</div>
    </div>
  )
};

ResumeEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ResumeEducation;
