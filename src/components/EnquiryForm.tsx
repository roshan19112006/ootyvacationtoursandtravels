import { useState } from "react";
import { Send, Phone } from "lucide-react";
import { CONTACTS, whatsappLink, callLink } from "@/data/siteData";

const DESTINATIONS = [
  "Ooty", "Coonoor", "Pykara", "Avalanche", "Mudumalai", "Kodaikanal",
  "Wayanad", "Mysore", "Coorg", "Bangalore", "Coimbatore",
  "Rameshwaram", "Chennai", "Madurai", "Custom Trip",
];

const PACKAGES_LIST = [
  "Ooty 2D/1N Package", "Ooty 2-Day Complete", "Ooty 3D/2N Package",
  "Ooty 4D/3N Package", "Ooty & Kodaikanal 5D/4N", "Ooty & Wayanad 5D/4N",
  "Ooty & Mysore 5D/4N", "Custom Package",
];

const VEHICLES = ["Sedan", "SUV", "Tempo Traveller", "Innova", "Need Help Choosing"];

interface FormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  travelDate: string;
  adults: string;
  children: string;
  pickup: string;
  drop: string;
  destination: string;
  package: string;
  days: string;
  vehicle: string;
  message: string;
}

const INITIAL: FormData = {
  fullName: "", phone: "", whatsapp: "", email: "", travelDate: "",
  adults: "", children: "", pickup: "", drop: "", destination: "",
  package: "", days: "", vehicle: "", message: "",
};

export default function EnquiryForm({ className = "" }: { className?: string }) {
  const [form, setForm] = useState<FormData>(INITIAL);

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const buildMessage = (): string => {
    const lines = [
      `*New Enquiry from Ooty Vacation Tours & Travels Website*`,
      ``,
      `*Name:* ${form.fullName || "N/A"}`,
      `*Phone:* ${form.phone || "N/A"}`,
      `*WhatsApp:* ${form.whatsapp || "N/A"}`,
      `*Email:* ${form.email || "N/A"}`,
      `*Travel Date:* ${form.travelDate || "N/A"}`,
      `*Adults:* ${form.adults || "N/A"}`,
      `*Children:* ${form.children || "N/A"}`,
      `*Pickup Location:* ${form.pickup || "N/A"}`,
      `*Drop Location:* ${form.drop || "N/A"}`,
      `*Destination:* ${form.destination || "N/A"}`,
      `*Package:* ${form.package || "N/A"}`,
      `*Number of Days:* ${form.days || "N/A"}`,
      `*Vehicle Requirement:* ${form.vehicle || "N/A"}`,
      `*Message:* ${form.message || "N/A"}`,
    ];
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildMessage();
    window.open(whatsappLink(CONTACTS.ashraf.phone, msg), "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Full Name" value={form.fullName} onChange={(v) => update("fullName", v)} required />
        <Input label="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} type="tel" required />
        <Input label="WhatsApp Number" value={form.whatsapp} onChange={(v) => update("whatsapp", v)} type="tel" />
        <Input label="Email" value={form.email} onChange={(v) => update("email", v)} type="email" />
        <Input label="Travel Date" value={form.travelDate} onChange={(v) => update("travelDate", v)} type="date" />
        <Input label="Number of Adults" value={form.adults} onChange={(v) => update("adults", v)} type="number" min="1" />
        <Input label="Number of Children" value={form.children} onChange={(v) => update("children", v)} type="number" min="0" />
        <Input label="Pickup Location" value={form.pickup} onChange={(v) => update("pickup", v)} />
        <Input label="Drop Location" value={form.drop} onChange={(v) => update("drop", v)} />
        <Select label="Select Destination" value={form.destination} onChange={(v) => update("destination", v)} options={DESTINATIONS} />
        <Select label="Select Package" value={form.package} onChange={(v) => update("package", v)} options={PACKAGES_LIST} />
        <Input label="Number of Days" value={form.days} onChange={(v) => update("days", v)} type="number" min="1" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select label="Vehicle Requirement" value={form.vehicle} onChange={(v) => update("vehicle", v)} options={VEHICLES} />
      </div>
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1.5">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
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
