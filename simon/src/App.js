import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/header/header';
import GameBoard from './components/gameboard/gameboard';
import StatusBoard from './components/statusboard/statusboard';
import Footer from './components/footer/footer';

const AppStyledDiv = styled.div`
  max-width: 1100px;
  min-width: 600px;
  min-height: 600px;
  margin: 20px auto;
  padding: 15px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
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
      computerSequence: [],
      playerSequence: [],
      playAvailable: false,
      speedMode: 700,
      strictMode: false,
      startDisabled: false,
      speedDisabled: false,
      strictDisabled: false,
      resetDisabled: true,
      greenActive: false,
      redActive: false,
      yellowActive: false,
      blueActive: false,
      bannerText: 'Ready To Play!',
    };
  }

  addToSequence = () => {
    const temp = this.state.computerSequence;
    temp.push(Math.floor(Math.random() * 4));
    this.setState({ computerSequence: temp, }, () => this.executeComputerSequence());
  }

  handleStart = () => {
    this.setState({
      startDisabled: true,
      speedDisabled: true,
      strictDisabled: true,
      resetDisabled: false,
      bannerText: 'Playing...',
    });
    this.addToSequence();
  }

  handleSpeed = () => {
    let newSpeed;
    if (this.state.speedMode === 700) {
      newSpeed = 400;
    } else {
      newSpeed = 700;
    }
    this.setState({ speedMode: newSpeed, });
  }

  handleStrict = () => {
    const newStrict = (!this.state.strictMode);
    this.setState({ strictMode: newStrict, });
  }

  handleReset = () => {
    this.setState({
      round: 1,
      computerSequence: [],
      playerSequence: [],
      startDisabled: false,
      speedDisabled: false,
      strictDisabled: false,
      resetDisabled: true,
      playAvailable: false,
      bannerText: 'Ready To Play!'
    });
  }

  activateBoardButton = (color) => {
    this.setState({ [`${color}Active`]: true, }, () => setTimeout(() => {
      this.setState({ [`${color}Active`]: false, });
    }, 150));
  }

  playerTurn = () => {
    this.setState({ playAvailable: true, });
  }

  executeComputerSequence = () => {
    const ref = {
      0: 'green', 1: 'red', 2: 'yellow', 3: 'blue',
    };
    this.setState({ resetDisabled: true });
    this.state.computerSequence.forEach((val, index) => {
      const color = ref[val];
      const delay = this.state.speedMode * (index + 1);
      setTimeout(() => {
        this.activateBoardButton(color);
      }, delay);
    });
    setTimeout(() => {
      this.setState({ resetDisabled: false, });
      this.playerTurn();
    }, (this.state.computerSequence.length + 1) * this.state.speedMode);
  }

  replaySequence = () => {
    this.setState({ bannerText: 'Try The Sequence Again!' });
    setTimeout(() => {
      this.setState({ bannerText: 'Playing...' });
      this.executeComputerSequence();
    }, 1200);
  }

  loseGame = () => {
    this.setState({ bannerText: 'You Lose!! Try Again!!' });
    setTimeout(() => {
      this.handleReset();
    }, 3000);
  }

  winGame = () => {
    this.setState({ bannerText: 'You Win!! Play Again!!' });
    setTimeout(() => {
      this.handleReset();
    }, 3000);
  }

  compareSequence = () => {
    let correct = true;
    this.state.playerSequence.forEach((val, index) => {
      if (val !== this.state.computerSequence[index]) {
        correct = false;
      }
    });
    this.setState({ playerSequence: [], }, () => {
      if (correct && this.state.round < 20) {
        const newRound = this.state.round + 1;
        this.setState({ round: newRound, }, () => this.addToSequence());
      } else if (!correct && !this.state.strictMode) {
        this.replaySequence();
      } else if (!correct && this.state.strictMode) {
        this.loseGame();
      } else {
        this.winGame();
      }
    });
  }

  handleBoardClick = color => (event) => {
    event.preventDefault();
    const ref = {
      green: 0, red: 1, yellow: 2, blue: 3,
    };
    if (this.state.playAvailable) {
      this.activateBoardButton(color);
      const temp = [...this.state.playerSequence, ref[color]];
      this.setState({ playerSequence: temp, }, () => {
        if (this.state.playerSequence.length === this.state.round) {
          this.setState({ playAvailable: false, });
          this.compareSequence();
        }
      });
    }
  }

  render() {
    return (
      <AppStyledDiv>
        <Header />
        <GameBoard
          handleBoardClick={this.handleBoardClick}
          greenActive={this.state.greenActive}
          redActive={this.state.redActive}
          yellowActive={this.state.yellowActive}
          blueActive={this.state.blueActive}
          playAvailable={this.state.playAvailable}
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
          round={this.state.round}
          bannerText={this.state.bannerText}
        />
        <Footer />
      </AppStyledDiv>
    );
  }
}

export default App;
