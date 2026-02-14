"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import Image from "next/image";
import Button from "../components/Button";
import Marquee from "../components/Marquee";
import FadeUp from "../components/FadeUp";

const marqueeItems = [
  "Digital Marketing",
  "Content Creation",
  "Graphic Designing",
  "Video Editing",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1B4332]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-[#F5F5F5] rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span className="text-sm font-medium text-[#1B4332]">
                  Hello There!
                </span>
              </div>
            </FadeUp>

            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-[1.2] tracking-[-0.02em] mb-4">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="inline-block text-[#1A1A1A]"
              >
                I&apos;m{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="inline-block text-[#FFB800] italic font-bold"
              >
                Nashif Ali,
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className="inline-block text-[#1A1A1A]"
              >
                Digital Marketer
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="inline-block text-[#1A1A1A]"
              >
                Based in INDIA.
              </motion.span>
            </h1>

            <FadeUp delay={0.3}>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Transforming brands through strategic digital marketing,
                compelling content creation, and data-driven advertising
                campaigns that deliver measurable results.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="#portfolio"
                  variant="primary"
                  size="lg"
                  icon={<Play className="w-5 h-5" />}
                >
                  View My Portfolio
                </Button>
                <Button href="#contact" variant="outline" size="lg">
                  Hire Me
                </Button>
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <FadeUp delay={0.3}>
              <div className="relative">
                {/* Main Photo Container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  {/* Orange border circle */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#FFB800]" />

                  {/* Photo */}
                  <div className="absolute inset-2 rounded-full overflow-hidden z-10 bg-[#1B4332]">
                    <Image
                      src="/nashif-photo.jpg"
                      alt="Nashif Ali - Digital Marketer"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 288px, 384px"
                    />
                  </div>

                  {/* Rotating "Hire Me" Badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text className="text-[10px] fill-[#1B4332] font-semibold uppercase tracking-widest">
                        <textPath href="#circlePath">
                          Hire Me • Hire Me • Hire Me •
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 bg-[#FFB800] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">★</span>
                    </div>
                  </div>

                  {/* Floating Skill Pills */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute -left-8 top-1/4 bg-white shadow-lg rounded-full px-4 py-2 z-20"
                  >
                    <span className="text-sm font-medium text-[#1B4332]">
                      Meta Ads
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute -right-4 top-1/3 bg-[#1B4332] shadow-lg rounded-full px-4 py-2 z-20"
                  >
                    <span className="text-sm font-medium text-white">
                      Google Ads
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute left-1/4 -bottom-4 bg-[#FFB800] shadow-lg rounded-full px-4 py-2 z-20"
                  >
                    <span className="text-sm font-medium text-white">
                      SEO Expert
                    </span>
                  </motion.div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="mt-auto bg-[#FFB800] py-4">
        <Marquee className="text-white">
          {marqueeItems.map((item, index) => (
            <span key={index} className="flex items-center gap-8">
              <span className="text-lg md:text-xl font-semibold">{item}</span>
              <span className="text-2xl">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
