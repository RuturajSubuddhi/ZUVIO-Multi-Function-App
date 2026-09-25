import { Link } from 'react-router-dom'
import RatingStars from './RatingStars.jsx'
import Badge from './Badge.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function ProviderCard({ provider, catId, sub }) {
  const { t } = useLanguage()
  const initials = provider.name.split(' ').map((w) => w[0]).join('')
  return (
    <div className="card-hover bg-white rounded-2xl border border-slate-200 p-5 flex gap-4">
      <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-900 font-display font-bold text-xl flex items-center justify-center shrink-0">
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-indigo-950">{provider.name}</h3>
          {provider.verified && <Badge className="bg-leaf-50 text-leaf-500">✓ {t('verified')}</Badge>}
        </div>
        <div className="mt-1"><RatingStars rating={provider.rating} /> <span className="text-slate-400 text-sm">({provider.reviews})</span></div>
        <p className="text-xs text-slate-500 mt-1">{provider.exp} yrs experience · {provider.dist} km away · {provider.area}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-semibold text-indigo-950">₹{provider.price} <span className="text-xs font-normal text-slate-400">onwards</span></span>
          <Link
            to={`/provider/${catId}/${encodeURIComponent(sub)}/${provider.id}`}
            className="text-sm font-semibold text-white bg-indigo-900 hover:bg-indigo-800 px-4 py-1.5 rounded-lg"
          >
            {t('viewprofile')}
          </Link>
        </div>
      </div>
    </div>
  )
}
