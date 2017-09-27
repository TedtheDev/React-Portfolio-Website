import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    <div onClick={toggleSlider}>
      <HamburgerDiv sliderOpen={sliderOpen} />
    </div>
  )
};

HamburgerMenu.propTypes = {
  toggleSlider: PropTypes.func.isRequired,
  sliderOpen: PropTypes.bool.isRequired
}

export default HamburgerMenu;
