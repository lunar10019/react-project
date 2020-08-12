import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import English from '../../lang/en-US.json';
import Russian from '../../lang/ru-RU.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === 'ru-RU') {
  lang = Russian;
} else {
  lang = English;
}

const WrapperLocale = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const selectLang = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === 'en-US') {
      setMessages(English);
    } else {
      setMessages(Russian);
    }
  };

  return (
    <Context.Provider value={{ locale, selectLang }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default WrapperLocale;
