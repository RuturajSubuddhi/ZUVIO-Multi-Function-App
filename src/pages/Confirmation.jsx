import { Link, useLocation, useParams } from 'react-router-dom'
import { useBookings } from '../context/BookingContext.jsx'
import Badge from '../components/Badge.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Confirmation() {
  const { t } = useLanguage()
  const { bookingId } = useParams()
  const location = useLocation()
  const { bookings } = useBookings()
  const record = location.state || bookings.find((b) => b.id === bookingId)
  if (!record) return <p className="max-w-md mx-auto px-4 py-10">Booking not found.</p>

  return (
    <section className="max-w-md mx-auto px-4 py-16 text-center">
      <div className="w-16 h-16 rounded-full bg-leaf-50 text-leaf-500 text-3xl flex items-center justify-center mx-auto">✓</div>
      <h2 className="font-display text-2xl font-bold text-indigo-950 mt-5">{t('confirmed')}</h2>
      <p className="text-slate-500 mt-1">Your service request has been successfully submitted.</p>
      <div className="bg-white rounded-2xl border border-slate-200 p-5 mt-6 text-left text-sm space-y-2">
        <div className="flex justify-between"><span className="text-slate-500">{t('bookid')}</span><span className="font-medium">{record.id}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">{t('provider')}</span><span>{record.provider}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">Service</span><span>{record.service}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">{t('date')}</span><span>{record.date}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">{t('time')}</span><span>{record.time}</span></div>
        <div className="flex justify-between"><span className="text-slate-500">Status</span><Badge className="bg-leaf-50 text-leaf-500">{record.status}</Badge></div>
      </div>
      <div className="flex gap-3 mt-6">
        <Link to="/my-bookings" className="flex-1 bg-indigo-900 text-white font-semibold py-3 rounded-xl">{t('mybookings')}</Link>
        <Link to="/" className="flex-1 border border-slate-200 font-semibold py-3 rounded-xl">{t('home')}</Link>
      </div>
    </section>
  )
}
