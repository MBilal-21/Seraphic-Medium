"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "We worked together and made an amazing website with the Website VIP Day process. Looking forward to continuing to work with BitBranding",
    author: "Negash Taye",
    company: "Alglist",
    avatar: "NT"
  },
  {
    id: 2,
    quote: "We love the Optimized Store Owner Program. It's very well put together and the chat option is a gem too",
    author: "Yvad Brown",
    company: "Byrani Apparel",
    avatar: "YB"
  },
  {
    id: 3,
    quote: "The ad creatives generated 3x more clicks than our previous agency. The whole team is extremely professional and responsive.",
    author: "Sarah Jenkins",
    company: "Lumina Wear",
    avatar: "SJ"
  },
  {
    id: 4,
    quote: "Finally a team that understands how to scale DTC without burning cash. We hit our first $100k month within 60 days.",
    author: "Marcus Chen",
    company: "FitFlex",
    avatar: "MC"
  },
  {
    id: 5,
    quote: "Absolutely blown away by the creative strategy. They didn't just run ads, they fundamentally improved our offer and conversion rate.",
    author: "Elena Rodriguez",
    company: "Sole Basics",
    avatar: "ER"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };
    
    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= totalPages - 1 ? 0 : prevIndex + 1
    );
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? totalPages - 1 : prevIndex - 1
    );
  }, [totalPages]);

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="bg-zinc-950 py-24 px-4 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-zinc-50 text-4xl md:text-[40px] font-bold text-center mb-16 tracking-tight font-sans">
          Trusted By Over 905+ Clothing Brands
        </h2>

        <div className="relative max-w-5xl mx-auto px-4 md:px-12">
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
            aria-label="Next testimonials"
          >
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>

          {/* Carousel Viewport */}
          <div 
            className="overflow-hidden bg-zinc-900/50 p-2 rounded-2xl border border-white/5"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Group testimonials by page for easier rendering */}
              {Array.from({ length: totalPages }).map((_, pageIdx) => (
                <div key={pageIdx} className="w-full flex-shrink-0 flex gap-6 px-2">
                  {testimonials
                    .slice(pageIdx * itemsPerView, (pageIdx + 1) * itemsPerView)
                    .map((testimonial) => (
                    <div 
                      key={testimonial.id}
                      className="bg-zinc-900 rounded-xl p-8 flex flex-col h-full shadow-lg border border-white/10"
                      style={{ width: itemsPerView === 2 ? 'calc(50% - 12px)' : '100%' }}
                    >
                      <div className="flex items-start mb-6">
                        <div className="w-12 h-12 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center font-bold text-lg flex-shrink-0 mr-4 border border-white/5">
                          {testimonial.avatar}
                        </div>
                        <div className="flex flex-col">
                          <div className="flex text-orange-500 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} size={16} fill="currentColor" strokeWidth={0} className="mr-1" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed mb-8 flex-grow">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="mt-auto">
                        <p className="text-zinc-400 text-sm font-medium">
                          {testimonial.author} from {testimonial.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10 gap-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? "bg-white scale-110" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={currentIndex === idx ? "true" : "false"}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

