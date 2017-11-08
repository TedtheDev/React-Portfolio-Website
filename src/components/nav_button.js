import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
  background: #6ccff6;
  padding: 10px;
  font-size: 1.3rem;
  border: 2px #000c11 solid;
  cursor: pointer;
  color: #000c11;
`

const NavButton = (props) => {
  return (
    <NavLink to={props.to}>
      <Button>{props.buttonText}</Button>
    </NavLink>
  )
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default NavButton;
