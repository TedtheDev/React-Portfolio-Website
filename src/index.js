import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import HamburgerMenuSlider from './components/hamburger_menu_slider';

const AppStyled = styled.div`
  background: #fcfeff;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 80% 1fr;
  grid-template-areas:
    "header"
    "app"
    "footer";
`;

class App extends Component {
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
        <div style={{width:"100%",height:"100%"}}>
          <HamburgerMenuSlider toggleSlider={this.toggleSlider} sliderOpen={this.state.sliderOpen}/>
          <AppStyled>
            <Header toggleSlider={this.toggleSlider} sliderOpen={this.state.sliderOpen} />
            <Main />
            <Footer />
          </AppStyled>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.app')
)
