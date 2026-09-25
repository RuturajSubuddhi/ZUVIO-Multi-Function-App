export default function RatingStars({ rating }) {
  const full = Math.round(rating)
  return (
    <span className="text-sm">
      <span className="text-ember-500">{'★'.repeat(full)}{'☆'.repeat(5 - full)}</span>
      <span className="text-slate-500 ml-1">{rating}</span>
    </span>
  )
}
