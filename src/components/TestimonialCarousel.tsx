"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Instagram } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  brand: string;
  handle: string;
  instagram: string;
  logo: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Seraphic Medium helped us get a better strategy behind our ads and focus on what actually drives sales. They understand fashion e-commerce, and that makes a big difference.",
    brand: "One of One",
    handle: "@oneofone_la",
    instagram: "https://www.instagram.com/oneofone_la/?hl=en",
    logo: "/testimonials/oneofone_la.jpg",
    initials: "OO"
  },
  {
    id: 2,
    quote: "We were spending on Meta ads but weren't seeing the returns we wanted. Seraphic Medium helped us rethink our campaigns and creatives. Now we have a much clearer path toward profitable growth.",
    brand: "Onacero",
    handle: "@theonacero",
    instagram: "https://www.instagram.com/theonacero/",
    logo: "/testimonials/theonacero.jpg",
    initials: "ON"
  },
  {
    id: 3,
    quote: "The AI creatives have been a huge plus for us. We're able to explore more angles and keep our ads fresh without making the content feel repetitive.",
    brand: "KBOOM",
    handle: "@kboomapparel",
    instagram: "https://www.instagram.com/kboomapparel/?hl=en",
    logo: "/testimonials/kboomapparel.jpg",
    initials: "KB"
  },
  {
    id: 4,
    quote: "These guys get clothing brands. From product angles to ad creatives, they understand what it takes to get people interested in your products and turn that interest into sales.",
    brand: "MAFIA®",
    handle: "@mafiathreads",
    instagram: "https://www.instagram.com/mafiathreads/?hl=en",
    logo: "/testimonials/mafiathreads.jpg",
    initials: "MF"
  },
  {
    id: 5,
    quote: "Our ads felt stuck, and we weren't sure what to change. Seraphic Medium helped us look at the bigger picture and gave us a much better direction for testing and scaling.",
    brand: "Self Made Culture",
    handle: "@selfmadeculture_",
    instagram: "https://www.instagram.com/selfmadeculture_/",
    logo: "/testimonials/selfmadeculture_.jpg",
    initials: "SM"
  },
  {
    id: 6,
    quote: "What I like most is that they don't just focus on the ad account. They look at creatives, the website, and the overall buying experience. It feels like a real growth strategy, not just ad management.",
    brand: "(COOL-IE) MANSION",
    handle: "@qulimansion",
    instagram: "https://www.instagram.com/qulimansion/",
    logo: "/testimonials/qulimansion.jpg",
    initials: "CM"
  },
  {
    id: 7,
    quote: "Working with Seraphic Medium has been great. Communication is solid, the strategy makes sense, and the team is always looking for new ways to help us grow. Exactly what we needed.",
    brand: "Unite The Worst",
    handle: "@unitetheworst",
    instagram: "https://www.instagram.com/unitetheworst/",
    logo: "/testimonials/unitetheworst.jpg",
    initials: "UW"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      const perView = window.innerWidth < 768 ? 1 : 2;
      setItemsPerView(perView);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, testimonials.length - perView)));
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  }, [maxIndex]);

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
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Client Success Stories
          </p>
          <h2 className="text-zinc-50 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-sans">
            Trusted By Growing Clothing Brands
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 md:px-14">
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2.5 text-zinc-400 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 shadow-lg active:scale-95"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2.5 text-zinc-400 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 shadow-lg active:scale-95"
            aria-label="Next testimonials"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>

          {/* Carousel Viewport */}
          <div 
            className="overflow-hidden p-1 rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(calc(-${currentIndex} * (${itemsPerView === 2 ? '50% + 12px' : '100% + 24px'})))`
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-zinc-900/90 rounded-2xl p-7 md:p-8 flex flex-col justify-between shadow-xl border border-white/10 hover:border-white/20 transition-colors"
                  style={{ 
                    width: itemsPerView === 2 ? 'calc(50% - 12px)' : '100%',
                    flexShrink: 0
                  }}
                >
                  <div>
                    {/* Header: Logo, Stars, and Brand Partner badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-zinc-800 border border-white/15 flex-shrink-0 flex items-center justify-center font-bold text-sm text-zinc-300">
                          {!imgErrors[testimonial.id] ? (
                            <Image
                              src={testimonial.logo}
                              alt={`${testimonial.brand} logo`}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                              onError={() => setImgErrors((prev) => ({ ...prev, [testimonial.id]: true }))}
                            />
                          ) : (
                            <span>{testimonial.initials}</span>
                          )}
                        </div>
                        <div>
                          <p className="text-zinc-100 font-bold text-base leading-tight">
                            {testimonial.brand}
                          </p>
                          <a
                            href={testimonial.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-medium transition-colors mt-0.5"
                          >
                            <Instagram size={12} strokeWidth={2} />
                            <span>{testimonial.handle}</span>
                          </a>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex text-amber-400" aria-label="5 out of 5 stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={15} fill="currentColor" strokeWidth={0} className="mr-0.5" />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Footer Verified Tag */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-medium">
                    <span>Verified Growth Partner</span>
                    <a
                      href={testimonial.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1"
                    >
                      <span>View Profile</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-10 gap-2.5">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  currentIndex === idx 
                    ? "bg-orange-500 w-8" 
                    : "bg-white/20 hover:bg-white/40 w-2.5"
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
