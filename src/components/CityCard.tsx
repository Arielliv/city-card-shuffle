import { motion } from "framer-motion";
import { City } from "@/data/cities";

interface CityCardProps {
  city: City;
  isSelected: boolean;
  isSingleCard: boolean;
}

export default function CityCard({ city, isSelected, isSingleCard }: CityCardProps) {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden shadow-lg ${
        isSelected ? "ring-4 ring-blue-500" : ""
      } ${isSingleCard ? "w-full max-w-sm" : ""}`}
      initial={isSingleCard ? { x: 300, opacity: 0 } : {}}
      animate={
        isSingleCard 
          ? { 
              x: 0, 
              opacity: 1,
              scale: isSelected ? 1.1 : 1,
              transition: { duration: 0.3 }
            }
          : {
              scale: isSelected ? 1.2 : 1,
              zIndex: isSelected ? 10 : 0,
              transition: { duration: 0.5 }
            }
      }
      exit={isSingleCard ? { x: -300, opacity: 0 } : {}}
    >
      <img
        src={city.imageUrl}
        alt={city.name}
        className={`w-full object-cover transition-all duration-500 ${
          isSingleCard ? "h-72" : isSelected ? "h-64" : "h-48"
        }`}
      />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4">
        <h3 className={`text-white font-bold transition-all duration-500 ${
          isSelected || isSingleCard ? "text-2xl" : "text-xl"
        }`}>
          {city.name}
        </h3>
      </div>
    </motion.div>
  );
}