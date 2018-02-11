import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 15px;

h1 {
	margin-bottom: 10px;
}

h2 {
	margin: 5px 0;
	display: inline-block;
}

span {
	color: #f24e02;
}

.buttons {
  margin-top: 15px;
}

button {
	width: 75px;
	margin: 0 10px 20px;
	padding: 10px 0;
	border-radius: 10px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
}
`;

class Status extends Component {
  render() {
    return (
      <StyledDiv>
        <h1>Ready To Play!</h1>
        <h2>Round: <span id='roundNumber'>1</span>&nbsp;&nbsp;</h2>
        <h2>Speed: <span id='speedStatus'>Slow</span>&nbsp;&nbsp;</h2>
        <h2>Strict Mode: <span id='strictStatus'>Off</span>&nbsp;&nbsp;</h2>

        <div className='buttons'>
          <button id='start'>START</button>
          <button id='speed'>SPEED</button>
          <button id='strict'>STRICT</button>
          <button id='reset'>RESET</button>
        </div>
      </StyledDiv>
    );
  }
}

export default Status;
