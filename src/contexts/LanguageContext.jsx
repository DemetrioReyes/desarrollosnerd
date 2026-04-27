import React, { createContext, useState, useContext } from 'react';
import es from '../translations/es';
import en from '../translations/en';

const translations = { es, en };

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('dn-lang') || 'es';
  });

  const toggle = () => {
    const next = lang === 'es' ? 'en' : 'es';
    setLang(next);
    localStorage.setItem('dn-lang', next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
