"use client";

import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import FadeUp from "../components/FadeUp";

const tools = [
  { name: "Meta Ads", percentage: 95, icon: "M" },
  { name: "Google Ads", percentage: 90, icon: "G" },
  { name: "Photoshop", percentage: 88, icon: "Ps" },
  { name: "HubSpot", percentage: 85, icon: "H" },
  { name: "Premiere Pro", percentage: 82, icon: "Pr" },
  { name: "Canva", percentage: 90, icon: "C" },
];

export default function Tools() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="— My Favorite Tools"
          title="Exploring the Tools Behind My Work"
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <FadeUp key={tool.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-[#F5F5F5] rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-[#1B4332] rounded-xl flex items-center justify-center"
                >
                  <span className="text-white font-bold text-xl">
                    {tool.icon}
                  </span>
                </motion.div>

                {/* Percentage */}
                <div className="text-2xl font-bold text-[#1B4332] mb-1">
                  {tool.percentage}%
                </div>

                {/* Name */}
                <div className="text-sm text-gray-600 font-medium">
                  {tool.name}
                </div>

                {/* Progress Bar */}
                <div className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-[#FFB800] rounded-full"
                  />
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
