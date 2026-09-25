import { useNavigate } from 'react-router-dom'
import { useBookings } from '../context/BookingContext.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Login() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const { setLoggedIn } = useBookings()

  function handleLogin() {
    setLoggedIn(true)
    navigate('/')
  }

  return (
    <section className="max-w-sm mx-auto px-4 py-20">
      <h2 className="font-display text-2xl font-bold text-indigo-950 text-center">{t('login')}</h2>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-6 space-y-4">
        <div>
          <label className="text-xs font-semibold text-slate-500">Mobile Number</label>
          <input placeholder="98765 43210" className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2" />
        </div>
        <button onClick={handleLogin} className="w-full bg-indigo-900 text-white font-semibold py-3 rounded-xl">{t('cont')}</button>
        <button onClick={handleLogin} className="w-full text-sm text-slate-500 py-2">Continue as Demo User</button>
      </div>
    </section>
  )
}
