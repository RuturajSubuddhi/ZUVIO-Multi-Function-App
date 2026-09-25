import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-indigo-900 text-white font-display font-bold flex items-center justify-center text-xs">Z</span>
          <span className="font-display font-bold text-indigo-950">ZUVIO</span>
        </div>
        <p>Built for Odisha · Bhubaneswar, Odisha</p>
        <div className="flex gap-4">
          <Link to="/support" className="hover:text-indigo-900">{t('support')}</Link>
          <Link to="/profile" className="hover:text-indigo-900">{t('profile')}</Link>
        </div>
      </div>
    </footer>
  )
}
