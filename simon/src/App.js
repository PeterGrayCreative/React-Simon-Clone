import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/header/header';
import GameBoard from './components/gameboard/gameboard';
import StatusBoard from './components/statusboard/statusboard';
import Footer from './components/footer/footer';

const StyledDiv = styled.div`
  max-width: 1100px;
  min-width: 600px;
  min-height: 600px;
  margin: 20px auto;
  padding: 15px;
  background-color: #808080;
  box-sizing: border-box;
  user-select: none;
  border-radius: 4px;
  text-align: center;
  font-family: Orbitron, sans-serif;
  color: #25292e;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      playList: [],
      userClicks: [],
      timing: 700,
      greenActive: false;
    };
  }

  random = () => {
    const temp = this.state.playList;
    temp.push(Math.floor(Math.random() * 4));
    this.setState({ playlist: temp }, () => console.log(this.state.playList));
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('clicked', event);
  }

  // execute = () => {
  //   this.state.playList.forEach(val => {
  //     setTimeout(function() {
  //       fire(ref[playList[i]][0], ref[playList[i]][1]);
  //     }, this.state.timing);
  //       setTimeout(function() {
  //         colorsActive = true;
  //       }, this.state.timing + 700);
  //    }
  // }

  render() {
    return (
      <StyledDiv>
        <Header />
        <GameBoard handleClick={this.handleClick}/>
        <StatusBoard />
        <Footer />
      </StyledDiv>
    );
  }
  componentDidMount() {
    this.random();
  }
}

export default App;
