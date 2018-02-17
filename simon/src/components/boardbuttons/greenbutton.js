import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    width: 150px;
    margin-top: 18px;
    margin-right: 2px;
    padding-bottom: 150px;
    /* background-color: #12990d; */
    border-radius: 100% 0 0 0;
    &:hover {
      cursor: pointer;
    }
    /* &:active {
      box-shadow: inset 6px 6px 10px #2a2a2a;
      background-color: #89ff94;
    } */
`;

class GreenButton extends Component {
  render() {
    return (
      <StyledDiv
        onClick={this.props.handleBoardClick(this.props.color)}
        style={ {
          backgroundColor: (this.props.greenActive) ? '#89ff94' : '#12990d',
          boxShadow: (this.props.greenActive) ? 'inset 6px 6px 10px #2a2a2a' : 'none',
          WebkitTapHighlightColor: (this.props.greenActive) ? 'rgba(0, 0, 0, 0)' : 'none',
        } }>
      </StyledDiv>
    );
  }
}

export default GreenButton;
