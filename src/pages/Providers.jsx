import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CATEGORIES, generateProviders } from '../data/mockData.js'
import ProviderCard from '../components/ProviderCard.jsx'
import FilterBar from '../components/FilterBar.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Providers() {
  const { t } = useLanguage()
  const { catId, sub: subEncoded } = useParams()
  const sub = decodeURIComponent(subEncoded)
  const cat = CATEGORIES.find((c) => c.id === catId) || CATEGORIES.find((c) => c.subs.includes(sub))
  const [filters, setFilters] = useState({ sort: 'Recommended', minRating: 0, maxPrice: null })

  const list = useMemo(() => {
    let providers = generateProviders(sub, cat.base)
    providers = providers.filter((p) => p.rating >= filters.minRating)
    if (filters.maxPrice) providers = providers.filter((p) => p.price <= filters.maxPrice)
    if (filters.sort === 'Rating') providers.sort((a, b) => b.rating - a.rating)
    else if (filters.sort === 'Price') providers.sort((a, b) => a.price - b.price)
    else if (filters.sort === 'Distance') providers.sort((a, b) => a.dist - b.dist)
    return providers
  }, [sub, cat, filters])

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <Link to={`/category/${cat.id}`} className="text-sm text-slate-500 mb-4 inline-block">← {t('back')}</Link>
      <h2 className="font-display text-2xl font-bold text-indigo-950">{sub}</h2>
      <FilterBar filters={filters} setFilters={setFilters} />
      <p className="text-xs text-slate-400 mt-3">{list.length} providers found</p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {list.map((p) => <ProviderCard key={p.id} provider={p} catId={cat.id} sub={sub} />)}
      </div>
      {!list.length && <p className="text-sm text-slate-400 text-center mt-10">No providers match these filters.</p>}
    </section>
  )
}
