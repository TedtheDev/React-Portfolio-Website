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
    grid-template-columns: 100%;
    grid-template-rows: 3% auto;
    grid-row-gap: 15px;
    justify-items: center;
    align-items: center;
    align-content: start;
    position: relative;
    max-width: 30%;
    width: 90%;
    height: 100%;
    pointer-events: auto;
    transform: translateX(${props => props.sliderOpen ? 'none' : '-100%'});
    transition: transform .2s linear;
    background: #6ccff6;
`;

const NavButton = {
  textDecoration:"none",
  background: "#0094ce",
  padding: "5px",
  height: "100%",
  width: "90%",
  color: "#fcfeff",
  boxShadow: "1px 5px 0px #747c7f",
  border: "2px #000 solid"

};

const HamburgerMenuSlider = ({toggleSlider, sliderOpen, ...props}) => {
  return (
    <HamburgerSliderDiv>
      <HamburgerSliderMenuDiv sliderOpen={sliderOpen} >
        <span></span>
        <NavLink style={NavButton} onClick={toggleSlider} to='/portfolio'>Portfolio</NavLink>
        <NavLink style={NavButton} onClick={toggleSlider} to='/blog'>Blog</NavLink>
        <NavLink style={NavButton} onClick={toggleSlider} to='/resume'>Resume</NavLink>
        <NavLink style={NavButton} onClick={toggleSlider} to='/contact'>Contact</NavLink>
      </HamburgerSliderMenuDiv>
    </HamburgerSliderDiv>
  )
};

React.propTypes = {
  sliderOpen: PropTypes.bool.isRequired,
  toggleSlider: PropTypes.func.isRequired
}
export default HamburgerMenuSlider;
