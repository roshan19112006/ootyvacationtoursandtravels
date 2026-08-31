import { motion } from "framer-motion";

interface SightseeingCardProps {
  name: string;
  description: string;
  image: string;
  index?: number;
}

export default function SightseeingCard({ name, description, image, index = 0 }: SightseeingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-stone-900 mb-1">{name}</h3>
        <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
