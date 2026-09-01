export const CONTACTS = {
  ashraf: { name: "Ashraf", phone: "918056681851", displayPhone: "8056681851" },
  zubair: { name: "Zubair – Auto", phone: "919487069607", displayPhone: "9487069607" },
  samsudheen: { name: "Samsudheen – Homestay", phone: "919843173355", displayPhone: "+91 98431 73355" },
  email: "1212ashrafashu@gmail.com",
};

export const WHATSAPP_DEFAULT = CONTACTS.ashraf.phone;

export function whatsappLink(
  phone: string = WHATSAPP_DEFAULT,
  message?: string,
): string {
  const base = `https://wa.me/${phone}`;
  if (message) return `${base}?text=${encodeURIComponent(message)}`;
  return base;
}

export function callLink(phone: string): string {
  return `tel:+${phone}`;
}

export interface Destination {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
}

export const DESTINATIONS: Destination[] = [
  {
    name: "Ooty",
    slug: "ooty",
    tagline: "Queen of the Nilgiris",
    description:
      "Discover the breathtaking beauty of Ooty with its rolling tea gardens, serene lakes, and misty mountain views.",
    image: "https://images.unsplash.com/photo-1739323019516-78a6be75d0bb?w=800&q=80",
  },
  {
    name: "Kodaikanal",
    slug: "kodaikanal",
    tagline: "Princess of Hill Stations",
    description:
      "Explore Kodaikanal's misty peaks, crystal-clear lakes, lush forests, and stunning viewpoints.",
    image: "https://images.unsplash.com/photo-1596394723269-e1b58a1e6d8a?w=800&q=80",
  },
  {
    name: "Wayanad",
    slug: "wayanad",
    tagline: "Nature & Wildlife",
    description:
      "Experience Wayanad's ancient caves, pristine dams, wildlife sanctuaries, and lush green landscapes.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    name: "Mysore",
    slug: "mysore",
    tagline: "Palaces & Heritage",
    description:
      "Discover the royal heritage of Mysore with its magnificent palace, gardens, temples, and cultural charm.",
    image: "https://images.unsplash.com/photo-1600100397608-e1e5e3c7e4e3?w=800&q=80",
  },
  {
    name: "Coorg",
    slug: "coorg",
    tagline: "Coffee, Hills & Nature",
    description:
      "Immerse yourself in Coorg's coffee plantations, misty hills, waterfalls, and rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    name: "Coonoor",
    slug: "coonoor",
    tagline: "Tea Gardens & Mountain Views",
    description:
      "Explore Coonoor's scenic viewpoints, tea estates, parks, and tranquil mountain vistas.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
  },
];

export interface SightseeingPlace {
  name: string;
  description: string;
  image: string;
}

