import { Link } from "react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACTS, whatsappLink, callLink, NAV_LINKS } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/assets/lgg.jpeg"
                alt="Ooty Vacation Tours & Travels"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mb-6">
              Your trusted travel partner for Ooty sightseeing, hill station tours, outstation trips and customized South India travel packages.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={callLink(CONTACTS.ashraf.phone)}
                className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-medium rounded-lg transition-colors border border-stone-700"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Destinations
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Ooty", href: "/ooty-sightseeing" },
                { label: "Coonoor", href: "/coonoor-sightseeing" },
                { label: "Pykara", href: "/pykara-sightseeing" },
                { label: "Avalanche", href: "/avalanche-sightseeing" },
                { label: "Kodaikanal", href: "/kodaikanal-tour-packages" },
                { label: "Wayanad", href: "/wayanad-tour-packages" },
                { label: "Mysore", href: "/mysore-tour-packages" },
              ].map((dest) => (
                <li key={dest.href}>
                  <Link
                    to={dest.href}
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors"
                  >
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-stone-200">{CONTACTS.ashraf.name}</p>
                  <a
                    href={callLink(CONTACTS.ashraf.phone)}
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors"
                  >
                    {CONTACTS.ashraf.displayPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-stone-200">{CONTACTS.zubair.name}</p>
                  <a
                    href={callLink(CONTACTS.zubair.phone)}
                    className="text-sm text-stone-400 hover:text-emerald-400 transition-colors"
                  >
                    {CONTACTS.zubair.displayPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="text-sm text-stone-400 hover:text-emerald-400 transition-colors break-all"
                >
                  {CONTACTS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                <span className="text-sm text-stone-400">Ooty, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} Ooty Vacation Tours & Travels. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-stone-500">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
              <Link to="/gallery" className="hover:text-emerald-400 transition-colors">Gallery</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
