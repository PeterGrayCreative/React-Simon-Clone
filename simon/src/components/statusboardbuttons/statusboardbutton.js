import React from 'react';
import styled from 'styled-components';

const ButtonStyledDiv = styled.div`
  display: inline-block;
  button {
    width: 75px;
    margin: 0 10px 20px;
    padding: 10px 0 7px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    background-color: #fffafa;
    letter-spacing: 1px;   
    font-family: Orbitron, sans-serif;
    font-weight: 600;
    color: #25292e;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
  &:active {
    box-shadow: none;
    -webkit-box-shadow: none;
    border: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
}
`;

const StatusBoardButton = props => ( // renders individual buttons
  <ButtonStyledDiv>
    <button
      onClick={() => props.clickAction()} // assigns method to handle click
      disabled={props.disabledStatus} // disabled attribute status of button
      style={ props.style }> {/* style based on passed object */}
      {props.buttonTitle /* button title text */}
    </button>
  </ButtonStyledDiv>
);

export default StatusBoardButton;
