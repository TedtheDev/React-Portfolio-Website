import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  grid-area: footer;
  background: grey;
`;

const Footer = (props) => {
  return (
    <FooterDiv>
      Footer
    </FooterDiv>
  )
};

export default Footer;
