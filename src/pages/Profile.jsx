import { useNavigate } from 'react-router-dom'
import { useBookings } from '../context/BookingContext.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Profile() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const { addresses, setLoggedIn } = useBookings()

  const items = [
    ['My Profile', '👤', null],
    ['My Addresses', '📍', null],
    [t('mybookings'), '🗂️', () => navigate('/my-bookings')],
    [t('notifications'), '🔔', null],
    [t('support'), '💬', () => navigate('/support')],
    ['Logout', '↩️', () => { setLoggedIn(false); navigate('/') }],
  ]

  return (
    <section className="max-w-md mx-auto px-4 py-10 pb-24">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-900 font-display font-bold text-2xl flex items-center justify-center">D</div>
        <div>
          <h2 className="font-display font-bold text-lg text-indigo-950">Demo User</h2>
          <p className="text-sm text-slate-500">+91 98765 43210</p>
        </div>
      </div>
      <div className="mt-6 bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100">
        {items.map(([label, icon, onClick]) => (
          <button
            key={label}
            onClick={onClick || undefined}
            className="w-full flex items-center gap-3 px-5 py-4 text-left text-sm font-medium text-indigo-950 hover:bg-slate-50"
          >
            <span>{icon}</span>{label}
          </button>
        ))}
      </div>
      <div className="mt-4 bg-white rounded-2xl border border-slate-200 p-4 text-sm">
        <p className="text-slate-400 text-xs">Saved Address</p>
        <p className="mt-1">{addresses[0]}</p>
      </div>
    </section>
  )
}
