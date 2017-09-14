import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerDiv = styled.div`

`;

const HamburgerMenu = ({toggleSlider, ...props}) => {
  return (
    <div>
      <button type="button" onClick={toggleSlider} value="Menu">Menu</button>
    </div>
  )
};

HamburgerMenu.propTypes = {
  toggleSlider: PropTypes.func.isRequired
}

export default HamburgerMenu;
