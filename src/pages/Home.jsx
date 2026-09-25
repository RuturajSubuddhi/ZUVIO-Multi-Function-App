import { Link, useNavigate } from 'react-router-dom'
import { CATEGORIES, POPULAR_SERVICES } from '../data/mockData.js'
import CategoryCard from '../components/CategoryCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const STEPS = [['🔍', 'Choose a service'], ['🧑‍🔧', 'Find a trusted provider'], ['📅', 'Book your service'], ['✅', 'Get it done']]
const WHY = ['Verified providers', 'Transparent pricing', 'Local professionals', 'Easy booking', 'Customer reviews', 'Odisha-focused service marketplace']

export default function Home() {
  const { t } = useLanguage()
  const navigate = useNavigate()

  return (
    <>
      <section className="bg-indigo-950 text-white">
        <div className="max-w-6xl mx-auto px-4 pt-14 pb-20 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight">{t('tagline')}</h1>
          <p className="mt-4 text-indigo-200 max-w-xl mx-auto">{t('subtitle')}</p>
          <p className="mt-2 text-sm text-indigo-300">📍 Bhubaneswar, Odisha</p>
          <div className="mt-8"><SearchBar onSearch={() => navigate('/')} /></div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 -mt-10 pb-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((c) => <CategoryCard key={c.id} category={c} />)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="font-display text-xl font-bold text-indigo-950">{t('popular')}</h2>
        <div className="flex gap-3 mt-4 overflow-x-auto scrollx pb-1">
          {POPULAR_SERVICES.map(({ sub, catId }) => (
            <Link
              key={sub}
              to={`/providers/${catId}/${encodeURIComponent(sub)}`}
              className="shrink-0 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-indigo-950 hover:border-indigo-300"
            >
              {sub}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="font-display text-xl font-bold text-indigo-950 text-center">{t('howitworks')}</h2>
          <div className="grid sm:grid-cols-4 gap-6 mt-8">
            {STEPS.map(([icon, label]) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-indigo-950 text-white flex items-center justify-center text-lg">{icon}</div>
                <p className="text-sm font-medium text-indigo-950 mt-3">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl font-bold text-indigo-950">{t('why')}</h2>
        <div className="grid sm:grid-cols-3 gap-4 mt-6 text-sm">
          {WHY.map((w) => (
            <div key={w} className="flex items-center gap-2 text-slate-600"><span className="text-leaf-500">✓</span>{w}</div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h2 className="font-display text-2xl font-bold">{t('builtfor')}</h2>
          <p className="text-indigo-200 max-w-xl mx-auto mt-3">{t('builtsub')}</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-indigo-100">
            <span>✓ Verified Providers</span><span>⭐ Trusted Reviews</span><span>📍 Local Services</span>
            <span>💰 Transparent Pricing</span><span>🔒 Secure User Information</span>
          </div>
        </div>
      </section>
    </>
  )
}
