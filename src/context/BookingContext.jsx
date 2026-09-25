import { createContext, useContext, useState, useEffect } from 'react'
import { DEFAULT_ADDRESS } from '../data/mockData.js'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState(() => {
    try { return JSON.parse(localStorage.getItem('zuvio_bookings') || '[]') }
    catch { return [] }
  })
  const [addresses, setAddresses] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('zuvio_addresses') || 'null')
      return saved && saved.length ? saved : [DEFAULT_ADDRESS]
    } catch { return [DEFAULT_ADDRESS] }
  })
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem('zuvio_loggedin') === '1')

  useEffect(() => { localStorage.setItem('zuvio_bookings', JSON.stringify(bookings)) }, [bookings])
  useEffect(() => { localStorage.setItem('zuvio_addresses', JSON.stringify(addresses)) }, [addresses])
  useEffect(() => { localStorage.setItem('zuvio_loggedin', loggedIn ? '1' : '0') }, [loggedIn])

  function addBooking(record) {
    setBookings((prev) => [record, ...prev])
  }
  function updateBookingStatus(id, status) {
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)))
  }
  function addAddress(addr) {
    setAddresses((prev) => [...prev, addr])
  }

  return (
    <BookingContext.Provider value={{
      bookings, addBooking, updateBookingStatus,
      addresses, addAddress,
      loggedIn, setLoggedIn,
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBookings = () => useContext(BookingContext)
