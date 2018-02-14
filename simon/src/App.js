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
  /* background-color: #aaafba; */
  background-color: #808080;
  box-sizing: border-box;
  user-select: none;
  border-radius: 4px;
  text-align: center;
  font-family: Orbitron, sans-serif;
  color: #25292e;
`;

class App extends Component {
  state = {
    round: 1,
    colorActive: false,
    playList: [],
    userClicks: [],
  }

  random = () => {
    const temp = this.state.playList;
    temp.push(Math.floor(Math.random() * 4));
    this.setState({ playlist: temp }, () => console.log(this.state.playList));
  }

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
  componentDidMount() {
    this.random();
  }
}

export default App;
