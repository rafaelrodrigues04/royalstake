'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/carousel/cs2-pgl-cluj-napoca.jpg',
  '/images/carousel/league-of-legends-tournaments.jpg',
  '/images/carousel/dota-2-dreamleague.jpg',
  '/images/carousel/valorant-masters-bangkok.jpg',
  '/images/carousel/uefa-champions-league.jpg',
  '/images/carousel/ufc-fight-night.jpg',
];

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateScrollState = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setCurrentIndex(emblaApi.selectedScrollSnap()); // Track the current slide index
  }, [emblaApi]);

  // Set up autoplay using setInterval
  useEffect(() => {
    if (!emblaApi) return;

    // Set interval to automatically scroll every 5 seconds
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  // Optional: Clear the interval on user interaction (e.g., clicking the arrows or dots)
  const handleControlClick = () => {
    if (emblaApi) {
      clearInterval(intervalId); // Clear the autoplay interval on user interaction
    }
  };

  // Update the screen size detection on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Update based on the screen width
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state based on the current screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', updateScrollState);
    updateScrollState();
  }, [emblaApi, updateScrollState]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const goToSlide = useCallback(
    (index) => {
      emblaApi && emblaApi.scrollTo(index);
      handleControlClick(); // Clear interval when clicking a dot
    },
    [emblaApi]
  );

  return (
    <div className="relative w-full mx-auto group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => {
            // Choose the small image for screens below 768px
            const imageSrc = isSmallScreen ? src.replace('.jpg', '-small.jpg') : src;
            return (
              <div className="flex-[0_0_100%] min-w-0" key={index}>
                <img
                  src={imageSrc}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Left arrow - only visible on hover */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full disabled:opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={24} />
      </button>
      
      {/* Right arrow - only visible on hover */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full disabled:opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 ${
              currentIndex === index
                ? 'w-8 h-3 rounded-full bg-yellow-500' // Active dot transforms to a rounded line
                : 'w-3 h-3 rounded-full bg-white/50' // Inactive dots remain circular
            }`}
            onClick={() => goToSlide(index)} // Stop autoplay when clicking dots
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
