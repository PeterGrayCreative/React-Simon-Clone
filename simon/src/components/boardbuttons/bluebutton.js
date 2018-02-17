import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    width: 150px;
    margin-left: 2px;
    padding-bottom: 150px;
    /* background-color: #060b9b; */
    border-radius: 0 0 100% 0;
    &:hover {
      cursor: pointer;
    }
    /* &:active {
      box-shadow: inset -6px -6px 10px #2a2a2a;
      background-color: #89c9ff;
    } */
`;

class BlueButton extends Component {
  render() {
    return (
      <StyledDiv onClick={this.props.handleBoardClick(this.props.color)}
        style={ {
          backgroundColor: (this.props.blueActive) ? '#89c9ff' : '#060b9b',
          boxShadow: (this.props.blueActive) ? 'inset -6px -6px 10px #2a2a2a' : 'none',
          WebkitTapHighlightColor: (this.props.blueActive) ? 'rgba(0, 0, 0, 0)' : 'none',
        } }>
      </StyledDiv>
    );
  }
}

export default BlueButton;
