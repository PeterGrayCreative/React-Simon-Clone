import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 15px;
  letter-spacing: 1px;

h1 {
  margin-bottom: 10px;
}

h2 {
  margin: 5px 0;
  display: inline-block;
}

span {
  color: #cc0606;
}

.status-board__buttons {
  margin-top: 15px;
}

button {
  width: 75px;
  margin: 0 10px 20px;
  padding: 10px 0 7px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3); 
  background-color: #fffafa;
  letter-spacing: 1px;   
  font-family: Orbitron, sans-serif;
  font-weight: 600;
  color: #25292e;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
  &:active {
    box-shadow: none;
    border: none;
  }
}
`;

class StatusBoard extends Component {
  render() {
    return (
      <StyledDiv>
        <h1>Ready To Play!</h1>
        <h2>Round: <span>1</span>&nbsp;&nbsp;</h2>
        <h2>Speed: <span>Slow</span>&nbsp;&nbsp;</h2>
        <h2>Strict Mode: <span>Off</span>&nbsp;&nbsp;</h2>

        <div className='status-board__buttons'>
          <button
            onClick={() => this.props.handleStart()}
            disabled={this.props.startDisabled}
            style={ {
              backgroundColor: this.props.startDisabled ? '#cccccc' : '#fffafa',
              color: this.props.startDisabled ? '#808080' : '#25292e',
            } }>
            START
          </button>
          <button
            onClick={() => this.props.handleSpeed()}
            disabled={this.props.speedDisabled}
            style={ {
              backgroundColor: this.props.speedDisabled ? '#cccccc' : '#fffafa',
              color: this.props.speedDisabled ? '#808080' : '#25292e',
            } }>
            SPEED
          </button>
          <button
            onClick={() => this.props.handleStrict()}
            disabled={this.props.strictDisabled}
            style={ {
              backgroundColor: this.props.strictDisabled ? '#cccccc' : '#fffafa',
              color: this.props.strictDisabled ? '#808080' : '#25292e',
            } }>
            STRICT
          </button>
          <button
            onClick={() => this.props.handleReset()}
            disabled={this.props.resetDisabled}
            style={ {
              backgroundColor: this.props.resetDisabled ? '#cccccc' : '#fffafa',
              color: this.props.resetDisabled ? '#808080' : '#25292e',
            } }>
            RESET
          </button>
        </div>
      </StyledDiv>
    );
  }
}

export default StatusBoard;
