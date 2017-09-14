import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NavButton from './nav_button';
import HamburgerMenu from './hamburger_menu';

const NavDiv = styled.div`
  background: #FFF;
  grid-area: nav;
  justify-self: stretch;
  align-self: center;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;

  @media (max-width: 800px) {
    display: none;
  }
`;

const HamburgerMenuDiv = styled.span`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const NavButtons = ({toggleSlider, ...props}) => {
  return (
    <NavDiv>
      <ButtonsDiv>
        <NavButton to="/portfolio" buttonText="Portfolio" />
        <NavButton to="/blog" buttonText="Blog" />
        <NavButton to="/resume" buttonText="Resume" />
        <NavButton to="/contact" buttonText="Contact" />
      </ButtonsDiv>
      <HamburgerMenuDiv>
        <HamburgerMenu toggleSlider={toggleSlider}/>
      </HamburgerMenuDiv>
    </NavDiv>
  )
};

NavButtons.propTypes = {
  toggleSlider: PropTypes.func.isRequired
}
export default NavButtons;
