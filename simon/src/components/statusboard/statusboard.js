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
  color: #cc0606;
}

.status-board__buttons {
  margin-top: 15px;
}

button {
  width: 75px;
  margin: 0 10px 20px;
  padding: 10px 0 7px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);  
  font-family: Orbitron, sans-serif;
  font-weight: 600;
  color: #25292e;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
}
`;

class StatusBoard extends Component {
  render() {
    return (
      <StyledDiv>
        <h1>Ready To Play!</h1>
        <h2>Round: <span>1</span>&nbsp;&nbsp;</h2>
        <h2>Speed: <span>Slow</span>&nbsp;&nbsp;</h2>
        <h2>Strict Mode: <span>Off</span>&nbsp;&nbsp;</h2>

        <div className='status-board__buttons'>
          <button>START</button>
          <button>SPEED</button>
          <button>STRICT</button>
          <button>RESET</button>
        </div>
      </StyledDiv>
    );
  }
}

export default StatusBoard;
