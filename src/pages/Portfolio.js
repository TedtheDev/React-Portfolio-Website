import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../data/portfolio';
import Project from '../components/PortfolioProject';

const PortfolioDiv = styled.section`
  grid-area: app;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
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
