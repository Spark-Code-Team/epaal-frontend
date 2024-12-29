"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import SwipeReact from "swipe-react";

export default function Carousel({ images = [], seconds = 3 }) {
  // placeholder data
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  SwipeReact.config({
    left: prevSlide,
    right: nextSlide,
  });
  
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), seconds * 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[300px]  md:h-[421px]">
      {/* Image part */}
      <div className="overflow-hidden w-full h-full" {...SwipeReact.events}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className={`w-full  flex-shrink-0 relative h-[421px]`}>
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                className="object-cover w-full "
                fill
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
      {/* slide next */}
      <button
        onClick={nextSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-md shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-2 h-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      {/* prev slide */}
      <button
        onClick={prevSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-md shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-2 h-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-2 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
