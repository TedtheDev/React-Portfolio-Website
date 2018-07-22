import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../data/portfolio';
import Project from '../components/PortfolioProject';

const PortfolioDiv = styled.section`
  width: 100%;
  height: 100%;
  grid-area: app;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: 3% 0;
`;

const Portfolio = (props) => {
  return(
    <PortfolioDiv>
      {
        portfolioData.map((project, index) => {
          return <Project key={index} project={project} />
        })
      }
    </PortfolioDiv>
  )
};

export default Portfolio;
