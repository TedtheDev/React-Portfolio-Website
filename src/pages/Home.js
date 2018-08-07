import React from 'react';
import styled from 'styled-components';
import { portfolioData } from '../../data/portfolio';
import TedTree from '../../assets/TedTree.jpg';
import TedBox from '../../assets/TedBox.jpg';

import Project from '../components/PortfolioProject';

const ContentDiv = styled.section`
  grid-area: app;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  justify-items: center;
  align-content: start;
`;

const LatestProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
`;

const LatestProjectTitle = styled.div`
  width: 100%;
  font-size: 1.2rem;
  padding: .4rem 0;
  text-align: center;
  border-top: 1px solid ${props => props.theme.first.white};
  border-right: 1px solid ${props => props.theme.first.white};
  border-left: 1px solid ${props => props.theme.first.white};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ImageFigure = styled.figure`
  perspective: 150rem;
  position: relative;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  background: ${props => props.theme.first.white};
  overflow: hidden;
  border: 5px solid ${props => props.theme.first.white};
  @supports(clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
      clip-path: circle(50% at 50% 50%);-webkit-shape-outside: circle(50% at 50% 50%);
      border-radius: none;
  };
`;

const ImageFront = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform-origin: center;
  transform: scale(1.3) translateX(-.2rem) rotateY(0deg) rotate(-90deg);
  transition: all .2s linear;
  backface-visibility: hidden;

  ${ImageFigure}:hover & {
    transform: scale(1.3) translateX(-.2rem) rotateY(180deg) rotate(-90deg);
  }
`;

const ImageBehind = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: rotateY(180deg);
  transition: all .2s linear;
  backface-visibility: hidden;

  ${ImageFigure}:hover & {
    transform: rotateY(0deg);
  }
`;

const Home = (props) => {
  return (
    <ContentDiv>
      <ImageFigure>
          <ImageFront src={TedTree} />
          <ImageBehind src={TedBox} />
      </ImageFigure>
      <h2>JavaScript Enthusiast</h2>
      <h2>Passionate Gamer</h2>
      <h2>Wannabe Polyglot</h2>
      <LatestProjectDiv>
          <LatestProjectTitle>Latest Project</LatestProjectTitle>
          <Project style={{borderTopLeftRadius:'0px', borderTopRightRadius:'0px'}} project={portfolioData[0]} />
      </LatestProjectDiv>
    </ContentDiv>
  )
};

export default Home;
