import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonStyledDiv = styled.div`
  display: inline-block;
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

const StatusBoardButton = props => (
  <ButtonStyledDiv>
    <button
      onClick={() => props.clickAction()}
      disabled={props.disabledStatus}
      style={ props.style }>
      {props.buttonTitle}
    </button>
  </ButtonStyledDiv>
);

export default StatusBoardButton;
