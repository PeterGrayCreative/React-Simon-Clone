import React, { Component } from 'react';
import styled from 'styled-components';
import GreenButton from '../boardbuttons/greenbutton';
import RedButton from '../boardbuttons/redbutton';
import YellowButton from '../boardbuttons/yellowbutton';
import BlueButton from '../boardbuttons/bluebutton';

const BoardStyledDiv = styled.div`
  width: 342px;
  height: 342px;
  margin: 20px auto;
  background-color: #2a2a2a;
  border-radius: 100%;
  box-shadow: 3px 3px 5px #2a2a2a, inset -2px -2px 2px #696969, inset 2px 2px 2px #696969;
  -webkit-box-shadow: 3px 3px 5px #2a2a2a, inset -2px -2px 2px #696969, inset 2px 2px 2px #696969;
`;

const GameBoard = props => (
  <BoardStyledDiv>
    <GreenButton
      color='green'
      handleBoardClick={props.handleBoardClick}
      greenActive={props.greenActive}
      playAvailable={props.playAvailable}
    />
    <RedButton
      color='red'
      handleBoardClick={props.handleBoardClick}
      redActive={props.redActive}
      playAvailable={props.playAvailable}
    />
    <YellowButton
      color='yellow'
      handleBoardClick={props.handleBoardClick}
      yellowActive={props.yellowActive}
      playAvailable={props.playAvailable}
    />
    <BlueButton
      color='blue'
      handleBoardClick={props.handleBoardClick}
      blueActive={props.blueActive}
      playAvailable={props.playAvailable}
    />
  </BoardStyledDiv>
);

export default GameBoard;
