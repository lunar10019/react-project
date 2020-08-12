import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import Router from './components/Router/Router';
import img from './image/background.jpeg';
import Header from './components/header/Header';

const AppWrapper = styled.section`
  display: grid;
  width: 1280px;
  margin: 0 auto;

  @media (max-width: 1380px) {
    display: flex;
    justify-content: center;
    width: 900px;
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 500px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 50px 20px;
    justify-items: start;
  }
  @media (max-width: 450px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 375px) {
    display: flex;
    justify-content: center;
    width: 370px;
  }

  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const Background = styled.section`
  background-image: url(${img});
  backdrop-filter: blur(3px);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider>
          <Background>
            <Header />
            <AppWrapper>
              <Router />
            </AppWrapper>
          </Background>
        </MuiThemeProvider>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
