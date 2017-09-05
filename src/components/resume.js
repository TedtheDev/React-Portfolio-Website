import React from 'react';
import styled from 'styled-components';
import { resumeData } from '../../data/resume';

import ResumeSkillsCategory from './resume_skills_category';

function unCamelCase(string) {
  string = string.split('');
  console.log(string)
  for(let i = 0; i < string.length; i++) {
    console.log('in here')
    if(i === 0) {
      string[0] = string[0].toUpperCase();
    } else {
        if(string[i] === string[i].toUpperCase()) {
          string.splice(i, 0, ' ');
          i++
        }
    }
    if(i === 1000) {
      i = string.length + 5;
    }
  }

  console.log(string)
  console.log(string.join(''))
  return string.join('');
}

const Resume = (props) => {
  return(
    <div>
      <div>
        Skills
      </div>
      {
        Object.keys(resumeData.skills).map((category) => {
          return <ResumeSkillsCategory category={unCamelCase(category)} skills={resumeData.skills[category]}/>
        })
      }
    </div>
  )
};

export default Resume;
