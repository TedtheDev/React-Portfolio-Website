import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
  font-size: 2vw;
  background: none;
  padding-bottom: 3px;
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  color: rgb(252, 254, 255);
  &:hover {
    border-bottom: .3vw solid rgb(252, 254, 255);
  }
`;

const NavButton = ({buttonText, to, ...props}) => {
  return (
    <NavLink activeStyle={{borderBottom:".3vw solid rgb(252, 254, 255)"}}to={to}>
      <Button>{buttonText}</Button>
    </NavLink>
  )
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default NavButton;
