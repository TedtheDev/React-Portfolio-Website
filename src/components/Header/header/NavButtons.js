import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NavButton from './navButtons/NavButton';
import HamburgerMenu from './navButtons/HamburgerMenu';

const NavDiv = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  @media (max-width: 850px) {
    justify-items: end;
  }
`;

const ButtonsDiv = styled.div`
  display: grid;
  position: relative;
  top: 1vh;
  grid-template-columns: repeat(4,auto);
  grid-template-rows: 1fr;
  grid-column-gap: 2%;
  align-items: center;
  justify-items: center;
  width: 100%;

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
