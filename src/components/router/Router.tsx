import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PaymentPage from '../../pages/PaymentPage';
import Main from '../../pages/MainPage';
import { PagesPath } from './PagesPath';

const Router = () => {
  return (
    <Switch>
      <Route exact path={PagesPath.main} component={Main} />
      <Route path={PagesPath.payment} component={PaymentPage} />
    </Switch>
  );
};

export default Router;
