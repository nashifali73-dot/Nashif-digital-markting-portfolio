"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import FadeUp from "../components/FadeUp";

const education = [
  {
    period: "Feb 2026 - May 2026",
    title: "Digital Marketing Certification",
    institution: "Beegains Academy",
    icon: GraduationCap,
  },
  {
    period: "2026",
    title: "Meta Certified Digital Marketing Associate",
    institution: "Meta",
    icon: Award,
  },
  {
    period: "2020-23",
    title: "BA Economics",
    institution: "University",
    icon: GraduationCap,
  },
  {
    period: "2024",
    title: "Google & HubSpot Certifications",
    institution: "Online",
    icon: Award,
  },
];

const work = [
  {
    period: "2026 - Present",
    title: "Digital Marketing Intern",
    company: "Beegains IT Solutions",
    description:
      "Managing social media campaigns, creating content strategies, and optimizing ad performance for clients.",
    icon: Briefcase,
  },
];

export default function Experience() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="— Education & Work"
          title="My Academic and Professional Journey"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-bold text-[#2563EB] mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#F97316]" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#F97316]" />

              <div className="space-y-8">
                {education.map((item, index) => (
                  <FadeUp key={item.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center border-2 border-[#F97316]">
                        <item.icon className="w-5 h-5 text-[#2563EB]" />
                      </div>

                      {/* Content */}
                      <div className="bg-[#F5F5F5] rounded-xl p-5 hover:shadow-lg transition-shadow">
                        <span className="text-sm font-medium text-[#F97316]">
                          {item.period}
                        </span>
                        <h4 className="text-lg font-bold text-[#2563EB] mt-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.institution}
                        </p>
                      </div>
                    </motion.div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>

          {/* Work Column */}
          <div>
            <h3 className="text-xl font-bold text-[#2563EB] mb-8 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-[#F97316]" />
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#F97316]" />

              <div className="space-y-8">
                {work.map((item, index) => (
                  <FadeUp key={item.title} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 w-12 h-12 bg-[#1B4332] rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Content */}
                      <div className="bg-[#1B4332] rounded-xl p-5 text-white hover:shadow-xl transition-shadow">
                        <span className="text-sm font-medium text-[#FFB800]">
                          {item.period}
                        </span>
                        <h4 className="text-lg font-bold mt-1">
                          {item.title}
                        </h4>
                        <p className="text-white/80 text-sm mt-1">
                          {item.company}
                        </p>
                        <p className="text-white/60 text-sm mt-3">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
