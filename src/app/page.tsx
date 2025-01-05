"use client";

import { useState, useEffect } from "react";
import CityCard from "@/components/CityCard";
import ShuffleButton from "@/components/ShuffleButton";
import { cities, TARGET_CITY_ID } from "@/data/cities";
import Confetti from "react-confetti";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isShuffling, setIsShuffling] = useState(false);
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet/mobile breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleShuffle = async () => {
    setIsShuffling(true);
    setShowConfetti(false);

    // Shuffle animation
    if (isMobile) {
      // Mobile version - show one card at a time
      for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * cities.length);
        setCurrentCityIndex(randomIndex);
        setSelectedCityId(cities[randomIndex].id);
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
    } else {
      // Desktop version - highlight random cards
      for (let i = 0; i < 20; i++) {
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        setSelectedCityId(randomCity.id);
        await new Promise((resolve) => setTimeout(resolve, 400));
      }
    }

    // Stop on target city
    const targetIndex = cities.findIndex(city => city.id === TARGET_CITY_ID);
    setCurrentCityIndex(targetIndex);
    setSelectedCityId(TARGET_CITY_ID);
    setIsShuffling(false);
    setShowConfetti(true);
  };

  return (
    <main className="min-h-screen p-8">
      {showConfetti && <Confetti />}
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Where do the Moteks go?
        </h1>
        
        <div className="flex justify-center mb-8">
          <ShuffleButton
            onClick={handleShuffle}
            isShuffling={isShuffling}
          />
        </div>

        {isMobile ? (
          // Mobile view - single card
          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <CityCard
                key={cities[currentCityIndex].id}
                city={cities[currentCityIndex]}
                isSelected={cities[currentCityIndex].id === selectedCityId}
                isSingleCard={true}
              />
            </AnimatePresence>
          </div>
        ) : (
          // Desktop view - grid of cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <CityCard
                key={city.id}
                city={city}
                isSelected={city.id === selectedCityId}
                isSingleCard={false}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}