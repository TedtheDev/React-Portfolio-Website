import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavButton from './nav_button';

const NavWrapper = styled.div`
  background: #FFF;
  grid-area: nav;
  justify-self: stretch;
  align-self: center;
`

const NavButtons = (props) => {
  return (
    <NavWrapper>
      <NavButton to="/portfolio" buttonText="Portfolio" />
      <NavButton to="/blog" buttonText="Blog" />
      <NavButton to="/resume" buttonText="Resume" />
      <NavButton to="/contact" buttonText="Contact" />
    </NavWrapper>
  )
};

export default NavButtons;
