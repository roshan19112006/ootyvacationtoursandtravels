import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SightseeingCard from "@/components/SightseeingCard";
import EnquiryForm from "@/components/EnquiryForm";
import { MYSORE_SIGHTSEEING, whatsappLink, CONTACTS } from "@/data/siteData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const mysoreStructuredData = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Ooty to Mysore Tour Package",
  description: "5 Days / 4 Nights tour package covering Ooty and Mysore with sightseeing and accommodation",
  touristType: ["Family", "Couples", "Groups"],
};

export default function MysoreTourPackages() {
  return (
    <PageLayout
      title="Mysore Tour Packages from Ooty - Mysore Palace Sightseeing"
      description="Explore Mysore Palace, Zoo, Chamundeshwari Temple, Brindavan Gardens and more with our Ooty to Mysore tour packages. Book the best Mysore sightseeing package."
      keywords="Mysore tour packages, Ooty to Mysore tour, Mysore sightseeing, Mysore Palace, Mysore Zoo, Chamundeshwari Temple, Brindavan Gardens, Mysore tourist places, Mysore travel packages, Mysore taxi service"
      ogImage="/assets/kv4.jpg"
      structuredData={mysoreStructuredData}
    >
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-stone-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Mysore Tour Packages</h1>
            <p className="text-lg text-stone-300 max-w-2xl">Palaces & Heritage — experience the royal charm of Mysore</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Ooty to Mysore Tour Package</h2>
            <div className="bg-stone-50 rounded-2xl p-6 mb-6 border border-stone-100">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">5 Days / 4 Nights</span>
                <span className="px-3 py-1 bg-stone-200 text-stone-700 text-sm font-medium rounded-full">2 Nights Ooty + 2 Nights Mysore</span>
              </div>
              <p className="text-sm text-stone-500 mb-3">Pickup available from: Ooty, Coimbatore, Mysore, Bangalore, and other convenient locations.</p>
              <h3 className="font-semibold text-stone-900 mb-3">Day-wise Itinerary:</h3>
              <div className="space-y-3">
                {[
                  { day: 1, title: "Coimbatore Pickup → Drive to Ooty → Coonoor Sightseeing on the way → Ooty Hotel" },
                  { day: 2, title: "Hotel Pickup → Ooty Local Sightseeing → Hotel" },
                  { day: 3, title: "Hotel Checkout → Drive to Mysore → Pykara Sightseeing on the way → Mysore Hotel" },
                  { day: 4, title: "Mysore Hotel Pickup → Local Sightseeing → Hotel" },
                  { day: 5, title: "Hotel Checkout → Remaining Mysore Sightseeing → Drop at Mysore / Bangalore" },
                ].map((d) => (
                  <div key={d.day} className="flex gap-3">
                    <span className="w-16 shrink-0 text-sm font-semibold text-emerald-700">Day {d.day}</span>
                    <span className="text-sm text-stone-600">{d.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Mysore Sightseeing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MYSORE_SIGHTSEEING.map((place, i) => (
              <SightseeingCard key={place.name} {...place} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Enquire for Mysore Package</h2>
          <EnquiryForm
            context={{
              defaultDestination: "Mysore",
              packages: [
                "Mysore Sightseeing Day Trip",
                "Ooty & Mysore 5D/4N",
                "Bangalore to Mysore",
                "Custom Mysore Package",
                "Not Sure Yet",
              ],
            }}
          />
        </div>
      </section>

      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Book Your Mysore Trip</h2>
          <a href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I'm interested in the Mysore Tour Package. Please share details.")}
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
