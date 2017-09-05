import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LogoNameWrapper = styled.div`
  background: #FFF;
  grid-area: logo;
  justify-self: start;
  align-self: center;
`

const LogoStyle = styled.div`
  cursor: pointer;
  text-decoration: none;
`;

const LinkStyle = {
  textDecoration: 'none',
  fontSize: '2.5rem'
};

const LogoName = (props) => {
  return (
    <LogoNameWrapper>
      <NavLink style={LinkStyle} to="/">
        <LogoStyle>
          Tyler Edmunds
        </LogoStyle>
      </NavLink>
    </LogoNameWrapper>
  )
};

export default LogoName;
