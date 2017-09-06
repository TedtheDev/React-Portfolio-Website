import React from 'react';
import styled from 'styled-components';
import { resumeData } from '../../data/resume';

import ResumeSkillsCategory from './resume_skills_category';
import ResumeExperience from './resume_experience';
import ResumeEducation from './resume_education';
/**
 * [unCamelCase turn camelcase into english words,
 *  ex foreignLanges = Foreign Languages, frameworks = Frameworks
 * ]
 * @param  {[string]}  [camel Cased string]
 * @return {[string]}  [uncamel cased string]
 */
function unCamelCase(string) {
  string = string.split(''); // turn string to array
  for(let i = 0; i < string.length; i++) {
    if(i === 0) { //capitilize first char
      string[0] = string[0].toUpperCase();
    } else { // put a space before capital letter
        if(string[i] === string[i].toUpperCase()) {
          string.splice(i, 0, ' ');
          i++;
        }
    }
  }
  return string.join(''); // return string by joining array
}

const Resume = (props) => {
  return(
    <div>
      <div>
        <h2>Skills</h2>
        {
          Object.keys(resumeData.skills).map((category,index) => {
            return <ResumeSkillsCategory key={index} category={unCamelCase(category)} skills={resumeData.skills[category]}/>
          })
        }
      </div>
      <ResumeExperience experience={resumeData.experience} />
      <ResumeEducation education={resumeData.education} />
    </div>
  )
};

export default Resume;
