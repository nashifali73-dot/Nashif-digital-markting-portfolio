"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import FadeUp from "../components/FadeUp";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer comprehensive digital marketing services including Meta Ads management, Google Ads campaigns, SEO optimization, content creation, social media management, graphic design, and video editing. I also provide brand strategy consulting and website design services.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results vary depending on the service and your goals. Paid advertising campaigns can show results within days, while SEO and organic growth strategies typically take 3-6 months to show significant improvements. I provide regular reports so you can track progress.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "I offer flexible pricing options including hourly rates ($10-$50/hr) and project-based packages. The Basic plan starts at $10/hour for small projects, Standard at $20/hour for growing businesses, and Premium at $50/hour for comprehensive enterprise solutions.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! I work with clients globally. I'm based in India but have successfully managed campaigns for businesses in the US, UK, Canada, Australia, and other countries. I adapt my strategies to suit different markets and time zones.",
  },
  {
    question: "How do we get started?",
    answer:
      "Getting started is easy! Simply reach out through the contact form or email me directly. We'll schedule a free consultation to discuss your goals, challenges, and how I can help. From there, I'll create a customized proposal tailored to your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-[#1B4332] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB800]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-[#FFB800] tracking-wide">
              — FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
              Questions? Look here.
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div
                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#FFB800]"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`font-semibold text-lg pr-4 ${
                      openIndex === index ? "text-white" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index
                        ? "bg-white"
                        : "bg-[#FFB800]"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-[#FFB800]" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
