"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";
import FadeUp from "../components/FadeUp";
import Button from "../components/Button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "nashif@example.com",
    href: "mailto:nashif@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nashifali",
    href: "https://linkedin.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Create form data for Google Form
    const formData = new FormData();
    formData.append("entry.782957590", data.name);
    formData.append("entry.1951311847", data.email);
    formData.append("entry.1443214438", data.phone);
    formData.append("entry.1520782477", data.interest);
    formData.append("entry.1383773606", data.message);

    // Submit to Google Form
    fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfO0pYl334hTndzpQSgWIbEJWIa_Tg1NEwNaES-_uo09PU4Xw/formResponse", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        alert("Thank you for your message! I'll get back to you soon.");
      })
      .catch(() => {
        alert("Thank you for your message! I'll get back to you soon.");
      });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div>
            <FadeUp>
              <span className="text-sm font-medium text-[#2563EB]/70 tracking-wide">
                — Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2563EB] mt-2 mb-6">
                Let&apos;s Talk for Your Next Projects
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Ready to take your digital presence to the next level? Get in
                touch and let&apos;s discuss how I can help you achieve your goals.
              </p>
            </FadeUp>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <FadeUp key={item.label} delay={index * 0.1}>
                  <a
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#F97316] rounded-xl flex items-center justify-center group-hover:bg-[#2563EB] transition-colors">
                      <item.icon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-[#2563EB] group-hover:text-[#F97316] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <FadeUp delay={0.2}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#F5F5F5] rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#2563EB] mb-2">
                    Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#2563EB] mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#2563EB] mb-2">
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                    placeholder="+1 234 567 890"
                  />
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-sm font-medium text-[#2563EB] mb-2">
                    Interest *
                  </label>
                  <select
                    {...register("interest", { required: "Please select an interest" })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO">SEO</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Meta Ads">Meta Ads</option>
                  </select>
                  {errors.interest && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.interest.message}
                    </p>
                  )}
                </div>


              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-[#2563EB] mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-[#2563EB] text-white font-medium py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#1d4ed8] transition-colors"
              >
                Submit
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
