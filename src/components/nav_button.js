import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
  background: #6ccff6;
  padding: 10px;
  font-size: 1.2rem;
  border: 3px #000c11 solid;
  border-radius: 5px;
  cursor: pointer;
  color: #000c11;
  width: 100%;
`

const NavButton = ({buttonText, to, ...props}) => {
  return (
    <NavLink style={{minWidth:"30%"}} to={to}>
      <Button>{buttonText}</Button>
    </NavLink>
  )
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default NavButton;
