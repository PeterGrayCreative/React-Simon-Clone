import React, { Component } from 'react';
import styled from 'styled-components';
import './boardbuttons.css';

const StyledDiv = styled.div`
    display: inline-block;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 150px;
    margin-top: 18px;
    margin-right: 2px;
    padding-bottom: 150px;
    background-color: #12990d;
    border-radius: 100% 0 0 0;
    &:hover {
      cursor: pointer;
    }
`;

class GreenButton extends Component {
  render() {
    return (
      <StyledDiv
        onClick={this.props.handleBoardClick(this.props.color)}
        className={this.props.greenActive ? 'greenbutton--active' : null}>
      </StyledDiv>
    );
  }
}

export default GreenButton;
