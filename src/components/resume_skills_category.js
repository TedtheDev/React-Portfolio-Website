import React from 'react';
import PropTypes from 'prop-types';

const ResumeSkillsCategory = ({category, skills, ...props}) => {
  return (
    <div>
      <div><strong>{category}: </strong></div>
      <div>
        {
          skills.map((skill, index) => {
            if(index !== skills.length - 1) {
              return <span key={index}>{skill}, </span>
            } else {
              return <span key={index}>{skill}</span>
            }

          })
        }
      </div>
    </div>
  )
};

React.propTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}

export default ResumeSkillsCategory;
