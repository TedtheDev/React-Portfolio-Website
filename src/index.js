import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const AppStyled = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 9fr 1fr;
  grid-template-areas:
    "header header header"
    ". app ."
    "footer footer footer"
`
class App extends Component {
  render() {
    return (
      <AppStyled>
        Hello from App
      </AppStyled>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.app')
)
