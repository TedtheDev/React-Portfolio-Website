import React from 'react';
import PropTypes from 'prop-types';

const ResumeSkillsCategory = ({category, skills, ...props}) => {
  return (
    <div>
      <div>{category}</div>
      <ul>
        {
          skills.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })
        }
      </ul>
    </div>
  )
};

React.propTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}

export default ResumeSkillsCategory;
