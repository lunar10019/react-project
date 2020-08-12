import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PaymentPage from '../../pages/PaymentPage';
import Main from '../../pages/MainPage';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/payment/:id" component={PaymentPage} />
    </Switch>
  );
};

export default Router;
