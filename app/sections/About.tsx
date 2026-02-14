"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import FadeUp from "../components/FadeUp";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";

const stats = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Industries" },
  { value: 1, suffix: "+", label: "Years" },
];

const skillTags = [
  // Row 1 - Center
  { text: "Digital Marketing", color: "yellow", position: "center", row: 1 },
  
  // Row 2 - Left and Right
  { text: "Meta Ads", color: "green", position: "left", row: 2 },
  { text: "Google Ads", color: "yellow", position: "right", row: 2 },
  
  // Row 3 - Left, Center, Right
  { text: "Content Creation", color: "yellow", position: "left", row: 3 },
  { text: "SEO", color: "green", position: "center", row: 3 },
  { text: "Video Editing", color: "green", position: "right", row: 3 },
  
  // Row 4 - Center
  { text: "Graphic Design", color: "yellow", position: "center", row: 4 },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#1B4332] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Photo with Overlay Content */}
          <div className="flex justify-center">
            <FadeUp>
              <div className="relative w-80 h-80">
                {/* Yellow border circle - 8px width */}
                <div className="absolute inset-0 rounded-full border-8 border-[#FFB800]" />
                          
                {/* Photo - 320px circle */}
                <div className="absolute inset-4 rounded-full overflow-hidden z-10 bg-[#1B4332]">
                  <Image
                    src="/nashif-photo.jpg"
                    alt="Nashif Ali - Digital Marketer"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                          
                {/* Content Overlay - Front of Photo */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                  {/* Main Heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-4"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      Who is <span className="text-[#FFB800] italic">Nashif Ali</span>?
                    </h2>
                  </motion.div>
                            
                  {/* Bio Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6"
                  >
                    <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xs">
                      I'm a passionate Digital Marketer based in India, dedicated to helping businesses grow their online presence through strategic marketing solutions.
                    </p>
                  </motion.div>
                            
                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-3 gap-4 mb-6 w-full max-w-xs"
                  >
                    {stats.map((stat, index) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-xl md:text-2xl font-bold text-[#FFB800]">
                          <AnimatedCounter
                            end={stat.value}
                            suffix={stat.suffix}
                          />
                        </div>
                        <div className="text-white/70 text-xs mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                            
                  {/* Download CV Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Button
                      variant="featured"
                      size="sm"
                      icon={<Download className="w-4 h-4" />}
                      href="/Nashif-Ali-Resume.pdf"
                      download
                      className="text-xs px-4 py-2"
                    >
                      Download CV
                    </Button>
                  </motion.div>
                            
                  {/* Signature */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-4"
                  >
                    <div className="text-white/60 italic text-sm">
                      Nashif Ali
                    </div>
                  </motion.div>
                </div>
                          
                {/* Clustered Skill Tags - Bottom half (behind content) */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 flex flex-col justify-end pb-4 z-10">
                  {/* Row 1 - Center */}
                  <div className="flex justify-center mb-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-[#FFB800] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-full shadow-lg transform rotate-[-2deg]"
                    >
                      Digital Marketing
                    </motion.div>
                  </div>
                            
                  {/* Row 2 - Left and Right */}
                  <div className="flex justify-between mb-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-[#1B4332] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-full shadow-lg transform rotate-[-3deg]"
                    >
                      Meta Ads
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 }}
                      className="bg-[#FFB800] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-full shadow-lg transform rotate-[2deg]"
                    >
                      Google Ads
                    </motion.div>
                  </div>
                            
                  {/* Row 3 - Left, Center, Right */}
                  <div className="flex justify-between items-center mb-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-[#FFB800] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-full shadow-lg transform rotate-[1deg]"
                    >
                      Content Creation
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.45 }}
                      className="bg-[#1B4332] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-full shadow-lg transform rotate-[-1deg]"
                    >
                      SEO
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-[#1B4332] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-full shadow-lg transform rotate-[3deg]"
                    >
                      Video Editing
                    </motion.div>
                  </div>
                            
                  {/* Row 4 - Center */}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.55 }}
                      className="bg-[#FFB800] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-full shadow-lg transform rotate-[-2deg]"
                    >
                      Graphic Design
                    </motion.div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Additional Content */}
          <div>
            <FadeUp delay={0.6}>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                My approach combines creativity with data-driven strategies to
                create campaigns that not only look great but also convert.
                Whether you're a startup or an established brand, I'm here to
                elevate your digital presence.
              </p>
            </FadeUp>
                      
            <FadeUp delay={0.7}>
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-white/60 italic text-sm">
                  Let's build something amazing together!
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
