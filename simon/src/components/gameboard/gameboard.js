import React from 'react';
import styled from 'styled-components';
import GreenButton from '../boardbuttons/greenbutton';
import RedButton from '../boardbuttons/redbutton';
import YellowButton from '../boardbuttons/yellowbutton';
import BlueButton from '../boardbuttons/bluebutton';

const BoardStyledDiv = styled.div`
  /* position: relative; */
  width: 342px;
  height: 342px;
  margin: 20px auto;
  background-color: #2a2a2a;
  border-radius: 100%;
  box-shadow: 3px 3px 5px #2a2a2a, inset -2px -2px 2px #696969, inset 2px 2px 2px #696969;
  -webkit-box-shadow: 3px 3px 5px #2a2a2a, inset -2px -2px 2px #696969, inset 2px 2px 2px #696969;
  @media (max-width: 600px) { /* reduces size of game board */
    width: 274px;
    height: 274px;
  }
  .gameboard__center {
    position: relative;
    bottom: 242px;
    left: 85px;
    height: 175px;
    width: 175px;
    border-radius: 100%;
    background-color: #2a2a2a;
    @media (max-width: 600px) {
      bottom: 196px;
      left: 68px;
      height: 140px;
      width: 140px;      
    }
    
  }
`;

const GameBoard = props => ( // renders game board
  <BoardStyledDiv>
    <GreenButton // green play button
      color='green' // passes color as prop
      handleBoardClick={props.handleBoardClick} // passes method as prop
      greenActive={props.greenActive} // passes active status as prop
      playAvailable={props.playAvailable} // passes button availability as prop
    />
    <RedButton
      color='red' // red play button
      handleBoardClick={props.handleBoardClick}
      redActive={props.redActive}
      playAvailable={props.playAvailable}
    />
    <YellowButton
      color='yellow' // yellow play button
      handleBoardClick={props.handleBoardClick}
      yellowActive={props.yellowActive}
      playAvailable={props.playAvailable}
    />
    <BlueButton
      color='blue' // blue play button
      handleBoardClick={props.handleBoardClick}
      blueActive={props.blueActive}
      playAvailable={props.playAvailable}
    />
    <div className='gameboard__center'>
    </div>
  </BoardStyledDiv>
);

export default GameBoard;
