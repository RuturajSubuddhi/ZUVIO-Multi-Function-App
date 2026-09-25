export const CATEGORIES = [
  {
    id: "home", key: "cat_home", icon: "🏠", base: 249,
    desc: "Maid, Cook, Cleaning, Babysitter, Gardening and more.",
    subs: ["Maid", "Cook", "Babysitter", "Elderly Companion", "Cleaning", "Gardening", "Laundry", "Pest Control"],
  },
  {
    id: "edu", key: "cat_edu", icon: "📚", base: 399,
    desc: "Tuition, Coding, Spoken English, Music, Dance and more.",
    subs: ["School Tuition", "College Tutoring", "Spoken English", "Coding", "Music", "Dance", "Exam Preparation"],
  },
  {
    id: "repair", key: "cat_repair", icon: "🔧", base: 299,
    desc: "Electrician, Plumber, AC, Refrigerator, RO and more.",
    subs: ["Electrician", "Plumber", "Carpenter", "AC Service", "Refrigerator Service", "RO Service", "Geyser Service", "Painting", "Waterproofing"],
  },
]

export const POPULAR_SERVICES = [
  { sub: "Electrician", catId: "repair" }, { sub: "Maid", catId: "home" },
  { sub: "School Tuition", catId: "edu" }, { sub: "AC Service", catId: "repair" },
  { sub: "Cleaning", catId: "home" }, { sub: "Plumber", catId: "repair" },
  { sub: "Coding", catId: "edu" }, { sub: "Cook", catId: "home" },
]

const NAMES = ["Amit Kumar", "Priya Nayak", "Suresh Patra", "Anjali Das", "Rakesh Mohanty",
  "Sneha Rout", "Biswajit Sahoo", "Meena Swain", "Debasis Jena", "Pooja Behera"]
const AREAS = ["Patia", "Saheed Nagar", "Jayadev Vihar", "Nayapalli", "Khandagiri",
  "Chandrasekharpur", "Rasulgarh", "Old Town", "Cuttack Road"]

function hashStr(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h
}

// Deterministic mock provider generator: same subcategory always returns the same providers.
export function generateProviders(sub, base) {
  const list = []
  for (let i = 0; i < 7; i++) {
    const seed = hashStr(sub + i)
    const name = NAMES[seed % NAMES.length]
    const rating = (4.2 + (seed % 8) / 10).toFixed(1)
    const reviews = 18 + (seed % 260)
    const exp = 1 + (seed % 12)
    const price = base + (seed % 6) * 40
    const dist = (0.5 + (seed % 45) / 10).toFixed(1)
    const area = AREAS[seed % AREAS.length]
    const verified = seed % 5 !== 0
    const avail = seed % 2 === 0 ? "Today" : "Tomorrow"
    list.push({
      id: `${sub.replace(/\s+/g, "-").toLowerCase()}-${i}`,
      name, rating: Number(rating), reviews, exp, price, dist: Number(dist), area, verified, avail,
      service: sub,
      about: `${name} has ${exp} years of experience providing ${sub.toLowerCase()} services across ${area} and nearby areas of Bhubaneswar, with a strong record of reliable, on-time work.`,
    })
  }
  return list
}

export const DEFAULT_ADDRESS = "Flat 4B, Sunshine Apartments, Patia, Bhubaneswar - 751024"

export const NOTIFICATIONS = [
  { text: "Your booking has been confirmed.", unread: true },
  { text: "Your service is scheduled for tomorrow.", unread: true },
  { text: "Your provider is available.", unread: false },
  { text: "Your booking has been completed.", unread: false },
]

export const FAQS = [
  ["How do I book a service?", "Pick a category, choose a provider, and confirm your date, time and address."],
  ["How do I cancel a booking?", "Open My Bookings, select the booking and tap Cancel Booking."],
  ["Are providers verified?", "Verified providers carry a green ✓ Verified badge on their profile."],
  ["Is my information safe?", "ZUVIO keeps your contact and address details private to your account."],
]
