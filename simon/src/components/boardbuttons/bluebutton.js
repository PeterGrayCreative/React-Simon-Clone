import React from 'react';
// import Sound from 'react-sound';
import styled from 'styled-components';
import './boardbuttons.css';

const BlueStyledDiv = styled.div`
  position: relative;
  display: inline-block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 150px;
  margin-left: 2px;
  margin-top: 2px;
  padding-bottom: 150px;
  background-color: #060b9b;
  border-radius: 0 0 100% 0;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) { /* reduces size of game board */
    width: 120px;
    padding-bottom: 120px;
  }
`;

const BlueButton = props => ( // renders green button
  <BlueStyledDiv onClick={props.handleBoardClick(props.color)} // invokes method in logic container on click
    className={props.blueActive ? 'bluebutton--active' : null}> {/* dynamically handles class based on state */}
    {/* <Sound
      url='../../sounds/simon3.mp3'
      playStatus={props.blueActive ? Sound.status.PLAYING : Sound.status.STOPPED}
    /> */}
  </BlueStyledDiv>
);

export default BlueButton;
