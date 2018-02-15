import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: inline-block;
    width: 150px;
    margin-right: 2px;   
    padding-bottom: 150px;
    background-color: #cccc06;
    border-radius: 0 0 0 100%;
    &:hover {
      cursor: pointer;
    }
    &:active {
      box-shadow: inset 6px -6px 10px #2a2a2a;
      background-color: #fbff89;
    }
`;

class YellowButton extends Component {
  render() {
    return (
      <StyledDiv></StyledDiv>
    );
  }
}

export default YellowButton;
