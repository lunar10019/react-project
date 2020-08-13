import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import en from '../../lang/en-US.json';
import ru from '../../lang/ru-RU.json';

export const LocaleContext = React.createContext();

const local = navigator.language.slice(0, 2);

let lang;
if (local === 'ru') {
  lang = ru;
} else {
  lang = en;
}

const WrapperLocale = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const selectLang = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === 'en') {
      setMessages(en);
    } else {
      setMessages(ru);
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, selectLang }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default WrapperLocale;
