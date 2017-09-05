import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
  background: rgb(145, 228, 184);
  border: none;
  padding: 5px;
  margin: 1%;
  font-size: 1.2rem;
  border: 1px #000 solid;
  border-radius: 10%;
  cursor: pointer;
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
