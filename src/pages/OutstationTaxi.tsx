import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { OUTSTATION_DESTINATIONS, whatsappLink, CONTACTS } from "@/data/siteData";

export default function OutstationTaxi() {
  return (
    <PageLayout
      title="Outstation Taxi Service from Ooty - Pickup & Drop Across South India"
      description="Reliable outstation taxi and pickup & drop services from Ooty to Coimbatore, Mysore, Bangalore, Coorg, Wayanad, Kodaikanal, and more. Best taxi service in Ooty."
      keywords="Ooty taxi service, Ooty cab service, outstation taxi Ooty, Ooty to Coimbatore taxi, Ooty to Mysore taxi, Ooty to Bangalore taxi, Ooty pickup drop, airport pickup Ooty, railway station pickup Ooty, best taxi in Ooty"
    >
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-stone-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Outstation Pickup & Drop</h1>
            <p className="text-lg text-stone-300 max-w-2xl">Reliable taxi services to destinations across South India</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">Destinations We Cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {OUTSTATION_DESTINATIONS.map((dest) => (
              <div key={dest} className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-stone-700 font-medium">{dest}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-stone-500 mb-6">
              We provide comfortable and reliable outstation taxi services to all major destinations in South India. 
              Contact us for pricing and availability.
            </p>
            <a href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I need outstation pickup/drop service. Please share details.")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors">
              <MessageCircle className="w-5 h-5" />
              Enquire Now
            </a>
          </div>
        </div>
      </section>
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Outstation Taxi Service from Ooty — Ooty Trevio Tours & Travels</h2>
          <div className="text-stone-600 leading-relaxed space-y-3 text-sm sm:text-base">
            <p>
              <strong>Ooty Trevio Tours & Travels</strong> provides reliable and affordable <strong>outstation taxi service from Ooty</strong> to all major destinations in South India. Travel to <strong>Kodaikanal</strong>, <strong>Wayanad</strong>, <strong>Mysore</strong>, <strong>Coorg</strong>, <strong>Coimbatore</strong>, <strong>Munnar</strong>, and more in comfortable AC vehicles with experienced drivers.
            </p>
            <p>
              We offer one-way drops, round-trip packages, and multi-day outstation tours from Ooty. Our fleet includes comfortable sedans and SUVs perfect for families, couples, and groups. We also provide <strong>Ooty airport pickup and drop</strong> from Coimbatore Airport and <strong>railway station transfers</strong>. Book the best <strong>outstation taxi from Ooty</strong> today.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Outstation Taxi Ooty", "Ooty Cab Service", "Ooty Taxi Service", "Taxi in Ooty", "Airport Pickup Ooty", "Ooty to Kodaikanal Taxi"].map((tag) => (
              <span key={tag} className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
