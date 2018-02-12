import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  
  h1 {
    font-family: Roboto, sans-serif;
    font-size: 50px;
    background-color: #25292e;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledDiv>
        <h1>Simon 2.0.1</h1>
      </StyledDiv>
    );
  }
}

export default Header;
