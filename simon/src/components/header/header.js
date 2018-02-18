import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderStyledDiv = styled.div`
  h1 {
    margin-top: 10px;
    background-color: #25292e;
    background-clip: text;
    -webkit-background-clip: text;
    font-family: Roboto, sans-serif;
    font-size: 50px;
    color: transparent;
    text-shadow: rgba(255,255,255,0.5) 0px 3px 3px;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderStyledDiv>
        <h1>Simon 2.0.1</h1>
      </HeaderStyledDiv>
    );
  }
}

export default Header;
