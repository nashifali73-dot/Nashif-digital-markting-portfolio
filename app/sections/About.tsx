"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import FadeUp from "../components/FadeUp";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";

const stats = [
  { value: 10, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Industries" },
  { value: 1, suffix: "+", label: "Years" },
];

const orbitingSkills = [
  "Digital Marketing",
  "Content Creation",
  "Graphic Design",
  "Video Editing",
  "SEO",
  "Meta Ads",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#1B4332] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Photo with Orbiting Skills */}
          <div className="flex justify-center">
            <FadeUp>
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
                  />
                </div>

                {/* Orbiting Skill Tags */}
                {orbitingSkills.map((skill, index) => {
                  const angle = (index / orbitingSkills.length) * 360;
                  const radius = 140;
                  const x = Math.round(Math.cos((angle * Math.PI) / 180) * radius);
                  const y = Math.round(Math.sin((angle * Math.PI) / 180) * radius);

                  return (
                    <motion.div
                      key={skill}
                      className="absolute z-20"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.5,
                        }}
                        className="bg-[#FFB800] text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg"
                      >
                        {skill}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </FadeUp>
          </div>

          {/* Right Column - Content */}
          <div>
            <SectionHeader
              label="— About Me"
              title="Who is Nashif Ali?"
              light
            />

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
