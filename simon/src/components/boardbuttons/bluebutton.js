import React, { Component } from 'react';
import styled from 'styled-components';
import './boardbuttons.css';

const BlueStyledDiv = styled.div`
    display: inline-block;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 150px;
    margin-left: 2px;
    padding-bottom: 150px;
    background-color: #060b9b;
    border-radius: 0 0 100% 0;
    &:hover {
      cursor: pointer;
    }
`;

const BlueButton = props => (
  <BlueStyledDiv onClick={props.handleBoardClick(props.color)}
    className={props.blueActive ? 'bluebutton--active' : null}>
  </BlueStyledDiv>
);

export default BlueButton;
