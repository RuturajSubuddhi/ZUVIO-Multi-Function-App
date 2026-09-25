import { useLanguage } from '../i18n/LanguageContext.jsx'

const SORTS = ['Recommended', 'Rating', 'Price', 'Distance']

export default function FilterBar({ filters, setFilters }) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      {SORTS.map((s) => (
        <button
          key={s}
          onClick={() => setFilters((f) => ({ ...f, sort: s }))}
          className={`text-xs px-3 py-1.5 rounded-full border ${filters.sort === s ? 'bg-indigo-900 text-white border-indigo-900' : 'border-slate-200 text-slate-500'}`}
        >
          {s}
        </button>
      ))}
      <select
        value={filters.minRating}
        onChange={(e) => setFilters((f) => ({ ...f, minRating: Number(e.target.value) }))}
        className="text-xs border border-slate-200 rounded-full px-3 py-1.5 text-slate-600"
      >
        <option value={0}>{t('rating')}: Any</option>
        <option value={4}>4.0+</option>
        <option value={4.5}>4.5+</option>
      </select>
      <select
        value={filters.maxPrice || ''}
        onChange={(e) => setFilters((f) => ({ ...f, maxPrice: e.target.value ? Number(e.target.value) : null }))}
        className="text-xs border border-slate-200 rounded-full px-3 py-1.5 text-slate-600"
      >
        <option value="">{t('price')}: Any</option>
        <option value={300}>Under ₹300</option>
        <option value={500}>Under ₹500</option>
      </select>
    </div>
  )
}
