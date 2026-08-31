import { useState } from "react";
import { Send, Phone } from "lucide-react";
import { CONTACTS, whatsappLink, callLink } from "@/data/siteData";

const ALL_INTERESTS = [
  "Tour Package",
  "Sightseeing",
  "Auto Service",
  "Homestay",
  "Airport/Railway Pickup & Drop",
  "Outstation Trip",
  "Custom Trip",
];

const ALL_DESTINATIONS = [
  "Ooty", "Coonoor", "Pykara", "Avalanche", "Mudumalai", "Kodaikanal",
  "Wayanad", "Mysore", "Coorg", "Custom Trip",
];

const ALL_PACKAGES = [
  "Ooty 2D/1N Package", "Ooty 3D/2N Package", "Ooty 4D/3N Package",
  "Ooty & Kodaikanal 5D/4N", "Ooty & Wayanad 5D/4N",
  "Ooty & Mysore 5D/4N", "Not Sure Yet",
];

export interface EnquiryContext {
  /** Pre-selected destination in the dropdown */
  defaultDestination?: string;
  /** Page-specific packages to show instead of all */
  packages?: string[];
  /** Page-specific interests to show */
  interests?: string[];
}

function getRecipient(interest: string): { phone: string; label: string } {
  switch (interest) {
    case "Auto Service":
      return { phone: CONTACTS.zubair.phone, label: "Zubair (Auto)" };
    case "Homestay":
      return { phone: CONTACTS.samsudheen.phone, label: "Samsudheen (Homestay)" };
    default:
      return { phone: CONTACTS.ashraf.phone, label: "Ashraf (Tours)" };
  }
}

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  interest: string;
  travelDate: string;
  adults: string;
  children: string;
  destination: string;
  package: string;
  message: string;
}

export default function EnquiryForm({
  className = "",
  context,
}: {
  className?: string;
  context?: EnquiryContext;
}) {
  const interests = context?.interests || ALL_INTERESTS;
  const destinations = ALL_DESTINATIONS;
  const packages = context?.packages || ALL_PACKAGES;

  const [form, setForm] = useState<FormData>({
    fullName: "", phone: "", email: "", interest: "", travelDate: "",
    adults: "", children: "",
    destination: context?.defaultDestination || "",
    package: "", message: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const recipient = getRecipient(form.interest);

  const buildMessage = (): string => {
    const lines = [
      `*New Enquiry — Ooty Vacation Tours & Travels*`,
      ``,
      `*What I need:* ${form.interest}`,
      `*Name:* ${form.fullName}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      form.destination ? `*Destination:* ${form.destination}` : null,
      form.package ? `*Package:* ${form.package}` : null,
      form.travelDate ? `*Travel Date:* ${form.travelDate}` : null,
      form.adults ? `*Adults:* ${form.adults}` : null,
      form.children ? `*Children:* ${form.children}` : null,
      form.message ? `*Message:* ${form.message}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildMessage();
    window.open(whatsappLink(recipient.phone, msg), "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Your Name" value={form.fullName} onChange={(v) => update("fullName", v)} required />
        <Input label="Phone / WhatsApp" value={form.phone} onChange={(v) => update("phone", v)} type="tel" required />
        <Select label="What do you need?" value={form.interest} onChange={(v) => update("interest", v)} options={interests} />
        <Input label="Email (optional)" value={form.email} onChange={(v) => update("email", v)} type="email" />
        <Select label="Where do you want to go?" value={form.destination} onChange={(v) => update("destination", v)} options={destinations} />
        <Select label="Package Interest" value={form.package} onChange={(v) => update("package", v)} options={packages} />
        <Input label="Preferred Travel Date" value={form.travelDate} onChange={(v) => update("travelDate", v)} type="date" />
        <div className="grid grid-cols-2 gap-3">
          <Input label="Adults" value={form.adults} onChange={(v) => update("adults", v)} type="number" min="1" />
          <Input label="Children" value={form.children} onChange={(v) => update("children", v)} type="number" min="0" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1.5">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors resize-none"
          placeholder="Any special requirements..."
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
        >
          <Send className="w-5 h-5" />
          Send Enquiry on WhatsApp
        </button>
        <a
          href={callLink(CONTACTS.ashraf.phone)}
          className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-stone-200 hover:border-stone-300 text-stone-700 font-semibold rounded-xl transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
      </div>
      {form.interest && (
        <p className="text-center text-sm text-stone-500">
          Message will be sent to <span className="font-semibold text-emerald-700">{recipient.label}</span>
        </p>
      )}
    </form>
  );
}

function Input({
  label, value, onChange, type = "text", required = false, min,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; min?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        min={min}
        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
        placeholder={label}
      />
    </div>
  );
}

function Select({
  label, value, onChange, options,
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors appearance-none"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
