import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SightseeingCard from "@/components/SightseeingCard";
import { COONOOR_SIGHTSEEING, whatsappLink, CONTACTS } from "@/data/siteData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function CoonoorSightseeing() {
  return (
    <PageLayout
      title="Coonoor Sightseeing - Valley View, Sims Park, Dolphin's Nose"
      description="Explore Coonoor's scenic viewpoints, tea gardens, Sims Park, Lamb's Rock, Dolphin's Nose and more with our guided tours. Ooty to Coonoor sightseeing packages."
      keywords="Coonoor sightseeing, Ooty to Coonoor tour, Valley View Coonoor, Sims Park, Lamb's Rock, Dolphin's Nose, tea garden Coonoor, Coonoor tourist places, Coonoor taxi service"
    >
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-stone-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Coonoor Sightseeing</h1>
            <p className="text-lg text-stone-300 max-w-2xl">Explore Coonoor's stunning viewpoints, tea gardens, and parks</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Coonoor Sightseeing Tour</h2>
            <p className="text-stone-500 leading-relaxed mb-4">
              Coonoor is a charming hill station just 20 km from Ooty, known for its spectacular viewpoints, 
              lush tea estates, and serene parks. Our Coonoor sightseeing tour covers all major attractions 
              including Valley View, Sims Park, Lamb's Rock, Dolphin's Nose, and the famous tea gardens.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COONOOR_SIGHTSEEING.map((place, i) => (
              <SightseeingCard key={place.name} {...place} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Book Your Coonoor Tour</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Experience the beauty of Coonoor with our guided sightseeing packages
          </p>
          <a href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I'm interested in Coonoor Sightseeing Package. Please share details.")}
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
