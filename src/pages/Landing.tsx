import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Phone, MessageCircle, MapPin, Eye, Mountain, TreePine, Waves,
  Compass, Camera, ChevronRight, ArrowRight, Mail, Car,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import EnquiryForm from "@/components/EnquiryForm";
import {
  CONTACTS, whatsappLink, callLink,
  GALLERY_CATEGORIES, GALLERY_ITEMS, PACKAGES,
} from "@/data/siteData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const landingStructuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Ooty Trevio Tours and Travels",
  description:
    "Best Ooty tour packages, sightseeing, taxi service, and travel packages. Book Ooty to Kodaikanal, Wayanad, Mysore, Coonoor, Pykara tours with comfortable vehicles.",
  url: "https://ootyvacationtours.com",
  telephone: "+918056681851",
  email: "1212ashrafashu@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ooty",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.4102,
    longitude: 76.695,
  },
  sameAs: [],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

// Sightseeing categories with cover images and links
const SIGHTSEEING_CATEGORIES = [
  {
    title: "Ooty Sightseeing",
    description: "Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Ooty Lake & more",
    image: "/assets/oot.jpg",
    link: "/ooty-sightseeing",
    icon: <Mountain className="w-6 h-6" />,
    places: 7,
  },
  {
    title: "Coonoor Sightseeing",
    description: "Sims Park, Lamb's Rock, Dolphin's Nose, Tea Garden & scenic viewpoints",
    image: "/assets/kv.jpg",
    link: "/coonoor-sightseeing",
    icon: <TreePine className="w-6 h-6" />,
    places: 7,
  },
  {
    title: "Pykara Sightseeing",
    description: "Pykara Lake, Waterfalls, Pine Forest, Tree Park & shooting spots",
    image: "/assets/pk1.jpg",
    link: "/pykara-sightseeing",
    icon: <Waves className="w-6 h-6" />,
    places: 6,
  },
  {
    title: "Avalanche Sightseeing",
    description: "Emerald Lake, Avalanche Lake, Forest trails & pristine nature",
    image: "/assets/a1.jpg",
    link: "/avalanche-sightseeing",
    icon: <Compass className="w-6 h-6" />,
    places: 5,
  },
];

// Tour packages with cover images and links
const TOUR_CATEGORIES = [
  {
    title: "Ooty Tour Packages",
    description: "2D/1N, 3D/2N, 4D/3N packages covering all major attractions in Ooty",
    image: "/assets/oo1.jpg",
    link: "/ooty-tour-packages",
    icon: <Camera className="w-6 h-6" />,
    duration: "2-4 Days",
  },
  {
    title: "Kodaikanal Tour Packages",
    description: "Explore the Princess of Hill Stations — lakes, caves, forests & viewpoints",
    image: "/assets/q1.jpg",
    link: "/kodaikanal-tour-packages",
    icon: <Mountain className="w-6 h-6" />,
    duration: "2-3 Days",
  },
  {
    title: "Wayanad Tour Packages",
    description: "Discover Wayanad's caves, dams, lakes & lush green landscapes",
    image: "/assets/p1.jpg",
    link: "/wayanad-tour-packages",
    icon: <TreePine className="w-6 h-6" />,
    duration: "2-3 Days",
  },
  {
    title: "Mysore Tour Packages",
    description: "Palace, Zoo, temples, gardens & the royal heritage of Mysore",
    image: "/assets/m1.jpg",
    link: "/mysore-tour-packages",
    icon: <Compass className="w-6 h-6" />,
    duration: "1-2 Days",
  },
];

