import { motion } from "framer-motion";
import { Eye, MapPin, Plane, Train, Car, Home, Settings, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import EnquiryForm from "@/components/EnquiryForm";
import { SERVICES, whatsappLink, CONTACTS } from "@/data/siteData";

const ICONS: Record<string, React.ReactNode> = {
  eye: <Eye className="w-8 h-8" />,
  map: <MapPin className="w-8 h-8" />,
  plane: <Plane className="w-8 h-8" />,
  train: <Train className="w-8 h-8" />,
  car: <Car className="w-8 h-8" />,
  home: <Home className="w-8 h-8" />,
  settings: <Settings className="w-8 h-8" />,
};

export default function Services() {
  return (
    <PageLayout
      title="Our Travel Services | Ooty Vacation Tours & Travels"
      description="Comprehensive travel services including sightseeing, airport pickup & drop, outstation trips, auto service, homestay, and customized tours."
    >
      <section className="relative h-64 sm:h-80 lg:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-stone-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Travel Services</h1>
            <p className="text-lg text-stone-300 max-w-2xl">Complete travel solutions for a hassle-free experience</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-5">
                  {ICONS[service.icon] || <Eye className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">Enquire About Our Services</h2>
          <EnquiryForm />
        </div>
      </section>

      <section className="py-16 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Need a Custom Service?</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Contact us for any travel requirement and we'll customize it for you
          </p>
          <a href={whatsappLink(CONTACTS.ashraf.phone, "Hi, I'd like to know more about your travel services.")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors">
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
