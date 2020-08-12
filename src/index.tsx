import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WrapperLocale from './components/local/locale';

ReactDOM.render(
  <WrapperLocale>
    <App />
  </WrapperLocale>,
  document.getElementById('root'),
);

serviceWorker.unregister();
