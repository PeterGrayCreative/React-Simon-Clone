import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/header/header';
import GameBoard from './components/gameboard/gameboard';
import StatusBoard from './components/statusboard/statusboard';
import Footer from './components/footer/footer';

const StyledDiv = styled.div`
  max-width: 1100px;
  min-width: 600px;
  min-height: 600px;
  margin: 20px auto;
  padding: 15px;
  background-color: #aaafba;
  box-sizing: border-box;
  user-select: none;
  border-radius: 3px;
  text-align: center;
  font-family: Orbitron, sans-serif;
  color: #25292e;
`;

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <Header />
        <GameBoard />
        <StatusBoard />
        <Footer />
      </StyledDiv>
    );
  }
}

export default App;
