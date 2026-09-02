import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Star, Shield, Compass, Heart, Phone, MessageCircle, MapPin,
  Eye, Car, Plane, Train, Home, Settings, ChevronRight, ArrowRight, Mail,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import EnquiryForm from "@/components/EnquiryForm";
import SightseeingSection from "@/components/SightseeingSection";
import {
  DESTINATIONS, PACKAGES, OOTY_SIGHTSEEING, COONOOR_SIGHTSEEING,
  PYKARA_SIGHTSEEING, AVALANCHE_SIGHTSEEING, CONTACTS, whatsappLink,
  callLink, GALLERY_CATEGORIES, GALLERY_ITEMS, SERVICES, ROUND_TRIPS,
  OUTSTATION_DESTINATIONS,
} from "@/data/siteData";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  eye: <Eye className="w-6 h-6" />,
  map: <MapPin className="w-6 h-6" />,
  plane: <Plane className="w-6 h-6" />,
  train: <Train className="w-6 h-6" />,
  car: <Car className="w-6 h-6" />,
  home: <Home className="w-6 h-6" />,
  settings: <Settings className="w-6 h-6" />,
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Landing() {
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredGallery =
    galleryFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === galleryFilter);

  return (
    <PageLayout>
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
              <span className="text-emerald-400">Ooty Vacation</span>{" "}
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

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Why Choose Ooty Vacation Tours & Travels?
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Your trusted partner for exploring the beauty of South India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Compass className="w-6 h-6" />,
                title: "Local Ooty Experience",
                desc: "Explore Ooty with local travel assistance and sightseeing knowledge.",
              },
              {
                icon: <Car className="w-6 h-6" />,
                title: "Comfortable Travel",
                desc: "Comfortable vehicles for families, couples and groups.",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Customized Packages",
                desc: "Create your trip according to your schedule and requirements.",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Multiple Destinations",
                desc: "Ooty, Coonoor, Pykara, Avalanche, Kodaikanal, Wayanad, Mysore and more.",
              },
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Easy Booking",
                desc: "Quick booking and enquiry through WhatsApp and phone.",
              },
              {
                icon: <Plane className="w-6 h-6" />,
                title: "Pickup & Drop",
                desc: "Pickup and drop services from airports, railway stations and major destinations.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OOTY SIGHTSEEING ========== */}
      <SightseeingSection
        title="Ooty Sightseeing Packages"
        description="Explore the best of Ooty's local attractions with our sightseeing packages"
        places={OOTY_SIGHTSEEING}
      />

      {/* ========== COONOOR SIGHTSEEING ========== */}
      <SightseeingSection
        title="Coonoor Sightseeing"
        description="Discover Coonoor's scenic viewpoints, tea gardens, and parks"
        places={COONOOR_SIGHTSEEING}
      />

      {/* ========== PYKARA SIGHTSEEING ========== */}
      <SightseeingSection
        title="Pykara Sightseeing"
        description="Experience the natural beauty of Pykara with lakes, forests, and waterfalls"
        places={PYKARA_SIGHTSEEING}
      />

      {/* ========== AVALANCHE SIGHTSEEING ========== */}
      <SightseeingSection
        title="Avalanche Sightseeing"
        description="Explore Avalanche's pristine forests, lakes, and wildlife"
        places={AVALANCHE_SIGHTSEEING}
      />

      {/* ========== MUDUMALAI ========== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-3xl bg-stone-900">
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
              alt="Mudumalai Jungle Safari"
              className="w-full h-64 sm:h-80 object-cover opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center p-8 sm:p-12">
              <div className="max-w-lg">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Mudumalai Jungle Safari
                </h2>
                <p className="text-stone-300 mb-6 leading-relaxed">
                  Experience the natural beauty and wildlife of Mudumalai with our sightseeing
                  and jungle safari travel options.
                </p>
                <a
                  href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I'm interested in the Mudumalai Jungle Safari package.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enquire Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== POPULAR PACKAGES ========== */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Popular Ooty Tour Packages
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Choose from our carefully crafted tour packages designed to give you the best experience
            </p>
          </motion.div>

          <div className="space-y-8">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-stone-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-1">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-48 lg:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl lg:text-2xl font-bold text-stone-900">
                        {pkg.title}
                      </h3>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                        {pkg.duration}
                      </span>
                    </div>
                    <p className="text-stone-500 mb-4">{pkg.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {pkg.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-stone-600">
                          <Star className="w-4 h-4 text-emerald-500 shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-6">
                      {pkg.itinerary.map((day) => (
                        <div key={day.day} className="text-sm">
                          <span className="font-semibold text-stone-800">Day {day.day}:</span>{" "}
                          <span className="text-stone-500">{day.title}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={whatsappLink(CONTACTS.ashraf.phone, `Hi, I'm interested in the ${pkg.title} (${pkg.duration}). Please share more details.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Enquire on WhatsApp
                      </a>
                      <a
                        href={callLink(CONTACTS.ashraf.phone)}
                        className="flex items-center gap-2 px-5 py-2.5 border border-stone-200 hover:border-stone-300 text-stone-700 text-sm font-semibold rounded-xl transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ROUND TRIP PACKAGES ========== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              South India Round Trip Packages
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Explore the best of South India with our curated round trip itineraries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROUND_TRIPS.map((trip, i) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-stone-900 mb-3">{trip.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trip.destinations.map((d, j) => (
                      <span key={d} className="flex items-center gap-1 text-sm text-stone-600">
                        {j > 0 && <ChevronRight className="w-3 h-3 text-stone-400" />}
                        <span className={j === 0 || j === trip.destinations.length - 1 ? "font-semibold text-emerald-700" : ""}>
                          {d}
                        </span>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={whatsappLink(CONTACTS.ashraf.phone, `Hi, I'm interested in ${trip.title}: ${trip.route}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Enquire
                    </a>
                    <a
                      href={callLink(CONTACTS.ashraf.phone)}
                      className="flex items-center gap-2 px-4 py-2 border border-stone-200 hover:border-stone-300 text-stone-700 text-sm font-semibold rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUTSTATION ========== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Outstation Pickup & Drop
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Reliable pickup and drop services to destinations across South India
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {OUTSTATION_DESTINATIONS.map((dest) => (
              <span
                key={dest}
                className="px-5 py-2.5 bg-stone-100 text-stone-700 text-sm font-medium rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {dest}
              </span>
            ))}
          </div>

          <div className="text-center">
            <a
              href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I need outstation pickup/drop service. Please share details.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Our Travel Services
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Comprehensive travel services for a hassle-free experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                  {SERVICE_ICONS[service.icon] || <Star className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{service.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
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
              Contact Ooty Vacation Tours & Travels
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
