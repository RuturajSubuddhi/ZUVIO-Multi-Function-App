import { Link, useParams } from 'react-router-dom'
import { CATEGORIES } from '../data/mockData.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Subcategories() {
  const { t } = useLanguage()
  const { catId } = useParams()
  const cat = CATEGORIES.find((c) => c.id === catId)
  if (!cat) return <p className="max-w-6xl mx-auto px-4 py-10">Category not found.</p>

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <Link to="/" className="text-sm text-slate-500 mb-4 inline-block">← {t('back')}</Link>
      <h2 className="font-display text-2xl font-bold text-indigo-950">{t(cat.key)}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {cat.subs.map((s) => (
          <Link
            key={s}
            to={`/providers/${cat.id}/${encodeURIComponent(s)}`}
            className="card-hover text-left bg-white rounded-xl border border-slate-200 p-5 flex items-center justify-between"
          >
            <span className="font-medium text-indigo-950">{s}</span>
            <span className="text-slate-400">→</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
