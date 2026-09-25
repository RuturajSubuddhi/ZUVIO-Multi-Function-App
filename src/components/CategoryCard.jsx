import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function CategoryCard({ category }) {
  const { t } = useLanguage()
  return (
    <div className="card-hover bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-2xl">{category.icon}</div>
      <h3 className="font-display font-bold text-lg text-indigo-950 mt-4 t">{t(category.key)}</h3>
      <p className="text-sm text-slate-500 mt-1">{category.desc}</p>
      <div className="flex items-center justify-between mt-5">
        <span className="text-xs text-slate-400">{category.subs.length} services</span>
        <Link to={`/category/${category.id}`} className="text-sm font-semibold text-indigo-900 hover:text-ember-600">
          {t('explore')} →
        </Link>
      </div>
    </div>
  )
}
