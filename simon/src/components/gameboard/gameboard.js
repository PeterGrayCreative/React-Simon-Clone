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

class GameBoard extends Component {
  render() {
    return (
      <BoardStyledDiv>
        <GreenButton
          color='green'
          handleBoardClick={this.props.handleBoardClick}
          greenActive={this.props.greenActive}
          playAvailable={this.props.playAvailable}
        />
        <RedButton
          color='red'
          handleBoardClick={this.props.handleBoardClick}
          redActive={this.props.redActive}
          playAvailable={this.props.playAvailable}
        />
        <YellowButton
          color='yellow'
          handleBoardClick={this.props.handleBoardClick}
          yellowActive={this.props.yellowActive}
          playAvailable={this.props.playAvailable}
        />
        <BlueButton
          color='blue'
          handleBoardClick={this.props.handleBoardClick}
          blueActive={this.props.blueActive}
          playAvailable={this.props.playAvailable}
        />
      </BoardStyledDiv>
    );
  }
}

export default GameBoard;
