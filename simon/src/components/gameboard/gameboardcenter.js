import React from 'react';
import styled from 'styled-components';

const CenterStyledDiv = styled.div`
  position: relative;
  bottom: 242px;
  left: 85px;
  height: 175px;
  width: 175px;
  margin: 0;
  border-radius: 100%;
  background-color: #2a2a2a;
  color: #fffafa;
  @media (max-width: 600px) {
    bottom: 196px;
    left: 68px;
    height: 140px;
    width: 140px;      
  }
  h1 {
    position: relative;
    margin: 0;
    padding-top: 35%;
    font-size: 3.5em;
    @media (max-width: 600px) {
      font-size: 2.8em;
    }
  }
`;

const GameBoardCenter = () => ( // renders gameboard center
  <CenterStyledDiv>
    <h1>Simon</h1>
  </CenterStyledDiv>
);

export default GameBoardCenter;
