import React from 'react';
import './App.css';
import Main from './pages/MainPage';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Payment from './pages/Payment';
import Header from './components/ArtDesign/Header';

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
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
    </HashRouter>
  );
};

export default App;
