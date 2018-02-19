import React from 'react';
import styled from 'styled-components';

const FooterStyledDiv = styled.div`
  letter-spacing: 1px;
  p {
    width: 500px;
    margin: 10px auto;
    line-height: 125%;
    color: #000000 ;
    /* @media (max-width: 600px) {
      width: 250px;
    } */
  }
  a {
    text-decoration: none;
    color: #060b9b;
  }
`;

const Footer = () => (
  <FooterStyledDiv>
    <p>Design &amp; Development by Jonathan M. Brunt 2018</p>
    <p>Educational Project Inspired by the Original "Simon", a Registered Trademark of Milton Bradley</p>
    <p>Sound Effects Obtained From <a href='https://www.zapsplat.com' rel="noopener noreferrer" target='_blank'>https://www.zapsplat.com</a></p>
  </FooterStyledDiv>
);

export default Footer;
