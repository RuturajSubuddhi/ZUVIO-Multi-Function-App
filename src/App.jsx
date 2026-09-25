import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Subcategories from './pages/Subcategories.jsx'
import Providers from './pages/Providers.jsx'
import ProviderDetail from './pages/ProviderDetail.jsx'
import Booking from './pages/Booking.jsx'
import Confirmation from './pages/Confirmation.jsx'
import MyBookings from './pages/MyBookings.jsx'
import BookingDetails from './pages/BookingDetails.jsx'
import Profile from './pages/Profile.jsx'
import Support from './pages/Support.jsx'
import Login from './pages/Login.jsx'
import BottomNav from './components/BottomNav.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 fade-in pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:catId" element={<Subcategories />} />
          <Route path="/providers/:catId/:sub" element={<Providers />} />
          <Route path="/provider/:catId/:sub/:providerId" element={<ProviderDetail />} />
          <Route path="/booking/:catId/:sub/:providerId" element={<Booking />} />
          <Route path="/confirmation/:bookingId" element={<Confirmation />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/my-bookings/:bookingId" element={<BookingDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}
