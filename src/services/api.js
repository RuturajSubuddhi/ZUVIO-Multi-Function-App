// Lightweight mock service layer — no real network calls.
// Structured so a real backend can be swapped in later without touching page components.
import { CATEGORIES, generateProviders } from '../data/mockData.js'

const delay = (v) => Promise.resolve(v) // swap for setTimeout-based fake latency if desired

export function getCategories() {
  return delay(CATEGORIES)
}

export function getCategoryById(catId) {
  return delay(CATEGORIES.find((c) => c.id === catId) || null)
}

export function getServices(catId) {
  const cat = CATEGORIES.find((c) => c.id === catId)
  return delay(cat ? cat.subs : [])
}

export function getProviders(sub) {
  const cat = CATEGORIES.find((c) => c.subs.includes(sub)) || CATEGORIES[0]
  return delay(generateProviders(sub, cat.base))
}

export function getProviderById(sub, providerId) {
  const cat = CATEGORIES.find((c) => c.subs.includes(sub)) || CATEGORIES[0]
  return delay(generateProviders(sub, cat.base).find((p) => p.id === providerId) || null)
}

export function createBooking(booking, storage) {
  const record = {
    id: 'ZUV' + Math.floor(100000 + Math.random() * 900000),
    status: 'Confirmed',
    ...booking,
  }
  storage.add(record)
  return delay(record)
}

export function getBookings(storage) {
  return delay(storage.all())
}
