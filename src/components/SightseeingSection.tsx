import SightseeingCard from "./SightseeingCard";
import type { SightseeingPlace } from "@/data/siteData";

interface SightseeingSectionProps {
  title: string;
  description?: string;
  places: SightseeingPlace[];
}

export default function SightseeingSection({ title, description, places }: SightseeingSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {places.map((place, i) => (
            <SightseeingCard key={place.name} {...place} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
