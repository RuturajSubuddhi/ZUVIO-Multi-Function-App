import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function SearchBar({ onSearch }) {
  const { t } = useLanguage()
  const [value, setValue] = useState('')
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-xl">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t('searchph')}
        className="flex-1 px-4 py-3 rounded-xl text-slate-800 outline-none"
      />
      <button
        onClick={() => onSearch && onSearch(value)}
        className="bg-ember-500 hover:bg-ember-600 text-white font-semibold px-6 py-3 rounded-xl"
      >
        {t('find')}
      </button>
    </div>
  )
}
