import { Link, useParams } from 'react-router-dom'
import { CATEGORIES, generateProviders } from '../data/mockData.js'
import RatingStars from '../components/RatingStars.jsx'
import Badge from '../components/Badge.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function ProviderDetail() {
  const { t } = useLanguage()
  const { catId, sub: subEncoded, providerId } = useParams()
  const sub = decodeURIComponent(subEncoded)
  const cat = CATEGORIES.find((c) => c.id === catId)
  const provider = generateProviders(sub, cat.base).find((p) => p.id === providerId)
  if (!provider) return <p className="max-w-3xl mx-auto px-4 py-10">Provider not found.</p>
  const initials = provider.name.split(' ').map((w) => w[0]).join('')

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <Link to={`/providers/${catId}/${subEncoded}`} className="text-sm text-slate-500 mb-4 inline-block">← {t('back')}</Link>
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex gap-4 items-start">
          <div className="w-20 h-20 rounded-full bg-indigo-100 text-indigo-900 font-display font-bold text-2xl flex items-center justify-center shrink-0">
            {initials}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-display text-xl font-bold text-indigo-950">{provider.name}</h2>
              {provider.verified && <Badge className="bg-leaf-50 text-leaf-500">✓ {t('verified')}</Badge>}
            </div>
            <div className="mt-1"><RatingStars rating={provider.rating} /> <span className="text-slate-400 text-sm">({provider.reviews} {t('reviews')})</span></div>
            <p className="text-sm text-slate-500 mt-1">{provider.exp} yrs experience · {provider.service}</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 mt-5 leading-relaxed">{provider.about}</p>
        <div className="grid sm:grid-cols-2 gap-3 mt-5 text-sm">
          <div className="bg-slate-50 rounded-lg p-3"><span className="text-slate-400 block text-xs">{t('price')}</span>₹{provider.price} onwards</div>
          <div className="bg-slate-50 rounded-lg p-3"><span className="text-slate-400 block text-xs">{t('location')}</span>{provider.area}, Bhubaneswar</div>
          <div className="bg-slate-50 rounded-lg p-3"><span className="text-slate-400 block text-xs">{t('available')}</span>{provider.avail}</div>
          <div className="bg-slate-50 rounded-lg p-3"><span className="text-slate-400 block text-xs">Distance</span>{provider.dist} km away</div>
        </div>
        <div className="flex gap-3 mt-6">
          <Link
            to={`/booking/${catId}/${subEncoded}/${provider.id}`}
            className="flex-1 text-center bg-ember-500 hover:bg-ember-600 text-white font-semibold py-3 rounded-xl"
          >
            {t('book')}
          </Link>
          <button className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600">📞</button>
          <button className="px-4 py-3 rounded-xl border border-slate-200 text-slate-600">💬</button>
        </div>
      </div>
    </section>
  )
}
