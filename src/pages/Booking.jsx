import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CATEGORIES, generateProviders } from '../data/mockData.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useBookings } from '../context/BookingContext.jsx'
import { createBooking } from '../services/api.js'

export default function Booking() {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const { catId, sub: subEncoded, providerId } = useParams()
  const sub = decodeURIComponent(subEncoded)
  const cat = CATEGORIES.find((c) => c.id === catId)
  const provider = generateProviders(sub, cat.base).find((p) => p.id === providerId)
  const { addresses, addAddress, addBooking } = useBookings()

  const [date, setDate] = useState(() => new Date(Date.now() + 86400000).toISOString().slice(0, 10))
  const [time, setTime] = useState('Morning')
  const [address, setAddress] = useState(addresses[0])
  const [notes, setNotes] = useState('')

  if (!provider) return <p className="max-w-2xl mx-auto px-4 py-10">Provider not found.</p>

  function handleAddAddress() {
    const a = prompt('New address')
    if (a) { addAddress(a); setAddress(a) }
  }

  async function handleConfirm() {
    const record = await createBooking(
      { provider: provider.name, service: provider.service, date, time, address, notes, price: provider.price },
      { add: addBooking }
    )
    navigate(`/confirmation/${record.id}`, { state: record })
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-10">
      <Link to={`/provider/${catId}/${subEncoded}/${provider.id}`} className="text-sm text-slate-500 mb-4 inline-block">← {t('back')}</Link>
      <h2 className="font-display text-2xl font-bold text-indigo-950">{t('book')}</h2>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-5 space-y-5">
        <div><label className="text-xs font-semibold text-slate-500">{t('provider')}</label><p className="mt-1 font-medium text-indigo-950">{provider.name} · {provider.service}</p></div>

        <div>
          <label className="text-xs font-semibold text-slate-500">{t('date')}</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500">{t('time')}</label>
          <div className="flex gap-2 mt-1">
            {['Morning', 'Afternoon', 'Evening'].map((tm) => (
              <button
                key={tm}
                onClick={() => setTime(tm)}
                className={`flex-1 py-2 rounded-lg border text-sm ${time === tm ? 'bg-indigo-900 text-white border-indigo-900' : 'border-slate-200 text-slate-600'}`}
              >
                {tm}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500">{t('address')}</label>
          <select value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2">
            {addresses.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          <button onClick={handleAddAddress} className="text-xs text-indigo-700 font-semibold mt-1">+ Add New Address</button>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500">Additional Instructions (optional)</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} className="mt-1 w-full border border-slate-200 rounded-lg px-3 py-2" />
        </div>

        <div className="bg-slate-50 rounded-xl p-4 text-sm space-y-1">
          <div className="flex justify-between"><span className="text-slate-500">Service</span><span>{provider.service}</span></div>
          <div className="flex justify-between"><span className="text-slate-500">{t('provider')}</span><span>{provider.name}</span></div>
          <div className="flex justify-between"><span className="text-slate-500">{t('price')}</span><span className="font-semibold">₹{provider.price}</span></div>
        </div>

        <button onClick={handleConfirm} className="w-full bg-ember-500 hover:bg-ember-600 text-white font-semibold py-3 rounded-xl">
          {t('confirm')}
        </button>
      </div>
    </section>
  )
}
