import React, { Component } from 'react';
import styled from 'styled-components';
import './boardbuttons.css';

const StyledDiv = styled.div`
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

class BlueButton extends Component {
  render() {
    return (
      <StyledDiv onClick={this.props.handleBoardClick(this.props.color)}
        className={this.props.blueActive ? 'bluebutton--active' : null}
        className={this.props.playAvailable ? null : 'boardbuttons--inactive'}>
      </StyledDiv>
    );
  }
}

export default BlueButton;
