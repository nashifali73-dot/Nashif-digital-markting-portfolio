"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import FadeUp from "../components/FadeUp";

const projects = [
  {
    title: "Beauty Product Campaign",
    category: "Social Media Marketing",
    tags: ["Meta Ads", "Content Strategy"],
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Perfume Brand Launch",
    category: "Brand Strategy",
    tags: ["Google Ads", "SEO"],
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Masters Brand Identity",
    category: "Brand Identity",
    tags: ["Graphic Design", "Branding"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Clean Tech Startup",
    category: "Digital Marketing",
    tags: ["Content Marketing", "PPC"],
    color: "from-emerald-400 to-teal-500",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="— My Portfolio"
          title="My Latest Projects"
          action={{ label: "View All →", href: "#portfolio" }}
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                  >
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl font-bold opacity-30">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#2563EB]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 bg-[#F97316] rounded-full flex items-center justify-center"
                    >
                      <Plus className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-[#F97316]/10 text-[#2563EB] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#2563EB] group-hover:text-[#F97316] transition-colors">
                    {project.title}
                  </h3>

                  {/* Category */}
                  <p className="text-gray-500 text-sm mt-1">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
