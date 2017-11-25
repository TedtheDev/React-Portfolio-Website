import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoNameWrapper = styled.div`
  grid-area: logo;
  justify-self: start;
  align-self: center;
`;

const linkStyle = {
  textDecoration: 'none',
  fontSize: 'calc(1rem + 2.5vw)',
  color:"#fcfeff"
};

const LogoName = (props) => {
  return (
    <LogoNameWrapper>
      <Link style={linkStyle} to="/">
          Tyler Edmunds
      </Link>
    </LogoNameWrapper>
  )
};

export default LogoName;
