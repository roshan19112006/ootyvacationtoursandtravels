import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import EnquiryForm from "@/components/EnquiryForm";
import { CONTACTS, whatsappLink, callLink } from "@/data/siteData";

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Ooty Trevio Tours and Travels",
  telephone: "+918056681851",
  email: "1212ashrafashu@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ooty",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};

export default function Contact() {
  return (
    <PageLayout
      title="Contact Ooty Trevio Tours and Travels - WhatsApp, Call, Email"
      description="Contact Ooty Trevio Tours and Travels for tour packages, sightseeing, taxi service, and customized travel. WhatsApp or call us for best travel deals in Ooty."
      keywords="contact Ooty travels, Ooty travel agency contact, Ooty taxi booking, Ooty tour enquiry, WhatsApp Ooty travels, Ooty travel phone number"
      structuredData={contactStructuredData}
    >
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-stone-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-stone-300 max-w-2xl">Get in touch for tour packages, sightseeing, and travel services</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: CONTACTS.ashraf.name, phone: CONTACTS.ashraf.phone, display: CONTACTS.ashraf.displayPhone, role: "Tour Operator", whatsapp: true },
              { name: CONTACTS.zubair.name, phone: CONTACTS.zubair.phone, display: CONTACTS.zubair.displayPhone, role: "Auto Service", whatsapp: true },
              { name: CONTACTS.samsudheen.name, phone: CONTACTS.samsudheen.phone, display: CONTACTS.samsudheen.displayPhone, role: "Homestay", whatsapp: false },
              { name: "Email Us", phone: "", display: CONTACTS.email, role: "General Enquiries", isEmail: true },
            ].map((c) => (
              <div key={c.name} className="p-6 bg-stone-50 rounded-2xl border border-stone-100 text-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  {c.isEmail ? <Mail className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
                </div>
                <h3 className="font-semibold text-stone-900 mb-1">{c.name}</h3>
                <p className="text-xs text-stone-400 mb-3">{c.role}</p>
                {c.isEmail ? (
                  <a href={`mailto:${c.display}`} className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors break-all">
                    {c.display}
                  </a>
                ) : (
                  <a href={callLink(c.phone)} className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors block mb-2">
                    {c.display}
                  </a>
                )}
                {c.whatsapp && (
                  <a href={whatsappLink(c.phone)} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 mt-2">
                    <MessageCircle className="w-3 h-3" /> WhatsApp
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

      {/* Map Placeholder */}
      <section className="h-96 bg-stone-200 flex items-center justify-center">
        <div className="text-center text-stone-500">
          <MapPin className="w-12 h-12 mx-auto mb-3 text-stone-400" />
          <p className="text-lg font-medium">Google Maps</p>
          <p className="text-sm">Location pin available once provided by the client</p>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Send Us an Enquiry</h2>
          <EnquiryForm />
        </div>
      </section>
      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Contact the Best Travels in Ooty</h2>
          <div className="text-stone-600 leading-relaxed space-y-3 text-sm sm:text-base">
            <p>
              Planning a trip to Ooty? <strong>Ooty Trevio Tours & Travels</strong> is your trusted travel partner for <strong>Ooty tour packages</strong>, <strong>Ooty sightseeing</strong>, <strong>Ooty taxi service</strong>, and <strong>Ooty cab service</strong>. Contact us for customized travel solutions including <strong>Ooty to Kodaikanal tour</strong>, <strong>Ooty to Wayanad tour package</strong>, <strong>Ooty to Mysore tour</strong>, and <strong>Ooty to Coonoor sightseeing</strong>.
            </p>
            <p>
              Reach us via <strong>WhatsApp</strong> at 8056681851 or call us for instant booking. We offer <strong>Ooty local sightseeing packages</strong>, <strong>Ooty family tour packages</strong>, <strong>Ooty honeymoon packages</strong>, <strong>outstation taxi from Ooty</strong>, <strong>airport pickup and drop</strong>, and <strong>railway station transfer services</strong> across Tamil Nadu, Kerala, and Karnataka.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Taxi in Ooty", "Travels in Ooty", "Ooty Tour Packages", "Ooty Cab Service", "Ooty Sightseeing", "Best Travels in Ooty", "Airport Pickup Ooty", "Outstation Taxi Ooty"].map((tag) => (
              <span key={tag} className="inline-block bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
