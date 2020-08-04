import React from 'react';
import './App.css';
import Main from './pages/MainPage';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Payment from './pages/Payment';
import Header from './components/header/Header';
import styled from 'styled-components';

// const Background = styled.html`
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-image: url('https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
// `;

const App = () => {
  return (
    <HashRouter>
      {/* <Background> */}
      <ThemeProvider theme={theme}>
        <MuiThemeProvider>
          <div>
            <div>
              <Header />
            </div>
            <div className="appWrapper">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/payment/:id" component={Payment} />
              </Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </ThemeProvider>
      {/* </Background> */}
    </HashRouter>
  );
};

export default App;
