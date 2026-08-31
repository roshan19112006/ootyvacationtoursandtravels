import { Phone, MessageCircle } from "lucide-react";
import { CONTACTS, whatsappLink, callLink } from "@/data/siteData";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={callLink(CONTACTS.ashraf.phone)}
        className="flex items-center justify-center w-14 h-14 bg-stone-800 hover:bg-stone-900 text-white rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