export default function Landing() {
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredGallery =
    galleryFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  return (
    <PageLayout
      title="Best Ooty Tour Packages, Sightseeing & Travel - Ooty Trevio Tours and Travels"
      description="Book the best Ooty tour packages, sightseeing, taxi service and travel packages. Ooty to Kodaikanal, Wayanad, Mysore, Coonoor, Pykara tours with comfortable vehicles. Best travels in Ooty."
      keywords="Ooty tour packages, Ooty sightseeing, Ooty taxi service, Ooty cab service, best travels in Ooty, Ooty vacation packages, Ooty family tour packages, Ooty honeymoon packages, Coonoor sightseeing, Pykara tour, Kodaikanal tour, Wayanad tour, Mysore tour, Ooty local sightseeing, Ooty to Kodaikanal tour, Ooty to Wayanad tour, Ooty to Mysore tour, Ooty to Coonoor tour, taxi in Ooty, travel in Ooty, sightseeing in Ooty"
      ogImage="/assets/oo1.jpg"
      ogUrl="https://ootyvacationtours.com"
      structuredData={landingStructuredData}
    >
      {/* ========== HERO ========== */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/oo1.jpg"
            alt="Scenic view of Ooty mountains and tea gardens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Explore Ooty with{" "}
              <span className="text-emerald-400">Ooty Trevio</span>{" "}
              Tours & Travels
            </h1>
            <p className="text-xl lg:text-2xl text-stone-200 font-medium mb-4">
              Best Ooty Tour Packages, Sightseeing & Outstation Trips
            </p>
            <p className="text-base lg:text-lg text-stone-300 mb-8 leading-relaxed max-w-2xl">
              Discover the beauty of Ooty, Coonoor, Pykara, Avalanche and nearby destinations
              with comfortable travel, local sightseeing and personalized tour packages.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                to="/ooty-tour-packages"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors shadow-lg"
              >
                Explore Packages
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500/20 hover:bg-emerald-500/30 text-white font-semibold rounded-xl border border-emerald-400/40 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
              <a
                href={callLink(CONTACTS.ashraf.phone)}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Ooty", "Coonoor", "Pykara", "Avalanche", "Kodaikanal",
                "Wayanad", "Mysore",
              ].map((place) => (
                <span
                  key={place}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium rounded-full border border-white/10"
                >
                  {place}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== POPULAR TOUR PACKAGES ========== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Popular Ooty Tour Packages
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Choose from our carefully crafted tour packages — click to view full details
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {TOUR_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={cat.link}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200"
                >
                  <div className="relative h-28 sm:h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                    <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-emerald-600 text-white text-[10px] sm:text-xs font-semibold rounded-full">
                      {cat.duration}
                    </span>
                  </div>
                  <div className="p-3 sm:p-5">
                    <h3 className="text-sm sm:text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors mb-1 sm:mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mb-2 sm:mb-4 leading-relaxed hidden sm:block">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-1 text-emerald-600 font-semibold text-xs sm:text-sm">
                      View Details
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SIGHTSEEING PACKAGES ========== */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Sightseeing Packages
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Explore stunning viewpoints, gardens, and attractions — click to see all places
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {SIGHTSEEING_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={cat.link}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200"
                >
                  <div className="relative h-28 sm:h-48 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                    <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-0.5 sm:px-3 sm:py-1 bg-white/90 text-stone-700 text-[10px] sm:text-xs font-semibold rounded-full backdrop-blur-sm">
                      {cat.places} Places
                    </span>
                  </div>
                  <div className="p-3 sm:p-5">
                    <h3 className="text-sm sm:text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors mb-1 sm:mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mb-2 sm:mb-4 leading-relaxed hidden sm:block">
                      {cat.description}
                    </p>
                    <div className="flex items-center gap-1 text-emerald-600 font-semibold text-xs sm:text-sm">
                      Explore Places
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUTSTATION TAXI ========== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-3xl bg-stone-900">
            <img
              src="/assets/mr.jpg"
              alt="Outstation taxi service from Ooty"
              className="w-full h-64 sm:h-80 object-cover opacity-50"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center p-8 sm:p-12">
              <div className="max-w-lg">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Outstation Pickup & Drop
                </h2>
                <p className="text-stone-300 mb-6 leading-relaxed">
                  Reliable taxi and cab services from Ooty to Kodaikanal, Wayanad, Mysore, Coimbatore and across South India.
                </p>
                <Link
                  to="/outstation-taxi"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
                >
                  View All Routes
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== BANNER IMAGE ========== */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/assets/bb.jpg"
            alt="Ooty Trevio Tours and Travels"
            className="w-full h-auto rounded-2xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Our Travel Services
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Comprehensive travel services for a hassle-free experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Eye className="w-6 h-6" />, title: "Ooty Local Sightseeing", desc: "Comfortable sightseeing around Ooty and nearby destinations." },
              { icon: <Car className="w-6 h-6" />, title: "Outstation Pickup & Drop", desc: "Pickup and drop services across major South Indian destinations." },
              { icon: <MapPin className="w-6 h-6" />, title: "Airport & Railway Pickup", desc: "Coimbatore, Calicut and other convenient airports and stations." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== GALLERY ========== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Our Travel Gallery
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Capturing the beauty of South India through our travel experiences
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  galleryFilter === cat
                    ? "bg-emerald-600 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setLightbox(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300 flex items-end p-3">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 border border-stone-200 hover:border-stone-300 text-stone-700 font-semibold rounded-xl transition-colors"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== ENQUIRY FORM ========== */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Plan Your Ooty Trip
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you with the best package details
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-stone-100"
          >
            <EnquiryForm />
          </motion.div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Contact Ooty Trevio Tours and Travels
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: CONTACTS.ashraf.name,
                phone: CONTACTS.ashraf.phone,
                display: CONTACTS.ashraf.displayPhone,
                role: "Tour Operator",
              },
              {
                name: CONTACTS.zubair.name,
                phone: CONTACTS.zubair.phone,
                display: CONTACTS.zubair.displayPhone,
                role: "Auto Service",
              },
              {
                name: CONTACTS.samsudheen.name,
                phone: CONTACTS.samsudheen.phone,
                display: CONTACTS.samsudheen.displayPhone,
                role: "Homestay",
              },
              {
                name: "Email Us",
                phone: "",
                display: CONTACTS.email,
                role: "General Enquiries",
                isEmail: true,
              },
            ].map((contact) => (
              <div
                key={contact.name}
                className="p-6 bg-stone-50 rounded-2xl border border-stone-100 text-center"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  {contact.isEmail ? <Mail className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
                </div>
                <h3 className="font-semibold text-stone-900 mb-1">{contact.name}</h3>
                <p className="text-xs text-stone-400 mb-3">{contact.role}</p>
                {contact.isEmail ? (
                  <a
                    href={`mailto:${contact.display}`}
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors break-all"
                  >
                    {contact.display}
                  </a>
                ) : (
                  <a
                    href={callLink(contact.phone)}
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors"
                  >
                    {contact.display}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-stone-500 text-sm">
              <MapPin className="w-4 h-4" />
              Ooty, Tamil Nadu, India
            </div>
          </div>
        </div>
      </section>

      {/* ========== LIGHTBOX ========== */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl font-bold"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
        </div>
      )}
    </PageLayout>
  );
}
