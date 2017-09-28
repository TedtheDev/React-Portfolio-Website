import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NavButton from './nav_button';
import HamburgerMenu from './hamburger_menu';

const NavDiv = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  @media (max-width: 800px) {
    justify-items: end;
  }
`;

const ButtonsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: 1fr;

  @media (max-width: 800px) {
    display: none;
  }
`;

const HamburgerMenuDiv = styled.div`
  display: none;
  height:50%;
  align-items: center;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
  }
`;

const NavButtons = ({toggleSlider, sliderOpen, ...props}) => {
  return (
    <NavDiv>
      <ButtonsDiv>
        <NavButton to="/portfolio" buttonText="Portfolio" />
        <NavButton to="/blog" buttonText="Blog" />
        <NavButton to="/resume" buttonText="Resume" />
        <NavButton to="/contact" buttonText="Contact" />
      </ButtonsDiv>
      <HamburgerMenuDiv>
        <HamburgerMenu toggleSlider={toggleSlider} sliderOpen={sliderOpen}/>
      </HamburgerMenuDiv>
    </NavDiv>
  )
};

NavButtons.propTypes = {
  toggleSlider: PropTypes.func.isRequired,
  sliderOpen: PropTypes.bool.isRequired
}
export default NavButtons;
