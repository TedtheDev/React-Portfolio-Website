import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HamburgerSliderDiv = styled.div`
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
      opacity: 0;
      will-change: opacity;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
    }
`;

const HamburgerSliderMenuDiv = styled.div`
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    position: relative;
    max-width: 30%;
    width: 90%;
    height: 100%;
    pointer-events: auto;
    transform: translateX(${props => props.sliderOpen ? 'none' : '-100%'});
    transition: transform .2s linear;
    background: lightgrey;
`;

const HamburgerMenuSlider = (props) => {
  return (
    <HamburgerSliderDiv>
      <HamburgerSliderMenuDiv sliderOpen={props.sliderOpen} >
        <NavLink onClick={props.toggleSlider} to='/portfolio'>Portfolio</NavLink>
        <NavLink onClick={props.toggleSlider} to='/blog'>Blog</NavLink>
        <NavLink onClick={props.toggleSlider} to='/resume'>Resume</NavLink>
        <NavLink onClick={props.toggleSlider} to='/contact'>Contact</NavLink>
      </HamburgerSliderMenuDiv>
    </HamburgerSliderDiv>
  )
};

React.propTypes = {
  sliderOpen: PropTypes.bool.isRequired,
  toggleSlider: PropTypes.func.isRequired
}
export default HamburgerMenuSlider;