import React from 'react';
import './App.css';
import Main from './pages/MainPage';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header';
import styled from 'styled-components';
import Payment from './pages/Payment';

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

const App = () => {
  return (
    <HashRouter>
      <div>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider>
            <div>
              <Header />
            </div>
            <AppWrapper>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/payment/:id" component={Payment} />
              </Switch>
            </AppWrapper>
          </MuiThemeProvider>
        </ThemeProvider>
      </div>
    </HashRouter>
  );
};

export default App;
