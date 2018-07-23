import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
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
  width: 100%;
  height: 100%;
  background-image: ${props => props.theme.first.bgLinGrad};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: grid;
  grid-template-rows: 10% auto 10%;
  grid-template-columns: 10% 1fr 10%;
  grid-template-areas:
    "header header header"
    ". app ."
    "footer footer footer";
  color: #FFF3B0;
`;

const theme = {
  first: {
    blue: 'rgba(51, 92, 103)',
    white: 'rgba(255, 243, 176)',
    bgLinGrad: 'linear-gradient(80deg, rgba(255, 243, 176) 5%, rgba(51, 92, 103) 5%, rgba(51, 92, 103) 95%, rgba(255, 243, 176) 95%)'
  },
  second: {
    blue: 'rgba(39, 40, 56)',
    white: 'rgba(243, 222, 138)',
    bgLinGrad: 'linear-gradient(80deg, rgba(243, 222, 138) 5%, rgba(39, 40, 56) 5%, rgba(39, 40, 56) 95%, rgba(243, 222, 138) 95%)'
  },


}
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
      <ThemeProvider theme={theme}>
        <Router>
          <AppStyled>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/blog" component={BlogWrapper} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
          </AppStyled>
        </Router>
      </ThemeProvider>
      
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.app')
)
