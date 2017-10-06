import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../data/portfolio';
import Project from './portfolio_project';

const ContentDiv = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
`;

const LatestProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(15%);
`;

const Content = (props) => {
  return (
    <ContentDiv>
      <h1>Software Developer</h1>
      <h1>Gamer</h1>
      <h1>Wannabe Polyglot</h1>
      <LatestProjectDiv>
          <h2>Latest Project</h2>
          <Project project={portfolioData[0]} />
      </LatestProjectDiv>
    </ContentDiv>
  )
};

export default Content;
