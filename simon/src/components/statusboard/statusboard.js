import React from 'react';
import styled from 'styled-components';
import StatusBoardButton from '../statusboardbuttons/statusboardbutton';

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
`;

const StatusBoard = props => (
  <StatusStyledDiv>
    <h1>{props.bannerText}</h1>
    <h2>Round: <span>{props.round}</span>&nbsp;&nbsp;</h2>
    <h2>Speed: <span>{(props.speedMode === 700) ? 'Slow' : 'Fast'}</span>&nbsp;&nbsp;</h2>
    <h2>Strict Mode: <span>{(props.strictMode) ? 'On' : 'Off'}</span>&nbsp;&nbsp;</h2>

    <div className='status-board__buttons'>
      <StatusBoardButton
        clickAction={props.handleStart}
        disabledStatus={props.startDisabled}
        style={ {
          backgroundColor: props.startDisabled ? '#cccccc' : '#fffafa',
          color: props.startDisabled ? '#808080' : '#25292e',
        } }
        buttonTitle='START'>
      </StatusBoardButton>
      <StatusBoardButton
        clickAction={props.handleSpeed}
        disabledStatus={props.speedDisabled}
        style={ {
          backgroundColor: props.speedDisabled ? '#cccccc' : '#fffafa',
          color: props.speedDisabled ? '#808080' : '#25292e',
        } }
        buttonTitle='SPEED'>
      </StatusBoardButton>
      <StatusBoardButton
        clickAction={props.handleStrict}
        disabledStatus={props.strictDisabled}
        style={ {
          backgroundColor: props.strictDisabled ? '#cccccc' : '#fffafa',
          color: props.strictDisabled ? '#808080' : '#25292e',
        } }
        buttonTitle='STRICT'>
      </StatusBoardButton>
      <StatusBoardButton
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
