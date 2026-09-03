import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SightseeingCard from "@/components/SightseeingCard";
import { PYKARA_SIGHTSEEING, whatsappLink, CONTACTS } from "@/data/siteData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function PykaraSightseeing() {
  return (
    <PageLayout
      title="Pykara Sightseeing - Lake, Waterfalls, Pine Forest, Shooting Spot"
      description="Explore Pykara's beautiful lake, waterfalls, pine forest, and shooting spots with our guided tours. Ooty to Pykara tour packages."
      keywords="Pykara sightseeing, Ooty to Pykara tour, Pykara Lake, Pykara Waterfalls, Pine Forest Pykara, shooting spot Pykara, Pykara tourist places, Pykara tour packages"
    >
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-stone-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Pykara Sightseeing</h1>
            <p className="text-lg text-stone-300 max-w-2xl">Experience the natural beauty of Pykara with lakes, forests, and waterfalls</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Pykara Sightseeing Tour</h2>
            <p className="text-stone-500 leading-relaxed mb-4">
              Pykara is a beautiful destination located about 20 km from Ooty, famous for its pristine lake, 
              stunning waterfalls, and dense pine forests. The area also has popular film shooting spots 
              that attract visitors from across India.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PYKARA_SIGHTSEEING.map((place, i) => (
              <SightseeingCard key={place.name} {...place} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Book Your Pykara Tour</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Discover Pykara's breathtaking beauty with our expert-guided sightseeing packages
          </p>
          <a href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I'm interested in Pykara Sightseeing Package. Please share details.")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors">
            <MessageCircle className="w-5 h-5" />
            Enquire on WhatsApp
          </a>
        </div>
      </section>
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Ooty to Pykara Sightseeing — Ooty Trevio Tours & Travels</h2>
          <div className="text-stone-600 leading-relaxed space-y-3 text-sm sm:text-base">
            <p>Discover the natural beauty of Pykara with <strong>Ooty Trevio Tours & Travels</strong>. Our <strong>Ooty to Pykara tour</strong> covers Pykara Lake, Pykara Waterfalls, Pine Forest, Tree Park, and the famous Shooting Spot. Pykara is one of the most scenic destinations near Ooty with its pristine lake and cascading waterfalls.</p>
            <p>Book the best <strong>Pykara sightseeing package from Ooty</strong> with comfortable vehicles and knowledgeable drivers. We offer affordable <strong>Pykara tour packages</strong> for families, couples, and groups.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Pykara Sightseeing", "Ooty to Pykara Tour", "Pykara Tour Package", "Taxi in Ooty", "Ooty Sightseeing"].map((tag) => (
              <span key={tag} className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
