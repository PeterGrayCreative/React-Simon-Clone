import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	width: 342px;
	height: 342px;
	margin: 20px auto;
	background-color: #2a2a2a;
  border-radius: 100%;

  .quarterCircles {
	  display: inline-block;
	  width: 150px;
    padding-bottom: 150px;
    &:hover: {
      cursor: pointer;
    }
  }

  .green {
    background-color: #12990d;
    margin-top: 18px;
    margin-right: 5px;
    border-radius: 100% 0 0 0;
  }

  .red {
    background-color: #cc0606;
    margin-top: 18px;
    border-radius: 0 100% 0 0;
  }

  .yellow {
    background-color: #cccc06;
    margin-right: 5px;    
    border-radius: 0 0 0 100%;
  }

  .blue {
    background-color: #060b9b;
    border-radius: 0 0 100% 0;
  }
`;

class GameBoard extends Component {
  render() {
    return (
      <StyledDiv>
        <div className='green quarterCircles'></div>
        <div className='red quarterCircles'></div>
        <div className='yellow quarterCircles'></div>
        <div className='blue quarterCircles'></div>
      </StyledDiv>
    );
  }
}

export default GameBoard;
