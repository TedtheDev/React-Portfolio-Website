import React from 'react';
import styled from 'styled-components';
import { resumeData } from '../../data/resume';

const Resume = (props) => {
  return(
    <div>
      {resumeData.name}
    </div>
  )
};

export default Resume;
