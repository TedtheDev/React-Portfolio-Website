import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerMenuWrapper = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  cursor: pointer;
`;

const HamburgerDiv = styled.div`
  width: 75px;
  height: 10px;
  background: green;
  cursor: pointer;

  &::before {
    position: absolute;
    width: 75px;
    height: 10px;
    background: green;
    content: "";
    transform: translateY(${props => props.sliderOpen ? '-200%' : '-150%'});
    transition: transform .2s;
    cursor: pointer;
  }

  &::after {
    position: absolute;
    width: 75px;
    height: 10px;
    background: green;
    content: "";
    transform: translateY(${props => props.sliderOpen ? '200%' : '150%'});
    transition: transform .2s;
    cursor: pointer;
  }
`;

const HamburgerMenu = ({toggleSlider, sliderOpen, ...props}) => {
  return (
    <HamburgerMenuWrapper onClick={toggleSlider}>
      <HamburgerDiv sliderOpen={sliderOpen} />
    </HamburgerMenuWrapper>
  )
};

HamburgerMenu.propTypes = {
  toggleSlider: PropTypes.func.isRequired,
  sliderOpen: PropTypes.bool.isRequired
}

export default HamburgerMenu;
