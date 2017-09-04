import React, { Component } from 'react';
import styled from 'styled-components';

import LogoName from './logo_name';
import NavButtons from './navigation';

const HeaderWrapper = styled.div`
  background: #FFF;
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
  ". logo nav ."
`
const Header = (props) => {
  return (
    <HeaderWrapper>
      <LogoName />
      <NavButtons />
    </HeaderWrapper>
  )
}

export default Header;
