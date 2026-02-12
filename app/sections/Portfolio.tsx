"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, TrendingUp, Users, Eye, MousePointer } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import FadeUp from "../components/FadeUp";

const projects = [
  {
    id: 1,
    title: "Beauty Product Campaign",
    category: "Social Media Marketing",
    tags: ["Meta Ads", "Content Strategy"],
    color: "from-pink-400 to-rose-500",
    description: "A comprehensive social media campaign for a premium beauty brand targeting women aged 25-45.",
    mainImage: "/project1-main.jpg",
    dashboardImage: "/project1-dashboard.jpg",
    insightsImage: "/project1-insights.jpg",
    stats: {
      reach: "2.5M+",
      impressions: "8.2M+",
      ctr: "4.8%",
      conversions: "12,450",
      roas: "4.2x"
    }
  },
  {
    id: 2,
    title: "Perfume Brand Launch",
    category: "Brand Strategy",
    tags: ["Google Ads", "SEO"],
    color: "from-amber-400 to-orange-500",
    description: "Strategic product launch campaign for a luxury perfume brand entering the Indian market.",
    mainImage: "/project2-main.jpg",
    dashboardImage: "/project2-dashboard.jpg",
    insightsImage: "/project2-insights.jpg",
    stats: {
      reach: "1.8M+",
      impressions: "5.5M+",
      ctr: "3.9%",
      conversions: "8,320",
      roas: "3.8x"
    }
  },
  {
    id: 3,
    title: "Masters Brand Identity",
    category: "Brand Identity",
    tags: ["Graphic Design", "Branding"],
    color: "from-blue-400 to-indigo-500",
    description: "Complete brand identity overhaul including logo design, brand guidelines, and visual assets.",
    mainImage: "/project3-main.jpg",
    dashboardImage: "/project3-dashboard.jpg",
    insightsImage: "/project3-insights.jpg",
    stats: {
      reach: "950K+",
      impressions: "3.2M+",
      ctr: "5.2%",
      conversions: "6,180",
      roas: "5.1x"
    }
  },
  {
    id: 4,
    title: "Clean Tech Startup",
    category: "Digital Marketing",
    tags: ["Content Marketing", "PPC"],
    color: "from-emerald-400 to-teal-500",
    description: "B2B lead generation campaign for a sustainable technology startup targeting enterprise clients.",
    mainImage: "/project4-main.jpg",
    dashboardImage: "/project4-dashboard.jpg",
    insightsImage: "/project4-insights.jpg",
    stats: {
      reach: "1.2M+",
      impressions: "4.1M+",
      ctr: "4.1%",
      conversions: "4,850",
      roas: "3.5x"
    }
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                  >
                    {/* Demo Placeholder */}
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm font-medium bg-[#F97316]/10 text-[#2563EB] px-4 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2563EB] mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-[#F97316] font-medium">{selectedProject.category}</p>
                </div>

                {/* Main Project Image */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#2563EB] mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#F97316]" />
                    Campaign Overview
                  </h3>
                  <div className={`h-64 md:h-80 rounded-xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}>
                    <div className="text-white text-center p-8">
                      <div className="text-8xl font-bold opacity-30 mb-4">
                        {selectedProject.title.charAt(0)}
                      </div>
                      <p className="text-lg opacity-80">{selectedProject.description}</p>
                    </div>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-[#2563EB] mb-4 flex items-center gap-2">
                    <MousePointer className="w-5 h-5 text-[#F97316]" />
                    Performance Statistics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="bg-[#F5F5F5] rounded-xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#2563EB]">{selectedProject.stats.reach}</div>
                      <div className="text-sm text-gray-500 mt-1">Reach</div>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#2563EB]">{selectedProject.stats.impressions}</div>
                      <div className="text-sm text-gray-500 mt-1">Impressions</div>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#F97316]">{selectedProject.stats.ctr}</div>
                      <div className="text-sm text-gray-500 mt-1">CTR</div>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-xl p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-[#2563EB]">{selectedProject.stats.conversions}</div>
                      <div className="text-sm text-gray-500 mt-1">Conversions</div>
                    </div>
                    <div className="bg-[#F5F5F5] rounded-xl p-4 text-center col-span-2 md:col-span-1">
                      <div className="text-2xl md:text-3xl font-bold text-[#F97316]">{selectedProject.stats.roas}</div>
                      <div className="text-sm text-gray-500 mt-1">ROAS</div>
                    </div>
                  </div>
                </div>

                {/* Dashboard & Insights Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Ads Dashboard Preview */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#2563EB] mb-4 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-[#F97316]" />
                      Ads Dashboard
                    </h3>
                    <div className="bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-xl p-6 h-48 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl font-bold mb-2">Meta Ads</div>
                        <div className="text-sm opacity-80">Campaign Manager</div>
                        <div className="mt-4 flex justify-center gap-4">
                          <div className="text-center">
                            <div className="text-xl font-bold">{selectedProject.stats.ctr}</div>
                            <div className="text-xs opacity-70">CTR</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold">{selectedProject.stats.roas}</div>
                            <div className="text-xs opacity-70">ROAS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Insights/Metrics */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#2563EB] mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#F97316]" />
                      Audience Insights
                    </h3>
                    <div className="bg-gradient-to-br from-[#F97316] to-[#ea580c] rounded-xl p-6 h-48 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl font-bold mb-2">Analytics</div>
                        <div className="text-sm opacity-80">Demographics & Behavior</div>
                        <div className="mt-4 flex justify-center gap-4">
                          <div className="text-center">
                            <div className="text-xl font-bold">{selectedProject.stats.reach}</div>
                            <div className="text-xs opacity-70">Reach</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold">{selectedProject.stats.conversions}</div>
                            <div className="text-xs opacity-70">Leads</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
