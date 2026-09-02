import { motion } from "framer-motion";
import { MessageCircle, Phone, Star } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import EnquiryForm from "@/components/EnquiryForm";
import { PACKAGES, whatsappLink, CONTACTS, callLink } from "@/data/siteData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ootyPackagesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ooty Tour Packages",
  description: "Best tour packages in Ooty for families, couples, and groups",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "TouristTrip",
        name: "Ooty 2D/1N Tour Package",
        description: "Perfect short getaway covering the best of Ooty with comfortable sightseeing and accommodation.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "TouristTrip",
        name: "Ooty 3D/2N Tour Package",
        description: "The most popular package covering Ooty, Pykara, and Coonoor with comfortable hotel stays.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "TouristTrip",
        name: "Ooty 4D/3N Tour Package",
        description: "An extended Ooty tour covering all attractions including Avalanche and Kotagiri.",
      },
    },
  ],
};

export default function OotyTourPackages() {
  return (
    <PageLayout
      title="Best Ooty Tour Packages - 2D/1N, 3D/2N, 4D/3N - Ooty Vacation Tours"
      description="Book the best Ooty tour packages with Ooty Vacation Tours & Travels. 2D/1N, 3D/2N, 4D/3N packages with sightseeing, accommodation, and transport. Best Ooty family tour packages and honeymoon packages."
      keywords="Ooty tour packages, Ooty vacation packages, Ooty family tour packages, Ooty honeymoon packages, 2 day Ooty tour, 3 day Ooty tour, Ooty sightseeing packages, Ooty cab service, best tour packages in Ooty"
      ogImage="/assets/1111.jpeg"
      structuredData={ootyPackagesStructuredData}
    >
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-stone-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Ooty Tour Packages</h1>
            <p className="text-lg text-stone-300 max-w-2xl">Best tour packages in Ooty for families, couples, and groups</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Best Ooty Tour Packages</h2>
            <p className="text-stone-500 leading-relaxed mb-4">
              We offer the best tour packages in Ooty designed to suit every traveler's needs. 
              Whether you're looking for a short 2-day getaway or an extended 5-day exploration, 
              our packages cover all major attractions with comfortable accommodation and transport.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {PACKAGES.filter((p) => p.id !== "ooty-kodaikanal" && p.id !== "ooty-wayanad" && p.id !== "ooty-mysore").map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-1">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 lg:h-full object-cover" loading="lazy" />
                </div>
                <div className="lg:col-span-2 p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-stone-900">{pkg.title}</h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">{pkg.duration}</span>
                  </div>
                  <p className="text-stone-500 mb-4">{pkg.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
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
                    <a href={whatsappLink(CONTACTS.ashraf.phone, `Hi, I'm interested in the ${pkg.title} (${pkg.duration}). Please share more details.`)}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      Enquire on WhatsApp
                    </a>
                    <a href={callLink(CONTACTS.ashraf.phone)}
                      className="flex items-center gap-2 px-5 py-2.5 border border-stone-200 hover:border-stone-300 text-stone-700 text-sm font-semibold rounded-xl transition-colors">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Enquire for Ooty Package</h2>
          <EnquiryForm
            context={{
              defaultDestination: "Ooty",
              packages: [
                "Ooty 2D/1N Package",
                "Ooty 2-Day Complete",
                "Ooty 3D/2N Package",
                "Ooty 4D/3N Package",
                "Ooty & Kodaikanal 5D/4N",
                "Ooty & Wayanad 5D/4N",
                "Ooty & Mysore 5D/4N",
                "Custom Package",
                "Not Sure Yet",
              ],
            }}
          />
        </div>
      </section>
    </PageLayout>
  );
}
