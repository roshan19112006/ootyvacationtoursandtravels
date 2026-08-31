import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SightseeingCard from "@/components/SightseeingCard";
import EnquiryForm from "@/components/EnquiryForm";
import { WAYANAD_SIGHTSEEING, whatsappLink, CONTACTS } from "@/data/siteData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function WayanadTourPackages() {
  return (
    <PageLayout
      title="Wayanad Tour Packages | Ooty Vacation Tours & Travels"
      description="Explore Wayanad's Edakkal Caves, Karapuzha Dam, Banasura Dam, and Pookode Lake with our Ooty to Wayanad tour packages."
    >
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="Wayanad tour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-stone-900/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Wayanad Tour Packages</h1>
            <p className="text-lg text-stone-300 max-w-2xl">Nature & Wildlife — experience Wayanad's ancient caves, dams, and lush green landscapes</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Ooty to Wayanad Tour Package</h2>
            <div className="bg-stone-50 rounded-2xl p-6 mb-6 border border-stone-100">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">5 Days / 4 Nights</span>
                <span className="px-3 py-1 bg-stone-200 text-stone-700 text-sm font-medium rounded-full">2 Nights Ooty + 2 Nights Wayanad</span>
              </div>
              <h3 className="font-semibold text-stone-900 mb-3">Day-wise Itinerary:</h3>
              <div className="space-y-3">
                {[
                  { day: 1, title: "Ooty / Coimbatore Pickup → Drive to Ooty → Coonoor Sightseeing on the way → Ooty Hotel" },
                  { day: 2, title: "Hotel Pickup → Ooty Local Sightseeing → Hotel" },
                  { day: 3, title: "Hotel Checkout → Drive to Wayanad → Pykara Sightseeing on the way → Wayanad Hotel" },
                  { day: 4, title: "Wayanad Hotel Pickup → Local Sightseeing → Hotel" },
                  { day: 5, title: "Hotel Checkout → Drive to Coimbatore / Calicut Airport or Railway Station → Drop" },
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
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Wayanad Sightseeing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WAYANAD_SIGHTSEEING.map((place, i) => (
              <SightseeingCard key={place.name} {...place} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Enquire for Wayanad Package</h2>
          <EnquiryForm
            context={{
              defaultDestination: "Wayanad",
              packages: [
                "Wayanad Sightseeing Day Trip",
                "Ooty & Wayanad 5D/4N",
                "Calicut to Wayanad",
                "Custom Wayanad Package",
                "Not Sure Yet",
              ],
            }}
          />
        </div>
      </section>

      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Book Your Wayanad Trip</h2>
          <a href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I'm interested in the Wayanad Tour Package. Please share details.")}
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
