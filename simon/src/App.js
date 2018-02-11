import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/header/header';
import GameBoard from './components/gameboard/gameboard';
import Status from './components/status/status';
import Footer from './components/footer/footer'

const StyledDiv = styled.div`
  max-width: 1100px;
  min-width: 600px;
  height: 600px;
  background-color: #aaafba;
  box-sizing: border-box;
  user-select: none;
  text-align: center;
  font-family: Roboto, sans-serif;
`;

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <h1>Simon Clone</h1>
        <Header />
        <GameBoard />
        <Status />
        <Footer />
      </StyledDiv>
    );
  }
}

export default App;
