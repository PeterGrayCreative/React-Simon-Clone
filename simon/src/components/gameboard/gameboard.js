import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 342px;
  height: 342px;
  margin: 20px auto;
  background-color: #2a2a2a;
  border-radius: 100%;
  box-shadow: 3px 3px 5px #2a2a2a, inset -2px -2px 2px #696969, inset 2px 2px 2px #696969;

  .button {
    display: inline-block;
    width: 150px;
    padding-bottom: 150px;
    &:hover {
      cursor: pointer;
    }
  }

  .button--green {
    background-color: #12990d;
    margin-top: 18px;
    margin-right: 2px;
    border-radius: 100% 0 0 0;
    &:active {
      box-shadow: inset 6px 6px 10px #2a2a2a;
      background-color: #89ff94;
    }
  }

  .button--red {
    background-color: #cc0606;
    margin-top: 18px;
    margin-left: 2px;    
    border-radius: 0 100% 0 0;
    &:active {
      box-shadow: inset -6px 6px 10px #2a2a2a;
      background-color: #ed8782;
    }
  }

  .button--yellow {
    background-color: #cccc06;
    margin-right: 2px;   
    border-radius: 0 0 0 100%;
    &:active {
      box-shadow: inset 6px -6px 10px #2a2a2a;
      background-color: #fbff89;
    }
  }

  .button--blue {
    background-color: #060b9b;
    border-radius: 0 0 100% 0;
    margin-left: 2px;
    &:active {
      box-shadow: inset -6px -6px 10px #2a2a2a;
      background-color: #89c9ff;
    }
  }
`;

class GameBoard extends Component {
  render() {
    return (
      <StyledDiv>
        <div className='button button--green'></div>
        <div className='button button--red'></div>
        <div className='button button--yellow'></div>
        <div className='button button--blue'></div>
      </StyledDiv>
    );
  }
}

export default GameBoard;
