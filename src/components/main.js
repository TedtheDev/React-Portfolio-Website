import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Content from './content';
import Content2 from './content_2';

const MainWrapper = styled.div`
  grid-area: app;
  background: #FFF;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    ". content ."
`

const Main = (props) => {
  return (
    <MainWrapper>
      <div style={{gridArea:"content"}}>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/content2" component={Content2} />
        </Switch>
      </div>
    </MainWrapper>
  )
}
export default Main;
