import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SightseeingCard from "@/components/SightseeingCard";
import { OOTY_SIGHTSEEING, whatsappLink, CONTACTS } from "@/data/siteData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ootySightseeingStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ooty Sightseeing Places",
  description: "Popular sightseeing places in Ooty including Doddabetta Peak, Tea Museum, Botanical Garden",
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "TouristAttraction", name: "Doddabetta Peak" } },
    { "@type": "ListItem", position: 2, item: { "@type": "TouristAttraction", name: "Tea Museum" } },
    { "@type": "ListItem", position: 3, item: { "@type": "TouristAttraction", name: "Botanical Garden" } },
    { "@type": "ListItem", position: 4, item: { "@type": "TouristAttraction", name: "Rose Garden" } },
    { "@type": "ListItem", position: 5, item: { "@type": "TouristAttraction", name: "Ooty Lake" } },
  ],
};

export default function OotySightseeing() {
  return (
    <PageLayout
      title="Ooty Sightseeing Packages - Best Local Sightseeing in Ooty"
      description="Explore Ooty's best attractions with our sightseeing packages. Visit Doddabetta Peak, Tea Museum, Botanical Garden, Rose Garden, Thread Garden, Ooty Lake and more. Best Ooty local sightseeing service."
      keywords="Ooty sightseeing, Ooty local sightseeing, sightseeing in Ooty, Ooty tourist places, Doddabetta Peak, Tea Museum, Botanical Garden Ooty, Rose Garden Ooty, Ooty Lake, Ooty sightseeing packages, Ooty cab service"
      ogImage="/assets/121.jpg"
      structuredData={ootySightseeingStructuredData}
    >
      {/* Hero */}
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-stone-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ooty Sightseeing Packages
            </h1>
            <p className="text-lg text-stone-300 max-w-2xl">
              Discover the best of Ooty's local attractions with our guided sightseeing tours
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              Best Ooty Local Sightseeing Packages
            </h2>
            <p className="text-stone-500 leading-relaxed mb-4">
              Ooty, the Queen of the Nilgiris, offers some of the most breathtaking sightseeing
              experiences in South India. From the panoramic views at Doddabetta Peak to the
              fragrant Rose Garden, every corner of Ooty has something magical to offer.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6">
              Our Ooty sightseeing packages cover all major attractions including Doddabetta Peak,
              Tea Museum, Wax Museum, Botanical Garden, Rose Garden, Thread Garden, and the
              picturesque Ooty Lake. We ensure comfortable travel with well-maintained vehicles
              and knowledgeable local guides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sightseeing Cards */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {OOTY_SIGHTSEEING.map((place, i) => (
              <SightseeingCard key={place.name} {...place} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Book Your Ooty Sightseeing Package
          </h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Get the best sightseeing experience with comfortable transport and expert local knowledge
          </p>
          <a
            href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I'm interested in Ooty Sightseeing Package. Please share details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Enquire on WhatsApp
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
