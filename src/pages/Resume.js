import React from 'react';
import styled from 'styled-components';
import { resumeData } from '../../data/resume';

import ResumeSkillsCategory from './resume/ResumeSkillsCategory';
import ResumeExperience from './resume/ResumeExperience';
import ResumeEducation from './resume/ResumeEducation';

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

const ResumeDiv = styled.section`
  grid-area: app;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    "links"
    "resumeSkills"
    "experience"
    "education";
`;

const SkillsDiv = styled.div`
  grid-area: resumeSkills;
  display: grid;
  grid-template-columns: .5fr .5fr .5fr;
  grid-template-rows: .1fr .1fr .1fr;
  grid-template-areas:
    "skills . ."
    "frameworks languages technologies"
    ". databases foreignLanguages";
  color: ${props => props.theme.first.blue};
  background-color: rgba(255,243,176,.8);
  padding: 1rem;
`;

const Resume = (props) => {
  return(
    <ResumeDiv>
      <SkillsDiv>
        <h2 style={{gridArea:"skills"}}>Skills</h2>
        {
          Object.keys(resumeData.skills).map((category,index) => {
              return <div key={index} style={{gridArea:`${category}`}}><ResumeSkillsCategory key={index} category={unCamelCase(category)} skills={resumeData.skills[category]}/></div>
          })
        }
      </SkillsDiv>
      <ResumeExperience experience={resumeData.experience} />
      <ResumeEducation education={resumeData.education} />
    </ResumeDiv>
  )
};

export default Resume;
