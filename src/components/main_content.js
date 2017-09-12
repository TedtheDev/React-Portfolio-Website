import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../data/portfolio';
import Project from './portfolio_project';

const ContentWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
`;

const LatestProjectDiv = styled.div`
  margin-top: 5%;
  border: 1px solid black
`;

const Content = (props) => {
  return (
    <ContentWrapper>
      <h1>Software Developer</h1>
      <LatestProjectDiv>
        <div>
          <h3>Latest Project</h3>
          <Project project={portfolioData[0]} />
        </div>
      </LatestProjectDiv>
    </ContentWrapper>
  )
};

export default Content;
