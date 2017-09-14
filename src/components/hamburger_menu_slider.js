import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    position: relative;
    max-width: 400px;
    width: 90%;
    height: 100%;
    pointer-events: auto;
    transform: translateX(${props => props.sliderOpen ? 'none' : '-100%'});
    transition: transform .2s linear;
`;

const HamburgerMenuSlider = (props) => {
  return (
    <HamburgerSliderDiv>
      <HamburgerSliderMenuDiv sliderOpen={props.sliderOpen} >
        Hamburger stuff
      </HamburgerSliderMenuDiv>
    </HamburgerSliderDiv>
  )
};

React.propTypes = {
  sliderOpen: PropTypes.bool.isRequired
}
export default HamburgerMenuSlider;
