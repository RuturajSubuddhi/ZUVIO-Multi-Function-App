import { Link } from 'react-router-dom'
import Badge from './Badge.jsx'

export default function BookingCard({ booking }) {
  return (
    <Link
      to={`/my-bookings/${booking.id}`}
      className="w-full text-left bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between hover:border-indigo-300"
    >
      <div>
        <p className="font-medium text-indigo-950">{booking.service}</p>
        <p className="text-xs text-slate-500 mt-0.5">{booking.provider} · {booking.date} · {booking.time}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-indigo-950 text-sm">₹{booking.price}</p>
        <Badge className="bg-leaf-50 text-leaf-500">{booking.status}</Badge>
      </div>
    </Link>
  )
}