export const OOTY_SIGHTSEEING: SightseeingPlace[] = [
  { name: "Doddabetta Peak", description: "Highest point in the Nilgiris offering panoramic mountain views.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "Tea Museum", description: "Discover the history and art of tea making in Ooty.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  { name: "Wax Museum", description: "Life-size wax figures of famous personalities.", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80" },
  { name: "Botanical Garden", description: "A centuries-old garden with rare plants and floral displays.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" },
  { name: "Rose Garden", description: "Home to thousands of rose varieties in stunning colors.", image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=80" },
  { name: "Thread Garden", description: "Unique garden featuring flowers made entirely from thread.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" },
  { name: "Ooty Lake", description: "Serene lake perfect for boating and scenic views.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
];

export const COONOOR_SIGHTSEEING: SightseeingPlace[] = [
  { name: "Valley View", description: "Breathtaking panoramic views of the Nilgiri valleys.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "MRC Outer View", description: "Scenic viewpoint offering stunning natural landscapes.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  { name: "Golf View", description: "Picturesque view of the Coonoor Golf Course.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "Sims Park", description: "A beautiful botanical park with exotic plant species.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" },
  { name: "Tea Garden", description: "Lush tea plantations with stunning valley views.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  { name: "Lamb's Rock", description: "A popular viewpoint offering views of Coimbatore plains.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "Dolphin's Nose View", description: "Unique rock formation resembling a dolphin's nose with stunning views.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
];

export const PYKARA_SIGHTSEEING: SightseeingPlace[] = [
  { name: "Golf View", description: "Scenic golf course views amidst the hills.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "Pine Forest", description: "Towering pine trees creating a magical atmosphere.", image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80" },
  { name: "Tree Park", description: "A natural park with diverse tree species and trails.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" },
  { name: "Shooting Spot", description: "Famous film shooting location amid beautiful landscapes.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "Pykara Lake", description: "Tranquil lake surrounded by dense forests.", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  { name: "Pykara Waterfalls", description: "Cascading waterfalls in a lush green setting.", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
];

export const AVALANCHE_SIGHTSEEING: SightseeingPlace[] = [
  { name: "Carnhill Forest", description: "Dense forest with rich biodiversity and nature trails.", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80" },
  { name: "Emerald Lake Outer View", description: "Stunning views of the crystal-clear Emerald Lake.", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  { name: "Avalanche Lake", description: "Pristine lake nestled in a stunning mountain valley.", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  { name: "Avalanche Safari", description: "Wildlife safari through the Avalanche reserve forest.", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80" },
  { name: "Karnataka Garden", description: "Beautiful garden maintained by Karnataka Forest Department.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" },
];

export const KODAIKANAL_SIGHTSEEING: SightseeingPlace[] = [
  { name: "Green Valley View Point", description: "Spectacular panoramic views of the Vaigai Dam and plains.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "Guna Caves", description: "Mysterious caves also known as Devil's Kitchen.", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80" },
  { name: "Pine Forest", description: "Towering pine trees creating a serene atmosphere.", image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80" },
  { name: "Pillar Rocks", description: "Three giant rock pillars standing 122 meters high.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "Coaker's Walk", description: "Scenic pedestrian path with stunning valley views.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  { name: "Bryant Park", description: "Well-maintained botanical garden with rare plants.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" },
  { name: "Kodaikanal Lake", description: "Star-shaped lake perfect for boating and nature walks.", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
];

export const WAYANAD_SIGHTSEEING: SightseeingPlace[] = [
  { name: "Edakkal Caves", description: "Ancient caves with prehistoric petroglyphs and stunning views.", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80" },
  { name: "Karapuzha Dam", description: "Picturesque dam surrounded by lush greenery.", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  { name: "Banasura Dam", description: "Largest earth dam in India with stunning backwaters.", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  { name: "Pookode Lake", description: "Natural freshwater lake amidst dense forests.", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
];

export const MYSORE_SIGHTSEEING: SightseeingPlace[] = [
  { name: "Mysore Palace", description: "Magnificent royal palace showcasing Indo-Saracenic architecture.", image: "https://images.unsplash.com/photo-1600100397608-e1e5e3c7e4e3?w=600&q=80" },
  { name: "Mysore Zoo", description: "One of the oldest and best zoos in India.", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80" },
  { name: "Fish Aquarium", description: "A diverse collection of freshwater and marine fish.", image: "https://images.unsplash.com/photo-1520302630591-fd1c67ffeabd?w=600&q=80" },
  { name: "Chamundeshwari Temple", description: "Historic temple atop Chamundi Hills with city views.", image: "https://images.unsplash.com/photo-1600100397608-e1e5e3c7e4e3?w=600&q=80" },
  { name: "Sand Museum", description: "Intricate sculptures crafted entirely from sand.", image: "https://images.unsplash.com/photo-1600100397608-e1e5e3c7e4e3?w=600&q=80" },
  { name: "St. Philomena's Church", description: "One of the tallest churches in Asia with Gothic architecture.", image: "https://images.unsplash.com/photo-1600100397608-e1e5e3c7e4e3?w=600&q=80" },
  { name: "Brindavan Gardens", description: "Famous terraced garden with musical fountain shows.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" },
];

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  slug: string;
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; details: string }[];
  image: string;
}

export const PACKAGES: TourPackage[] = [
  {
    id: "2d1n",
    title: "Ooty 2D/1N Tour Package",
    duration: "2 Days / 1 Night",
    slug: "ooty-tour-packages",
    description: "Perfect short getaway covering the best of Ooty with comfortable sightseeing and accommodation.",
    highlights: ["Ooty Local Sightseeing", "Coonoor/Pykara Tour", "Hotel Stay", "Transport Included"],
    itinerary: [
      { day: 1, title: "Ooty Pickup → Ooty Local Sightseeing → Hotel Drop", details: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Thread Garden, Ooty Lake, Wax Museum." },
      { day: 2, title: "Hotel Pickup → Coonoor / Pykara Sightseeing → Ooty Drop", details: "Explore Coonoor or Pykara scenic spots before returning to Ooty." },
    ],
    image: "/assets/1111.jpeg",
  },
  {
    id: "2d1n-alt",
    title: "Ooty 2-Day Complete Package",
    duration: "2 Days / 1 Night",
    slug: "ooty-tour-packages",
    description: "Want to cover all major places in Ooty in 2 days? Here you go!",
    highlights: ["Pykara + Half Ooty Day 1", "Coonoor + Remaining Ooty Day 2", "Hotel Stay", "Transport Included"],
    itinerary: [
      { day: 1, title: "Ooty Pickup → Pykara + Half Ooty Sightseeing → Hotel", details: "Pykara Lake, Waterfalls, Pine Forest, and half of Ooty's attractions." },
      { day: 2, title: "Hotel Pickup → Coonoor Sightseeing + Remaining Ooty Places → Ooty Drop", details: "Complete Coonoor sightseeing and remaining Ooty attractions." },
    ],
    image: "/assets/222.jpg",
  },
  {
    id: "3d2n",
    title: "Ooty 3D/2N Tour Package",
    duration: "3 Days / 2 Nights",
    slug: "ooty-tour-packages",
    description: "The most popular package covering Ooty, Pykara, and Coonoor with comfortable hotel stays.",
    highlights: ["Ooty Local Sightseeing", "Pykara/Mudumalai Tour", "Coonoor Sightseeing", "2 Hotel Nights"],
    itinerary: [
      { day: 1, title: "Ooty Local Pickup → Ooty Local Sightseeing → Hotel Drop", details: "Explore all major Ooty attractions at your own pace." },
      { day: 2, title: "Hotel Pickup → Pykara / Mudumalai Sightseeing → Hotel", details: "Visit Pykara Lake, Waterfalls, Pine Forest and optionally Mudumalai." },
      { day: 3, title: "Hotel Pickup → Coonoor Sightseeing → Ooty Drop", details: "Full Coonoor sightseeing including viewpoints, tea gardens, and parks." },
    ],
    image: "/assets/333.jpg",
  },
  {
    id: "4d3n",
    title: "Ooty 4D/3N Tour Package",
    duration: "4 Days / 3 Nights",
    slug: "ooty-tour-packages",
    description: "An extended Ooty tour covering all attractions including Avalanche and Kotagiri.",
    highlights: ["Ooty Sightseeing", "Pykara/Mudumalai", "Coonoor Tour", "Avalanche/Kotagiri", "3 Hotel Nights"],
    itinerary: [
      { day: 1, title: "Ooty Local Pickup → Ooty Local Sightseeing → Hotel", details: "Cover major Ooty attractions." },
      { day: 2, title: "Hotel Pickup → Pykara / Mudumalai Sightseeing → Hotel", details: "Explore Pykara and optionally Mudumalai wildlife." },
      { day: 3, title: "Hotel Pickup → Coonoor Sightseeing → Hotel", details: "Full Coonoor sightseeing tour." },
      { day: 4, title: "Hotel Pickup → Avalanche / Kotagiri Sightseeing → Ooty Drop", details: "Explore Avalanche or Kotagiri's hidden gems." },
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "ooty-kodaikanal",
    title: "Ooty & Kodaikanal Tour Package",
    duration: "5 Days / 4 Nights",
    slug: "kodaikanal-tour-packages",
    description: "Explore two of South India's most beautiful hill stations — Ooty and Kodaikanal.",
    highlights: ["2 Nights Ooty", "2 Nights Kodaikanal", "Coonoor Sightseeing", "Kodaikanal Sightseeing"],
    itinerary: [
      { day: 1, title: "Coimbatore Pickup → Drive to Ooty → Half-day Pykara Sightseeing → Hotel", details: "Airport/railway pickup, scenic drive to Ooty, Pykara exploration." },
      { day: 2, title: "Ooty Hotel Pickup → Ooty Local Sightseeing → Hotel", details: "Full day Ooty sightseeing." },
      { day: 3, title: "Hotel Checkout → Coonoor Sightseeing → Drive to Kodaikanal → Hotel", details: "Coonoor on the way, then drive to Kodaikanal." },
      { day: 4, title: "Kodaikanal Hotel Pickup → Local Sightseeing → Hotel", details: "Green Valley View, Guna Caves, Pine Forest, Pillar Rocks, Coaker's Walk, Bryant Park, Lake." },
      { day: 5, title: "Hotel Checkout → Drive to Coimbatore → Drop", details: "Drive back to Coimbatore for onward journey." },
    ],
    image: "https://images.unsplash.com/photo-1596394723269-e1b58a1e6d8a?w=800&q=80",
  },
  {
    id: "ooty-wayanad",
    title: "Ooty & Wayanad Tour Package",
    duration: "5 Days / 4 Nights",
    slug: "wayanad-tour-packages",
    description: "Experience the beauty of Ooty and Wayanad with stunning nature and wildlife.",
    highlights: ["2 Nights Ooty", "2 Nights Wayanad", "Pykara Sightseeing", "Wayanad Exploration"],
    itinerary: [
      { day: 1, title: "Ooty / Coimbatore Pickup → Drive to Ooty → Coonoor Sightseeing → Hotel", details: "Pickup and scenic drive with Coonoor stops." },
      { day: 2, title: "Hotel Pickup → Ooty Local Sightseeing → Hotel", details: "Full day Ooty exploration." },
      { day: 3, title: "Hotel Checkout → Drive to Wayanad → Pykara on the Way → Hotel", details: "Scenic drive through Pykara to Wayanad." },
      { day: 4, title: "Wayanad Hotel Pickup → Local Sightseeing → Hotel", details: "Edakkal Caves, Karapuzha Dam, Banasura Dam, Pookode Lake." },
      { day: 5, title: "Hotel Checkout → Drive to Coimbatore/Calicut → Drop", details: "Drop at airport or railway station." },
    ],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "ooty-mysore",
    title: "Ooty & Mysore Tour Package",
    duration: "5 Days / 4 Nights",
    slug: "mysore-tour-packages",
    description: "Combine the hill station charm of Ooty with the royal heritage of Mysore.",
    highlights: ["2 Nights Ooty", "2 Nights Mysore", "Coonoor Sightseeing", "Mysore Palace Tour"],
    itinerary: [
      { day: 1, title: "Coimbatore Pickup → Drive to Ooty → Coonoor Sightseeing → Hotel", details: "Pickup and drive through Coonoor to Ooty." },
      { day: 2, title: "Hotel Pickup → Ooty Local Sightseeing → Hotel", details: "Full day Ooty sightseeing." },
      { day: 3, title: "Hotel Checkout → Drive to Mysore → Pykara on the Way → Hotel", details: "Scenic drive via Pykara to Mysore." },
      { day: 4, title: "Mysore Hotel Pickup → Local Sightseeing → Hotel", details: "Mysore Palace, Zoo, Chamundeshwari Temple, Brindavan Gardens." },
      { day: 5, title: "Hotel Checkout → Remaining Mysore Sightseeing → Drop", details: "Remaining attractions and drop at Mysore/Bangalore." },
    ],
    image: "https://images.unsplash.com/photo-1600100397608-e1e5e3c7e4e3?w=800&q=80",
  },
];

export interface RoundTrip {
  id: string;
  title: string;
  route: string;
  destinations: string[];
  image: string;
}

export const ROUND_TRIPS: RoundTrip[] = [
  {
    id: "trip-a",
    title: "Package A",
    route: "Bangalore → Mysore → Coorg → Wayanad → Ooty → Kodaikanal → Coimbatore",
    destinations: ["Bangalore", "Mysore", "Coorg", "Wayanad", "Ooty", "Kodaikanal", "Coimbatore"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "trip-b",
    title: "Package B",
    route: "Coimbatore → Ooty → Wayanad → Coorg → Mysore → Bangalore",
    destinations: ["Coimbatore", "Ooty", "Wayanad", "Coorg", "Mysore", "Bangalore"],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
  },
  {
    id: "trip-c",
    title: "Package C",
    route: "Coimbatore → Ooty → Kodaikanal → Madurai → Rameshwaram → Madurai Drop",
    destinations: ["Coimbatore", "Ooty", "Kodaikanal", "Madurai", "Rameshwaram"],
    image: "https://images.unsplash.com/photo-1596394723269-e1b58a1e6d8a?w=800&q=80",
  },
];

export const OUTSTATION_DESTINATIONS = [
  "Coimbatore", "Mysore", "Bangalore", "Coorg", "Wayanad",
  "Kodaikanal", "Rameshwaram", "Chennai", "Madurai", "All Over South India",
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Ooty Packages", href: "/ooty-tour-packages" },
  { label: "Ooty Sightseeing", href: "/ooty-sightseeing" },
  { label: "Kodaikanal", href: "/kodaikanal-tour-packages" },
  { label: "Wayanad", href: "/wayanad-tour-packages" },
  { label: "Mysore", href: "/mysore-tour-packages" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  { title: "Ooty Local Sightseeing", description: "Comfortable sightseeing around Ooty and nearby destinations.", icon: "eye" },
  { title: "Outstation Pickup & Drop", description: "Pickup and drop services across major South Indian destinations.", icon: "map" },
  { title: "Airport Pickup & Drop", description: "Coimbatore, Calicut and other convenient airports.", icon: "plane" },
  { title: "Railway Station Pickup & Drop", description: "Convenient railway station transfers.", icon: "train" },
  { title: "Auto Service", description: `Contact Zubair: ${CONTACTS.zubair.displayPhone}`, icon: "car" },
  { title: "Homestay", description: `Contact Samsudheen: ${CONTACTS.samsudheen.displayPhone}`, icon: "home" },
  { title: "Customized Tours", description: "Build your own itinerary according to your travel requirements.", icon: "settings" },
];

export const GALLERY_CATEGORIES = [
  "All", "Ooty", "Coonoor", "Pykara", "Kodaikanal", "Wayanad", "Mysore", "Vehicles",
];

export const GALLERY_ITEMS = [
  // Ooty
  { id: 1, category: "Ooty", title: "Doddabetta Peak", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { id: 2, category: "Ooty", title: "Ooty Lake", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  { id: 3, category: "Ooty", title: "Botanical Garden", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" },
  { id: 4, category: "Ooty", title: "Rose Garden", image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=80" },
  { id: 5, category: "Ooty", title: "Tea Gardens", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  // Coonoor
  { id: 6, category: "Coonoor", title: "Tea Plantations", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  { id: 7, category: "Coonoor", title: "Lamb's Rock Viewpoint", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { id: 8, category: "Coonoor", title: "Dolphin's Nose", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80" },
  // Pykara
  { id: 9, category: "Pykara", title: "Pykara Lake", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  { id: 10, category: "Pykara", title: "Pine Forest", image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80" },
  { id: 11, category: "Pykara", title: "Pykara Waterfalls", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  // Kodaikanal
  { id: 12, category: "Kodaikanal", title: "Pillar Rocks", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { id: 13, category: "Kodaikanal", title: "Pine Forest", image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80" },
  { id: 14, category: "Kodaikanal", title: "Kodaikanal Lake", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  // Wayanad
  { id: 15, category: "Wayanad", title: "Edakkal Caves", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80" },
  { id: 16, category: "Wayanad", title: "Banasura Dam", image: "https://images.unsplash.com/photo-1432405972618-c6b0c0d40b2f?w=600&q=80" },
  // Mysore
  { id: 17, category: "Mysore", title: "Mysore Palace", image: "https://images.unsplash.com/photo-1600100397608-e1e5e3c7e4e3?w=600&q=80" },
  { id: 18, category: "Mysore", title: "Brindavan Gardens", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" },
  // Vehicles
  { id: 19, category: "Vehicles", title: "Travel Vehicle", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80" },
];
