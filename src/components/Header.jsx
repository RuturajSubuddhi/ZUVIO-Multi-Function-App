import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useBookings } from '../context/BookingContext.jsx'
import NotificationPanel from './NotificationPanel.jsx'

export default function Header() {
  const { t, lang, setLang } = useLanguage()
  const { loggedIn } = useBookings()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 rounded-lg bg-indigo-900 text-white font-display font-bold flex items-center justify-center text-sm">Z</span>
          <span className="font-display font-bold text-lg text-indigo-950">ZUVIO</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-indigo-900">{t('home')}</Link>
          <Link to="/" className="hover:text-indigo-900">{t('services')}</Link>
          <Link to="/my-bookings" className="hover:text-indigo-900">{t('mybookings')}</Link>
          <Link to="/support" className="hover:text-indigo-900">{t('support')}</Link>
          <Link to="/profile" className="hover:text-indigo-900">{t('profile')}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:flex items-center gap-1 text-xs text-slate-500"><span>📍</span>Bhubaneswar</span>
          <NotificationPanel />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="text-xs border border-slate-200 rounded-md px-2 py-1.5 bg-white"
          >
            <option value="en">🌐 English</option>
            <option value="or">🌐 ଓଡ଼ିଆ</option>
          </select>
          {loggedIn ? (
            <button
              onClick={() => navigate('/profile')}
              className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-900 text-sm font-semibold flex items-center justify-center"
            >
              D
            </button>
          ) : (
            <Link to="/login" className="text-sm font-semibold text-white bg-indigo-900 px-4 py-2 rounded-lg hover:bg-indigo-800">
              {t('login')}
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
