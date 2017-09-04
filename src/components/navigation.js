import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.div`
  background: #FFF;
  grid-area: nav;
`

const NavButtons = (props) => {
  return (
    <NavWrapper>
      <Link to="/content2">Content2</Link>
    </NavWrapper>
  )
};

export default NavButtons;
