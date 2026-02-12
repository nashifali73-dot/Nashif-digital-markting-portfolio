"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";

const plans = [
  {
    name: "Basic",
    price: "$10",
    period: "/hr",
    description: "Perfect for small projects and startups",
    features: [
      "Social Media Management",
      "Basic Content Creation",
      "Monthly Analytics Report",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "$20",
    period: "/hr",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Basic",
      "Meta & Google Ads Management",
      "Advanced Content Strategy",
      "Weekly Analytics Reports",
      "Priority Support",
      "SEO Optimization",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$50",
    period: "/hr",
    description: "For enterprises needing full service",
    features: [
      "Everything in Standard",
      "Dedicated Account Manager",
      "Custom Strategy Development",
      "Video Production",
      "24/7 Priority Support",
      "Brand Consulting",
      "Campaign Automation",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-32 bg-[#2563EB] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          label="— Pricing Table"
          title="My Pricing Model"
          action={{ label: "Get Started →", href: "#contact" }}
          light
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <FadeUp key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.featured
                    ? "bg-[#F97316] text-white scale-105 shadow-2xl"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/20"
                }`}
              >
                {/* Featured Badge */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#2563EB] text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Name */}
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.featured ? "text-white" : "text-white"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span
                    className={`text-4xl font-bold ${
                      plan.featured ? "text-white" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.featured ? "text-white/70" : "text-white/70"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-sm mb-6 ${
                    plan.featured ? "text-white/80" : "text-white/70"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.featured
                            ? "bg-white"
                            : "bg-[#F97316]"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.featured ? "text-[#F97316]" : "text-white"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.featured
                            ? "text-white/90"
                            : "text-white/90"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  href="#contact"
                  variant={plan.featured ? "primary" : "white"}
                  size="md"
                  className="w-full justify-center"
                >
                  Get Started
                </Button>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
