import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentWrapper = styled.div`

`;

const Content = (props) => {
  return (
    <ContentWrapper>
      content 2
      <Link to="/" >To Home</Link>
    </ContentWrapper>
  )
};

export default Content;
