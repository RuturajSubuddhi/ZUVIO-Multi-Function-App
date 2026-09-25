export default function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${className}`}>
      {children}
    </span>
  )
}
