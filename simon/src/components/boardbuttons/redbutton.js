import React, { Component } from 'react';
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
`;

const RedButton = props => (
  <RedStyledDiv
    onClick={props.handleBoardClick(props.color)}
    className={props.redActive ? 'redbutton--active' : null}>
  </RedStyledDiv>
);

export default RedButton;
