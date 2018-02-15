import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    width: 150px;
    margin-top: 18px;
    margin-left: 2px;    
    padding-bottom: 150px;
    background-color: #cc0606;
    border-radius: 0 100% 0 0;
    &:hover {
      cursor: pointer;
    }
    &:active {
      box-shadow: inset -6px 6px 10px #2a2a2a;
      background-color: #ed8782;
    }
`;

class RedButton extends Component {
  render() {
    return (
      <StyledDiv onClick={this.props.handleClick}></StyledDiv>
    );
  }
}

export default RedButton;
