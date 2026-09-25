import { Link, useNavigate, useParams } from 'react-router-dom'
import { useBookings } from '../context/BookingContext.jsx'
import Badge from '../components/Badge.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function BookingDetails() {
  const { t } = useLanguage()
  const { bookingId } = useParams()
  const navigate = useNavigate()
  const { bookings, updateBookingStatus } = useBookings()
  const booking = bookings.find((b) => b.id === bookingId)
  if (!booking) return <p className="max-w-md mx-auto px-4 py-10">Booking not found.</p>

  function handleCancel() {
    updateBookingStatus(booking.id, 'Cancelled')
    navigate('/my-bookings')
  }

  return (
    <section className="max-w-md mx-auto px-4 py-10 pb-24">
      <Link to="/my-bookings" className="text-sm text-slate-500 mb-4 inline-block">← {t('back')}</Link>
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex justify-between items-start">
          <h2 className="font-display text-lg font-bold text-indigo-950">{booking.service}</h2>
          <Badge className="bg-leaf-50 text-leaf-500">{booking.status}</Badge>
        </div>
        <div className="text-sm space-y-2 mt-4">
          <div className="flex justify-between"><span className="text-slate-500">{t('bookid')}</span><span>{booking.id}</span></div>
          <div className="flex justify-between"><span className="text-slate-500">{t('provider')}</span><span>{booking.provider}</span></div>
          <div className="flex justify-between"><span className="text-slate-500">{t('date')}</span><span>{booking.date}</span></div>
          <div className="flex justify-between"><span className="text-slate-500">{t('time')}</span><span>{booking.time}</span></div>
          <div className="flex justify-between"><span className="text-slate-500">{t('address')}</span><span className="text-right max-w-[60%]">{booking.address}</span></div>
          <div className="flex justify-between"><span className="text-slate-500">{t('price')}</span><span className="font-semibold">₹{booking.price}</span></div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button className="border border-slate-200 rounded-lg py-2.5 text-sm font-medium">{t('reschedule')}</button>
          <button className="border border-slate-200 rounded-lg py-2.5 text-sm font-medium">{t('contact')}</button>
          <button onClick={handleCancel} className="col-span-2 border border-red-200 text-red-500 rounded-lg py-2.5 text-sm font-medium">
            {t('cancelbooking')}
          </button>
        </div>
      </div>
    </section>
  )
}
