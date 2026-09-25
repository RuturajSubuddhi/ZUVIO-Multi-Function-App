import { useState } from 'react'
import { NOTIFICATIONS } from '../data/mockData.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function NotificationPanel() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const hasUnread = NOTIFICATIONS.some((n) => n.unread)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500"
      >
        🔔
        {hasUnread && <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-ember-500" />}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-40">
          <p className="text-xs font-semibold text-slate-400 px-2 py-1">{t('notifications')}</p>
          {NOTIFICATIONS.map((n, i) => (
            <div key={i} className="px-2 py-2 text-sm rounded-lg hover:bg-slate-50 flex items-start gap-2">
              <span className={`w-1.5 h-1.5 mt-1.5 rounded-full shrink-0 ${n.unread ? 'bg-ember-500' : ''}`} />
              <span className="text-slate-600">{n.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
