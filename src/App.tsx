import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './components/Router/Router';
import Header from './components/header/Header';
import styled from 'styled-components';

const Background = styled.img`
  position: fixed;
  z-index: -1;
  top: 0;
  left: -6px;
  filter: blur(3px);
  min-width: 100%;
  min-height: 100%;
`;

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider>
          <Fragment>
            <Background src={process.env.PUBLIC_URL + '/images/background.jpeg'} id="bg" alt="" />
            <Header />
            <Router />
          </Fragment>
        </MuiThemeProvider>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
