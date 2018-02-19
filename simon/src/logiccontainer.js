import React, { Component } from 'react';
import App from './App';

class LogicContainer extends Component {
  state = {
    round: 1, // initial round number
    computerSequence: [], // empty array for game play sequence storage
    playerSequence: [], // empty array for player sequence storage
    playAvailable: false, // boolean for whether colored game buttons are clickable
    speedMode: 400, // default "fast" speed (slow = 700ms)
    strictMode: false, // boolean, default "off" for Strict Mode
    startDisabled: false, // boolean for start button disabled
    speedDisabled: false, // boolean for speed toggle button disabled
    strictDisabled: false, // boolean for strict toggle button disabled
    resetDisabled: true, // boolean for reset button disabled
    greenActive: false, // boolean for green button "active" ("lit" and shadowed)
    redActive: false, // boolean for red button "active"
    yellowActive: false, // boolean for yellow button "active"
    blueActive: false, // boolean for blue button "active"
    bannerText: 'Ready To Play!', // display of main status banner under game board
  };

  addToSequence = () => { // method that selects random num (0-3) for computer generated sequence
    const temp = this.state.computerSequence;
    temp.push(Math.floor(Math.random() * 4));
    // invokes computer play of sequence after generation of additional round
    this.setState({ computerSequence: temp, }, () => this.executeComputerSequence());
  }

  handleStart = () => { // sets state for initial game start
    this.setState({
      startDisabled: true, // disables start button
      speedDisabled: true, // disables speed toggle button
      strictDisabled: true, // disables strict toggle button
      resetDisabled: false, // enables reset button
      bannerText: 'Playing...',
    });
    this.addToSequence(); // invokes for initial play sequence of game
  }

  handleSpeed = () => { // handles player click of speed button to toggle between fast and slow
    let newSpeed;
    if (this.state.speedMode === 700) { // conditional toggles between fast (400) and slow (700)
      newSpeed = 400;
    } else {
      newSpeed = 700;
    }
    this.setState({ speedMode: newSpeed, });
  }

  handleStrict = () => { // handles player click of strict mode button
    const newStrict = (!this.state.strictMode); // toggles state
    this.setState({ strictMode: newStrict, });
  }

  handleReset = () => { // handles player click of reset button
    this.setState({ // resets state to necessary initial values, except for speed and strict modes
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

  activateBoardButton = (color) => { // "flashes" and shadows game buttons when clicked by player
    // uses color argument to dynamically change state of appropriate game button invoking method
    this.setState({ [`${color}Active`]: true, }, () => setTimeout(() => { // "resets" after 150ms
      this.setState({ [`${color}Active`]: false, });
    }, 150));
  }

  playerTurn = () => { // allows for colored game buttons to be clicked when player turn is on
    this.setState({ playAvailable: true, });
  }

  executeComputerSequence = () => { // plays back growing sequence generated by the computer
    const ref = { // reference that correlates button color to random number (0-3) assigned to button
      0: 'green', 1: 'red', 2: 'yellow', 3: 'blue',
    };
    this.setState({ resetDisabled: true }); // disables reset button during playback
    this.state.computerSequence.forEach((val, index) => { // iterates over sequence
      const color = ref[val]; // temporary variable for color of corresponding button in sequence
      const delay = this.state.speedMode * (index + 1); // increments playback duration based on round and speed
      setTimeout(() => { // sets timeout bases on delay
        this.activateBoardButton(color);
      }, delay);
    });
    setTimeout(() => { // sets timeout for end of playback sequence
      this.setState({ resetDisabled: false, }); // enables reset button
      this.playerTurn(); // invokes to toggle to player turn/play
    }, (this.state.computerSequence.length + 1) * this.state.speedMode); // time based on sequence length
  }

  replaySequence = () => { // allows replay of round outside strict mode
    this.setState({ bannerText: 'Try The Sequence Again!' }); // message to player
    setTimeout(() => { // sets 1.2 second delay on replay of round
      this.setState({ bannerText: 'Playing...' }); // message to player
      this.executeComputerSequence(); // invokes to replay the sequence
    }, 1200);
  }

  loseGame = () => { // handles player loss
    this.setState({ bannerText: 'You Lose!! Try Again!!' }); // message to player
    setTimeout(() => { // invokes reset after 3sec delay
      this.handleReset();
    }, 3000);
  }

  winGame = () => { // handles player win
    this.setState({ bannerText: 'You Win!! Play Again!!' }); // message to player
    setTimeout(() => { // invokes reset after 3sec delay
      this.handleReset();
    }, 3000);
  }

  compareSequence = () => { // compares player input to computer/expected sequence
    let correct = true; // temporary variable for tracking correct/incorrect comparison status
    this.state.playerSequence.forEach((val, index) => { // iterates over player input
      if (val !== this.state.computerSequence[index]) {
        correct = false; // if it doesn't match computer sequence, sets status to false
      }
    });
    this.setState({ playerSequence: [], }, () => { // resets player input array for next round
      if (correct && this.state.round < 20) { // if comparison correct and game under 20 rounds (end)
        const newRound = this.state.round + 1; // temporary variable to increment round
        this.setState({ round: newRound, }, () => this.addToSequence()); // invokes new round
      } else if (!correct && !this.state.strictMode) { // if incorrect and strict mode off
        this.replaySequence(); // replay round
      } else if (!correct && this.state.strictMode) { // if incorrect and strict mode on
        this.loseGame(); // player loses
      } else { // if correct and round is 20 (end)
        this.winGame(); // player wins
      }
    });
  }

  handleBoardClick = color => (event) => { // handles click of game board by player, sent color of button
    event.preventDefault(); // prevent page reload
    const ref = { // reference relating color and number assignment of buttons
      green: 0, red: 1, yellow: 2, blue: 3,
    };
    if (this.state.playAvailable) { // if board is enabled
      this.activateBoardButton(color); // invokes to "flash" button
      const temp = [...this.state.playerSequence, ref[color]]; // spread syntax to prevent mutation
      this.setState({ playerSequence: temp, }, () => { // sets state adding latest button click of player sequence
        if (this.state.playerSequence.length === this.state.round) { // check if total number of clicks is reached
          this.setState({ playAvailable: false, }); // disables board
          this.compareSequence(); // invokes comparison
        }
      });
    }
  }

  render() { // render main presentational component, passing all props needed
    return (
      <div>
        <App
          handleBoardClick={this.handleBoardClick}
          greenActive={this.state.greenActive}
          redActive={this.state.redActive}
          yellowActive={this.state.yellowActive}
          blueActive={this.state.blueActive}
          playAvailable={this.state.playAvailable}
          handleStart={this.handleStart}
          handleSpeed={this.handleSpeed}
          handleStrict={this.handleStrict}
          handleReset={this.handleReset}
          startDisabled={this.state.startDisabled}
          speedDisabled={this.state.speedDisabled}
          strictDisabled={this.state.strictDisabled}
          resetDisabled={this.state.resetDisabled}
          speedMode={this.state.speedMode}
          strictMode={this.state.strictMode}
          round={this.state.round}
          bannerText={this.state.bannerText}
        />
      </div>
    );
  }
}

export default LogicContainer;
