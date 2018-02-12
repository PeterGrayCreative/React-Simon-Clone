import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  p {
    color: #000000 ;
    width: 450px;
    margin: 10px auto;
    line-height: 115%
  }

  a {
    text-decoration: none;
    color: #060b9b;
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledDiv>
        <p>Design &amp; Development by Jonathan M. Brunt 2018</p>
        <p>Educational Project Inspired by the Original "Simon", a Registered Trademark of Milton Bradley</p>
        <p>Sound Effects Obtained From <a href='https://www.zapsplat.com' target='_blank'>https://www.zapsplat.com</a></p>
      </StyledDiv>
    );
  }
}

export default Footer;
