import { useState } from 'react'
import { useBookings } from '../context/BookingContext.jsx'
import BookingCard from '../components/BookingCard.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const TABS = ['Upcoming', 'Active', 'Completed', 'Cancelled']

export default function MyBookings() {
  const { t } = useLanguage()
  const { bookings } = useBookings()
  const [tab, setTab] = useState('Upcoming')

  const shown = bookings.filter((b) =>
    tab === 'Upcoming' ? b.status === 'Confirmed' :
    tab === 'Active' ? b.status === 'Active' :
    tab === 'Completed' ? b.status === 'Completed' : b.status === 'Cancelled'
  )

  return (
    <section className="max-w-2xl mx-auto px-4 py-10 pb-24">
      <h2 className="font-display text-2xl font-bold text-indigo-950">{t('mybookings')}</h2>
      <div className="flex gap-2 mt-4 overflow-x-auto scrollx">
        {TABS.map((tt) => (
          <button
            key={tt}
            onClick={() => setTab(tt)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm border ${tab === tt ? 'bg-indigo-900 text-white border-indigo-900' : 'border-slate-200 text-slate-500'}`}
          >
            {tt}
          </button>
        ))}
      </div>
      <div className="space-y-3 mt-5">
        {shown.length
          ? shown.map((b) => <BookingCard key={b.id} booking={b} />)
          : <p className="text-sm text-slate-400 mt-8 text-center">No {tab.toLowerCase()} bookings yet.</p>}
      </div>
    </section>
  )
}
