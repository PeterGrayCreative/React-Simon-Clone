import React from 'react';
import styled from 'styled-components';
import './boardbuttons.css';

const RedStyledDiv = styled.div`
  display: inline-block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 150px;
  margin-top: 18px;
  margin-left: 2px;    
  padding-bottom: 150px;
  background-color: #cc0606;
  border-radius: 0 100% 0 0;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) { /* reduces size of game board */
      width: 120px;
      margin-top: 14px;
      padding-bottom: 120px;
    }
`;

const RedButton = props => ( // renders red button
  <RedStyledDiv
    onClick={props.handleBoardClick(props.color)} // invokes method in logic container on click
    className={props.redActive ? 'redbutton--active' : null}> {/* dynamically handles class based on state */}
  </RedStyledDiv>
);

export default RedButton;
