import React, { Component } from 'react';
import styled from 'styled-components';

const StatusStyledDiv = styled.div`
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
    -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
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
      -webkit-box-shadow: none;
      border: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const StatusBoard = props => (
  <StatusStyledDiv>
    <h1>{props.bannerText}</h1>
    <h2>Round: <span>{props.round}</span>&nbsp;&nbsp;</h2>
    <h2>Speed: <span>{(props.speed === 700) ? 'Slow' : 'Fast'}</span>&nbsp;&nbsp;</h2>
    <h2>Strict Mode: <span>{(props.strict) ? 'On' : 'Off'}</span>&nbsp;&nbsp;</h2>

    <div className='status-board__buttons'>
      <button
        onClick={() => props.handleStart()}
        disabled={props.startDisabled}
        style={ {
          backgroundColor: props.startDisabled ? '#cccccc' : '#fffafa',
          color: props.startDisabled ? '#808080' : '#25292e',
        } }>
        START
      </button>
      <button
        onClick={() => props.handleSpeed()}
        disabled={props.speedDisabled}
        style={ {
          backgroundColor: props.speedDisabled ? '#cccccc' : '#fffafa',
          color: props.speedDisabled ? '#808080' : '#25292e',
        } }>
        SPEED
      </button>
      <button
        onClick={() => props.handleStrict()}
        disabled={props.strictDisabled}
        style={ {
          backgroundColor: props.strictDisabled ? '#cccccc' : '#fffafa',
          color: props.strictDisabled ? '#808080' : '#25292e',
        } }>
        STRICT
      </button>
      <button
        onClick={() => props.handleReset()}
        disabled={props.resetDisabled}
        style={ {
          backgroundColor: props.resetDisabled ? '#cccccc' : '#fffafa',
          color: props.resetDisabled ? '#808080' : '#25292e',
        } }>
        RESET
      </button>
    </div>
  </StatusStyledDiv>
);

export default StatusBoard;
