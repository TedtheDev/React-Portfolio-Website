import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Content from './content';
import Blog from './blog';
import Resume from './resume';
import Contact from './contact';
import Portfolio from './portfolio';

const MainWrapper = styled.div`
  grid-area: app;
  background: #FFF;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    ". content ."
`;

const Main = (props) => {
  return (
    <MainWrapper>
      <div style={{gridArea:"content"}}>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </MainWrapper>
  )
}
export default Main;
