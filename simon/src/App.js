import React from 'react';
import styled from 'styled-components';
import Header from './components/header/header';
import GameBoard from './components/gameboard/gameboard';
import StatusBoard from './components/statusboard/statusboard';
import Footer from './components/footer/footer';

const AppStyledDiv = styled.div`
  max-width: 1100px;
  min-width: 350px;
  margin: 20px auto;
  padding: 15px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background-color: #808080;
  border-radius: 4px;
  text-align: center;
  font-family: Orbitron, sans-serif;
  color: #25292e;
  @media (max-width: 600px) {
    margin: 0;
  }
  .app__container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const App = props => ( // renders main components of app passing approptiate props
  <AppStyledDiv>
    <Header />
    <div className='app__container'>
      <GameBoard
        handleBoardClick={props.handleBoardClick}
        greenActive={props.greenActive}
        redActive={props.redActive}
        yellowActive={props.yellowActive}
        blueActive={props.blueActive}
        playAvailable={props.playAvailable}
      />
      <StatusBoard
        handleStart={props.handleStart}
        handleSpeed={props.handleSpeed}
        handleStrict={props.handleStrict}
        handleReset={props.handleReset}
        startDisabled={props.startDisabled}
        speedDisabled={props.speedDisabled}
        strictDisabled={props.strictDisabled}
        resetDisabled={props.resetDisabled}
        speedMode={props.speedMode}
        strictMode={props.strictMode}
        round={props.round}
        bannerText={props.bannerText}
      />
    </div>
    <Footer />
  </AppStyledDiv>
);

export default App;
