import React, { Component } from 'react';
import styled from 'styled-components';
import './boardbuttons.css';

const StyledDiv = styled.div`
    display: inline-block;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 150px;
    margin-right: 2px;   
    padding-bottom: 150px;
    background-color: #cccc06;
    border-radius: 0 0 0 100%;
    &:hover {
      cursor: pointer;
    }
`;

class YellowButton extends Component {
  render() {
    return (
      <StyledDiv
        onClick={this.props.handleBoardClick(this.props.color)}
        className={this.props.yellowActive ? 'yellowbutton--active' : null}>
      </StyledDiv>
    );
  }
}

export default YellowButton;
