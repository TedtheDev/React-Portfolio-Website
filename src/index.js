import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import BlogWrapper from './pages/BlogWrapper';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/footer';
import HamburgerMenuSlider from './components/HamburgerMenuSlider';

const AppStyled = styled.div`
  background: #fcfeff;
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  grid-template-rows: 10% auto 10%;
  grid-template-areas:
    "header header header"
    ". app ."
    "footer footer footer";
`;

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {sliderOpen: false};

    this.toggleSlider = this.toggleSlider.bind(this);
  }

  toggleSlider() {
    const isOpen = (this.state.sliderOpen) ? false : true;
    this.setState({sliderOpen: isOpen})
  }

  render() {
    return (
      <Router>
        <AppStyled>
          <HamburgerMenuSlider toggleSlider={this.toggleSlider} sliderOpen={this.state.sliderOpen}/>
          <Header toggleSlider={this.toggleSlider} sliderOpen={this.state.sliderOpen} />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/blog" component={BlogWrapper} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </AppStyled>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.app')
)
