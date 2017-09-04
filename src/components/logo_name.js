import React from 'react';
import styled from 'styled-components';

const LogoNameWrapper = styled.div`
  background: #FFF;
  grid-area: logo;
`

const LogoName = (props) => {
  return (
    <LogoNameWrapper>
      my logoman
    </LogoNameWrapper>
  )
};

export default LogoName;
