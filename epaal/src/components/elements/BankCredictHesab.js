"use client"
import { useState } from "react";
import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

export default function BankCredictHesab() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const prevSlide = () => {
    setSelectedIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSelectedIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full">
          {/* <ChevronLeft /> */}
        </button>

        <div className="relative flex w-full justify-center h-48">
          {items.map((item, index) => {
            const position = (index - selectedIndex + items.length) % items.length;
            const isCenter = position === 0;
            const isSide = position === 1 || position === items.length - 1;
            return (
              <motion.div
                key={index}
                className={`absolute flex items-center justify-center rounded-lg 
                  transition-all duration-300 
                  ${isCenter ? "w-40 h-40 text-lg font-bold opacity-100 scale-110" : "w-32 h-32 text-sm opacity-50 scale-90"}`}
                animate={{ scale: isCenter ? 1.2 : 0.9, opacity: isCenter ? 1 : 0.5, x: position * 120 - 120 }}
              >
                <div className="flex items-center justify-center w-full h-full bg-blue-500 text-white rounded-lg shadow-md">
                  {item}
                </div>
              </motion.div>
            );
          })}
        </div>

        <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full">
          {/* <ChevronRight /> */}
        </button>
      </div>
    </div>
  );
}
