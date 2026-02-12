"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeUp from "../components/FadeUp";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Nashif transformed our digital presence completely. His strategic approach to Meta Ads increased our ROI by 300% in just three months. Highly recommended!",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, BrandCo",
    content:
      "Working with Nashif was a game-changer for our brand. His content creation skills and attention to detail helped us build a strong social media presence.",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Founder, EcoStyle",
    content:
      "Exceptional work on our Google Ads campaigns. Nashif's data-driven approach and continuous optimization helped us achieve record-breaking conversion rates.",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 4,
    name: "David Miller",
    role: "Owner, Miller's Bakery",
    content:
      "Nashif helped my small business reach customers I never thought possible. His local SEO strategy brought in so many new customers. Truly grateful!",
    rating: 5,
    avatar: "DM",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === testimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-[#2563EB]/70 tracking-wide">
              — Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2563EB] mt-2">
              What Clients Say
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center z-10">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Carousel Container */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg min-h-[300px] relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#F97316] text-[#F97316]"
                        />
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#2563EB] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">
                        {testimonials[currentIndex].avatar}
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-[#2563EB]">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F5F5F5] hover:bg-[#F97316] rounded-full flex items-center justify-center transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 text-[#2563EB] group-hover:text-white" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#F5F5F5] hover:bg-[#F97316] rounded-full flex items-center justify-center transition-colors group"
              >
                <ChevronRight className="w-5 h-5 text-[#2563EB] group-hover:text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-[#F97316]"
                      : "bg-[#2563EB]/30 hover:bg-[#2563EB]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
