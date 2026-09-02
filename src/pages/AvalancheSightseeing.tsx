import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SightseeingCard from "@/components/SightseeingCard";
import { AVALANCHE_SIGHTSEEING, whatsappLink, CONTACTS } from "@/data/siteData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AvalancheSightseeing() {
  return (
    <PageLayout
      title="Avalanche Sightseeing | Ooty Vacation Tours & Travels"
      description="Explore Avalanche's pristine forests, Emerald Lake, Avalanche Lake, and wildlife safari with our guided tours."
    >
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-stone-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Avalanche Sightseeing</h1>
            <p className="text-lg text-stone-300 max-w-2xl">Explore Avalanche's pristine forests, lakes, and wildlife</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Avalanche Sightseeing Tour</h2>
            <p className="text-stone-500 leading-relaxed mb-4">
              Avalanche is a stunning destination located about 28 km from Ooty, known for its pristine 
              forests, crystal-clear Emerald Lake, and Avalanche Lake. The area also offers wildlife 
              safari experiences through the Avalanche reserve forest.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AVALANCHE_SIGHTSEEING.map((place, i) => (
              <SightseeingCard key={place.name} {...place} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Book Your Avalanche Tour</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Experience the unspoiled beauty of Avalanche with our expert-guided tours
          </p>
          <a href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I'm interested in Avalanche Sightseeing Package. Please share details.")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors">
            <MessageCircle className="w-5 h-5" />
            Enquire on WhatsApp
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
