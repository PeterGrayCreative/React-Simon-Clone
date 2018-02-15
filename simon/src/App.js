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
  background-color: #808080;
  box-sizing: border-box;
  user-select: none;
  border-radius: 4px;
  text-align: center;
  font-family: Orbitron, sans-serif;
  color: #25292e;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      playList: [],
      userClicks: [],
      timing: 700,
      greenActive: false,
      redActive: false,
      yellowActive: false,
      blueActive: false,
      startDisabled: false,
      speedDisabled: false,
      strictDisabled: false,
      resetDisabled: true,
    };
  }

  random = () => {
    const temp = this.state.playList;
    temp.push(Math.floor(Math.random() * 4));
    this.setState({ playList: temp }, () => this.execute());
  }

  handleStart = () => {
    this.random();
    this.setState({
      startDisabled: true,
      speedDisabled: true,
      strictDisabled: true,
      resetDisabled: false,
    });
  }

  handleClick = color => (event) => {
    event.preventDefault();
    const ref = {
      green: 0, red: 1, yellow: 2, blue: 3,
    };
    const temp = [...this.state.userClicks, ref[color]];
    this.setState({ [`${color}Active`]: true }, () => setTimeout(() => {
      this.setState({
        [`${color}Active`]: false,
        userClicks: temp,
      });
    }, 150));
  }

  execute = () => {
    console.log('executing');
    console.log(this.state);
    // this.state.playList.forEach(val => {
    //   setTimeout(function() {
    //     fire(ref[playList[i]][0], ref[playList[i]][1]);
    //   }, this.state.timing);
    //     setTimeout(function() {
    //       colorsActive = true;
    //     }, this.state.timing + 700);
    //  }
  }

  render() {
    return (
      <StyledDiv>
        <Header />
        <GameBoard
          handleClick={this.handleClick}
          greenActive={this.state.greenActive}
          redActive={this.state.redActive}
          yellowActive={this.state.yellowActive}
          blueActive={this.state.blueActive}
        />
        <StatusBoard
          handleStart={this.handleStart}
          startDisabled={this.state.startDisabled}
          speedDisabled={this.state.speedDisabled}
          strictDisabled={this.state.strictDisabled}
          resetDisabled={this.state.resetDisabled}
        />
        <Footer />
      </StyledDiv>
    );
  }
  componentDidMount() {

  }
}

export default App;
