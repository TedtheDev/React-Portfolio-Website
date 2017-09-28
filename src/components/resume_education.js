import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const EducationDiv = styled.div`
    grid-area: education;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: .1fr .1fr .1fr .1fr;
    grid-template-areas:
      "educationTitle educationTitle educationTitle"
      "location college timePeriod"
      "degree secondaryMajor minor"
      "studyAbroad studyAbroad studyAbroad"
`;

const ResumeEducation = ({ education, ...props }) => {
  const { collegeName, location, timePeriod, degree, secondaryMajor, minor, studyAbroad } = education;
  return (
    <EducationDiv>
      <h2 style={{gridArea:"educationTitle"}}>Education</h2>
      <div style={{gridArea:"college"}}>{collegeName}</div>
      <div style={{gridArea:"location"}}>{location}</div>
      <div style={{gridArea:"timePeriod"}}>{timePeriod}</div>
      <div style={{gridArea:"degree"}}>{degree}</div>
      <div style={{gridArea:"secondaryMajor"}}>Secondary Major: {secondaryMajor}</div>
      <div style={{gridArea:"minor"}}>Minor: {minor}</div>
      <div style={{gridArea:"studyAbroad"}}>Study Abroad:
        {
          studyAbroad.map((abroad, index) => {
            if(index !== studyAbroad.length - 1) {
              return <span key={index}>{abroad.location},{abroad.timePeriod};</span>
            } else {
              return <span key={index}>{abroad.location},{abroad.timePeriod}</span>
            }
          })
        }
      </div>
    </EducationDiv>
  )
};

ResumeEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ResumeEducation;
