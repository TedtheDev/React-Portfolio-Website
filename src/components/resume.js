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

const ResumeDiv = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: .1fr .5fr .5fr .5fr;
  grid-template-areas:
    "links"
    "resumeSkills"
    "experience"
    "education"
`;

const SkillsDiv = styled.div`
  grid-area: resumeSkills
  display: grid;
  grid-template-columns: .5fr .5fr .5fr;
  grid-template-rows: .1fr .1fr .1fr;
  grid-template-areas:
    "skills skills skills"
    "21 22 23"
    "31 32 33"
`;

const LinksDiv = styled.div`
  grid-area: links;
  grid-column: 1 / span 1;
`
const Resume = (props) => {
  return(
    <ResumeDiv>
      <div>
        <h4>Links</h4>
        <div><a href={resumeData.linkedInLink} target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin" aria-hidden="true"></i></a>{resumeData.linkedInUsername}</div>
        <div><a href={resumeData.gitHubLink} target="_blank" rel="noreferrer noopener"><i className="fa fa-github" aria-hidden="true"></i></a>{resumeData.gitHubUsername}</div>
      </div>
      <SkillsDiv>
        <h2 style={{grid:"skills", gridColumn: "1 / span 3" }}>Skills</h2>
        {
          Object.keys(resumeData.skills).map((category,index) => {
            return <ResumeSkillsCategory key={index} category={unCamelCase(category)} skills={resumeData.skills[category]}/>
          })
        }
      </SkillsDiv>
      <ResumeExperience experience={resumeData.experience} />
      <ResumeEducation education={resumeData.education} />
    </ResumeDiv>
  )
};

export default Resume;
