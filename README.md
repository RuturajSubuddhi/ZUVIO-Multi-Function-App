# ZUVIO — Frontend Client Demo (React)

A frontend-only React prototype for ZUVIO, a local service marketplace for Odisha, India.
Mock data and a mock service layer only — no backend, no payments, no real auth.

## Stack
- React 18 + React Router 6
- Vite
- Tailwind CSS
- Vanilla React state + Context (LanguageContext, BookingContext) — no external state library
- localStorage for demo persistence (bookings, addresses, language, login)

## Getting started
```bash
npm install
npm run dev
```
Then open the printed local URL (usually http://localhost:5173).

To build a static production bundle:
```bash
npm run build
npm run preview
```

## Project structure
```
src/
  components/   Header, Footer, BottomNav, CategoryCard, ProviderCard, RatingStars,
                 SearchBar, FilterBar, BookingCard, NotificationPanel, Badge
  pages/        Home, Subcategories, Providers, ProviderDetail, Booking, Confirmation,
                 MyBookings, BookingDetails, Profile, Support, Login
  context/      BookingContext.jsx — bookings, saved addresses, demo login state
  i18n/         en.js, or.js, LanguageContext.jsx — English/Odia switcher
  data/         mockData.js — categories, deterministic provider generator, FAQs, notifications
  services/     api.js — mock service layer (getCategories, getProviders, createBooking, etc.)
```

## Demo flow
Home → Category → Subcategory → Provider Listing (with working filters/sort) → Provider
Profile → Booking (date/time/address) → Confirmation → My Bookings → Booking Details.

Covers all three demo categories: Home & Household, Education, Repairs & Maintenance.

## What's intentionally left out (per the demo scope)
- Payments / Razorpay, real OTP/auth, provider & admin portals, real-time chat, maps,
  push notifications — all out of scope for this UI/UX prototype.
- Call / Message / Reschedule / Contact Provider buttons are visual-only, as specified.
