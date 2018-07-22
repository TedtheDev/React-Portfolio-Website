import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HamburgerSliderDiv = styled.div`
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
    pointer-events: none;

    &:after {
      z-index: -1;
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.4);
      pointer-events: ${props => props.sliderOpen ? 'all' : 'none'};
      opacity: ${props => props.sliderOpen ? '.9' : '0'};
      will-change: opacity;
      transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
    }
`;

const HamburgerSliderMenuDiv = styled.nav`
    z-index: 2;
    display: grid;
    grid-template-columns: 90%;
    grid-template-rows: 5% auto;
    grid-row-gap: 15px;
    justify-items: center;
    align-items: center;
    align-content: start;
    max-width: 30%;
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
  boxShadow: "5px 5px 0px #747c7f",
  border: "2px #000 solid",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "start"

};

const HamburgerMenuSlider = ({toggleSlider, sliderOpen, ...props}) => {
  return (
    <HamburgerSliderDiv sliderOpen={sliderOpen} onClick={toggleSlider}>
      <HamburgerSliderMenuDiv sliderOpen={sliderOpen} >
        <span></span>
        <NavLink style={NavButton} onClick={toggleSlider} to='/portfolio'><span>Portfolio</span></NavLink>
        <NavLink style={NavButton} onClick={toggleSlider} to='/blog'><span>Blog</span></NavLink>
        <NavLink style={NavButton} onClick={toggleSlider} to='/resume'><span>Resume</span></NavLink>
        <NavLink style={NavButton} onClick={toggleSlider} to='/contact'><span>Contact</span></NavLink>
      </HamburgerSliderMenuDiv>
    </HamburgerSliderDiv>
  )
};

React.propTypes = {
  sliderOpen: PropTypes.bool.isRequired,
  toggleSlider: PropTypes.func.isRequired
}
export default HamburgerMenuSlider;
