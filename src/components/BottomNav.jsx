import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function BottomNav() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  const item = (to, icon, label) => (
    <Link to={to} className={`flex-1 flex flex-col items-center gap-0.5 py-2 ${pathname === to ? 'text-indigo-900' : 'text-slate-400'}`}>
      <span className="text-lg">{icon}</span>
      <span className="text-[11px]">{label}</span>
    </Link>
  )
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 flex z-30">
      {item('/', '🏠', t('home'))}
      {item('/my-bookings', '🗂️', t('mybookings'))}
      {item('/profile', '👤', t('profile'))}
    </div>
  )
}
