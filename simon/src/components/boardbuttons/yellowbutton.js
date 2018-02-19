import React from 'react';
import styled from 'styled-components';
import './boardbuttons.css';

const YellowStyledDiv = styled.div`
    display: inline-block;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 150px;
    margin-right: 2px;
    margin-top: 2px;
    padding-bottom: 150px;
    background-color: #cccc06;
    border-radius: 0 0 0 100%;
    &:hover {
      cursor: pointer;
    }
`;

const YellowButton = props => ( // renders yellow button
  <YellowStyledDiv
    onClick={props.handleBoardClick(props.color)} // invokes method held in logic container on click
    className={props.yellowActive ? 'yellowbutton--active' : null}> {/* dynamically handles class based on state */}
  </YellowStyledDiv>
);

export default YellowButton;
