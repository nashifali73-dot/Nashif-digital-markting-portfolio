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
          {/* Left Column - Photo with Clustered Tags */}
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
                          
                {/* Clustered Skill Tags - Bottom half */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 flex flex-col justify-end pb-4">
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

          {/* Right Column - Content */}
          <div>
            <div className="mb-8">
              <span className="text-sm font-medium text-white/70 tracking-wide">
                — About Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
                Who is <span className="text-[#FFB800] italic">Nashif Ali</span>?
              </h2>
            </div>

            <FadeUp delay={0.2}>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I&apos;m a passionate Digital Marketer based in India, dedicated to
                helping businesses grow their online presence through strategic
                marketing solutions. With expertise in Meta Ads, Google Ads, and
                content creation, I deliver results that matter.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                My approach combines creativity with data-driven strategies to
                create campaigns that not only look great but also convert.
                Whether you&apos;re a startup or an established brand, I&apos;m here to
                elevate your digital presence.
              </p>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.4}>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#FFB800]">
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-white/60 text-sm mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="featured"
                  size="lg"
                  icon={<Download className="w-5 h-5" />}
                  href="/Nashif-Ali-Resume.pdf"
                  download
                >
                  Download CV
                </Button>
                <div className="text-white/60 italic text-sm">
                  Nashif Ali
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
