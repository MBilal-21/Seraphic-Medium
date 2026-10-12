"use client";

import { useState, useEffect } from "react";

const images = [
  "/assets/h1.webp",
  "/assets/h2.webp"
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 md:mb-12 relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl border border-zinc-200 aspect-square sm:aspect-[4/3] md:aspect-[16/9] bg-zinc-50/50 flex items-center justify-center">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out p-2 sm:p-4 md:p-6 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`Hero slide ${index + 1}`}
            className="w-full h-full object-contain drop-shadow-sm"
          />
        </div>
      ))}
      
      {/* Pagination Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

