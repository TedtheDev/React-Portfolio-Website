import React from 'react';
import PropTypes from 'prop-types';

const ResumeSkillsCategory = (props) => {
  return (
    <div>
      <div>{props.category}</div>
      <ul>
        {
          props.skills.map((skill, index) => {
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
