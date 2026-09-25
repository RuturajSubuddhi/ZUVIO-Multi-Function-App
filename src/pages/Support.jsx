import { FAQS } from '../data/mockData.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const LINKS = [['📖', 'FAQs'], ['💬', 'Contact Support'], ['📅', 'Booking Help'], ['🔒', 'Safety Information']]

export default function Support() {
  const { t } = useLanguage()
  return (
    <section className="max-w-2xl mx-auto px-4 py-10 pb-24">
      <h2 className="font-display text-2xl font-bold text-indigo-950">{t('support')}</h2>
      <div className="grid sm:grid-cols-2 gap-3 mt-6">
        {LINKS.map(([icon, label]) => (
          <div key={label} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 text-sm font-medium text-indigo-950">
            <span className="text-xl">{icon}</span>{label}
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-3">
        {FAQS.map(([q, a]) => (
          <div key={q} className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="font-medium text-indigo-950 text-sm">{q}</p>
            <p className="text-sm text-slate-500 mt-1">{a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
