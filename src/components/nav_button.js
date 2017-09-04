import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background: rgb(145, 228, 184);
`

const NavButton = (props) => {
  return (
    <Link to={props.to}>
      <Button>{props.buttonText}</Button>
    </Link>
  )
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default NavButton;
