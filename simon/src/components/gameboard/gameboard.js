import React, { Component } from 'react';
import styled from 'styled-components';
import GreenButton from '../boardbuttons/greenbutton';
import RedButton from '../boardbuttons/redbutton';
import YellowButton from '../boardbuttons/yellowbutton';
import BlueButton from '../boardbuttons/bluebutton';

const StyledDiv = styled.div`
  width: 342px;
  height: 342px;
  margin: 20px auto;
  background-color: #2a2a2a;
  border-radius: 100%;
  box-shadow: 3px 3px 5px #2a2a2a, inset -2px -2px 2px #696969, inset 2px 2px 2px #696969;
`;

class GameBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledDiv>
        <GreenButton handleClick={this.props.handleClick} />
        <RedButton handleClick={this.props.handleClick} />
        <YellowButton handleClick={this.props.handleClick} />
        <BlueButton handleClick={this.props.handleClick} />
      </StyledDiv>
    );
  }
}

export default GameBoard;
