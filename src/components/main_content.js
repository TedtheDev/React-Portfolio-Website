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

const LatestProject = styled.div`
  margin-top: 5%;
`;

const Content = (props) => {
  return (
    <ContentWrapper>
      <div>Software Developer</div>
      <LatestProject>
        <div>
          Latest Project
          <Project project={portfolioData[0]} />
        </div>
      </LatestProject>
    </ContentWrapper>
  )
};

export default Content;
