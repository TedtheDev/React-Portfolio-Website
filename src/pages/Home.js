import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../data/portfolio';
import Project from '../components/PortfolioProject';

const ContentDiv = styled.section`
grid-area: app;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-content: start;
`;

const LatestProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(25%);
`;

const Home = (props) => {
  return (
    <ContentDiv>
      <h1>- Software Developer -</h1>
      <h1>- Gamer -</h1>
      <h1>- Wannabe Polyglot -</h1>
      <LatestProjectDiv>
          <h2>Latest Project</h2>
          <Project project={portfolioData[0]} />
      </LatestProjectDiv>
    </ContentDiv>
  )
};

export default Home;
