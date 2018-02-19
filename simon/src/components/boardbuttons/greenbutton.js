import React from 'react';
import styled from 'styled-components';
import './boardbuttons.css';

const GreenStyledDiv = styled.div`
  display: inline-block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 150px;
  margin-top: 18px;
  margin-right: 2px;
  padding-bottom: 150px;
  background-color: #12990d;
  border-radius: 100% 0 0 0;
  &:hover {
    cursor: pointer;
  }
`;

const GreenButton = props => ( // renders green button
  <GreenStyledDiv
    onClick={props.handleBoardClick(props.color)} // invokes method held in logic container on click
    className={props.greenActive ? 'greenbutton--active' : null}> {/* dynamically handles class based on state */}
  </GreenStyledDiv>
);

export default GreenButton;
