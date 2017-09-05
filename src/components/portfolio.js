import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../data/portfolio';
import Project from './portfolio_project';

const Portfolio = (props) => {
  return(
    <div>
      {
        portfolioData.map((project, index) => {
          return <Project key={index} project={project} />
        })
      }
    </div>
  )
};

export default Portfolio;
