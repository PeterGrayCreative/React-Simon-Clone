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
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background-color: #808080;
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
      playList: [1, 2, 3, 2, 1, 0, 0],
      userClicks: [],
      gameRunning: false,
      strictMode: false,
      speedMode: 700,
      greenActive: false,
      redActive: false,
      yellowActive: false,
      blueActive: false,
      startDisabled: false,
      speedDisabled: false,
      strictDisabled: false,
      resetDisabled: true,
      playAvailable: false,
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
      playAvailable: true,
    });
  }

  handleSpeed = () => {
    let newSpeed;
    if (this.state.speedMode === 700) {
      newSpeed = 400;
    } else {
      newSpeed = 700;
    }
    this.setState({ speedMode: newSpeed });
  }

  handleStrict = () => {
    const newStrict = (!this.state.strictMode);
    this.setState({ strictMode: newStrict });
  }

  handleReset = () => {
    this.setState({
      round: 1,
      playList: [],
      userClicks: [],
      gameRunning: false,
      startDisabled: false,
      speedDisabled: false,
      strictDisabled: false,
      resetDisabled: true,
      playAvailable: false,
    });
  }


  handleClick = color => (event) => {
    event.preventDefault();
    const ref = {
      green: 0, red: 1, yellow: 2, blue: 3,
    };
    if (this.state.playAvailable) {
      this.activateButton(color);
      const temp = [...this.state.userClicks, ref[color]];
      this.setState({ userClicks: temp }, () => console.log(this.state));
    }
  }

  activateButton = (color) => {
    this.setState({ [`${color}Active`]: true }, () => setTimeout(() => {
      this.setState({ [`${color}Active`]: false, });
    }, 150));
  }

  execute = () => {
    const ref = {
      0: 'green', 1: 'red', 2: 'yellow', 3: 'blue',
    };
    this.setState({ playAvailable: false });
    this.state.playList.forEach((val, index) => {
      const color = ref[val];
      const delay = this.state.speedMode * (index + 1);
      setTimeout(() => {
        this.activateButton(color);
      }, delay);
    });
    setTimeout(() => {
      this.setState({ playAvailable: true });
    }, (this.state.playList.length + 1) * this.state.speedMode);
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
          handleSpeed={this.handleSpeed}
          handleStrict={this.handleStrict}
          handleReset={this.handleReset}
          startDisabled={this.state.startDisabled}
          speedDisabled={this.state.speedDisabled}
          strictDisabled={this.state.strictDisabled}
          resetDisabled={this.state.resetDisabled}
          speed={this.state.speedMode}
          strict={this.state.strictMode}
        />
        <Footer />
      </StyledDiv>
    );
  }
}

export default App;
