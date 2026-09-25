import { createContext, useContext, useState, useEffect } from 'react'
import en from './en.js'
import or from './or.js'

const dict = { en, or }
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('zuvio_lang') || 'en')

  useEffect(() => {
    localStorage.setItem('zuvio_lang', lang)
    document.documentElement.setAttribute('data-lang', lang)
  }, [lang])

  const t = (key) => dict[lang][key] || dict.en[key] || key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
