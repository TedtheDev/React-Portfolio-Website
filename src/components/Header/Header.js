import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LogoName from './header/LogoName';
import NavButtons from './header/NavButtons';

const HeaderDiv = styled.header`
  background: #0094ce;
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    ". logo nav .";
`;

const Header = ({toggleSlider, sliderOpen, ...props}) => {
  return (
    <HeaderDiv>
      <LogoName />
      <NavButtons toggleSlider={toggleSlider} sliderOpen={sliderOpen} />
    </HeaderDiv>
  )
}

Header.propTypes = {
  toggleSlider: PropTypes.func.isRequired,
  sliderOpen: PropTypes.bool.isRequired
}
export default Header;
