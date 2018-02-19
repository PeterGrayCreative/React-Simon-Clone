import React from 'react';
import styled from 'styled-components';
import StatusBoardButton from '../statusboardbuttons/statusboardbutton';

const StatusStyledDiv = styled.div`
  margin-top: 16px;
  letter-spacing: 1px;
  h1 {
    margin-bottom: 10px;
    font-size: 3.25em;
  }
  h2 {
    margin: 5px 0;
    display: inline-block;
    font-size: 2.4em;
  }
  span {
    color: #cc0606; /* handles red text of dynamic status output in app */
  }
  .status-board__buttons {
    margin-top: 15px;
  }
`;

const StatusBoard = props => (
  <StatusStyledDiv>
    <h1>{props.bannerText}</h1> {/* dynamic banner/status text based on state */}
    <h2>Round: <span>{props.round}</span>&nbsp;&nbsp;</h2> {/* Displays round number */}
    <h2>Speed: <span>{(props.speedMode === 700) ? 'Slow' : 'Fast'}</span>&nbsp;&nbsp;</h2> {/* Displays speed fast/slow */}
    <h2>Strict Mode: <span>{(props.strictMode) ? 'On' : 'Off'}</span>&nbsp;&nbsp;</h2> {/* Displays strict mode on/off */}

    <div className='status-board__buttons'>
      <StatusBoardButton // START button
        clickAction={props.handleStart} // invokes method held in logic container on click
        disabledStatus={props.startDisabled}
        style={ { // passes prop/style object that changes background color and text color to grays when disabled
          // ternary based on startDisabled state
          backgroundColor: props.startDisabled ? '#cccccc' : '#fffafa',
          color: props.startDisabled ? '#808080' : '#25292e',
        } }
        buttonTitle='START'>
      </StatusBoardButton>
      <StatusBoardButton // SPEED mode BUTTON
        clickAction={props.handleSpeed}
        disabledStatus={props.speedDisabled}
        style={ {
          backgroundColor: props.speedDisabled ? '#cccccc' : '#fffafa',
          color: props.speedDisabled ? '#808080' : '#25292e',
        } }
        buttonTitle='SPEED'>
      </StatusBoardButton>
      <StatusBoardButton // STRICT mode button
        clickAction={props.handleStrict}
        disabledStatus={props.strictDisabled}
        style={ {
          backgroundColor: props.strictDisabled ? '#cccccc' : '#fffafa',
          color: props.strictDisabled ? '#808080' : '#25292e',
        } }
        buttonTitle='STRICT'>
      </StatusBoardButton>
      <StatusBoardButton // RESET button
        clickAction={props.handleReset}
        disabledStatus={props.resetDisabled}
        style={ {
          backgroundColor: props.resetDisabled ? '#cccccc' : '#fffafa',
          color: props.resetDisabled ? '#808080' : '#25292e',
        } }
        buttonTitle='RESET'>
      </StatusBoardButton>
    </div>
  </StatusStyledDiv>
);

export default StatusBoard;
