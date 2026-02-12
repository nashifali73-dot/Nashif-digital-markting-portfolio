"use client";

import { motion } from "framer-motion";
import { Palette, Smartphone, Globe, ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import FadeUp from "../components/FadeUp";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning user interfaces that enhance user experience and drive engagement for your digital products.",
  },
  {
    icon: Smartphone,
    title: "Application Design",
    description:
      "Designing mobile and web applications with focus on usability, aesthetics, and seamless user journeys that convert visitors into customers.",
  },
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Building responsive, modern websites that reflect your brand identity and deliver exceptional performance across all devices.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="— Services"
          title="Services I Provide"
          action={{ label: "View All →", href: "#services" }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeUp key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-[#F5F5F5] rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-[#F97316] border-2 border-transparent"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F97316] transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-white group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#2563EB] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#2563EB] font-medium group/link"
                >
                  <span className="group-hover/link:text-[#F97316] transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:text-[#F97316] transition-all" />
                </a>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
