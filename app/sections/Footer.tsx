"use client";

import { Instagram, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import Marquee from "../components/Marquee";

const marqueeItems = [
  "Digital Marketing",
  "Content Creation",
  "Graphic Designing",
  "Video Editing",
];

const footerLinks = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Meta Ads", href: "#services" },
    { label: "Google Ads", href: "#services" },
    { label: "SEO", href: "#services" },
    { label: "Content Creation", href: "#services" },
    { label: "Graphic Design", href: "#services" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/nashi__ali?igsh=OXM2dXRubnMzbHV2", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nashif-ali-5b9994215?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B4332]">
      {/* Top Marquee */}
      <div className="bg-[#FFB800] py-4">
        <Marquee className="text-white">
          {marqueeItems.map((item, index) => (
            <span key={index} className="flex items-center gap-8">
              <span className="text-lg md:text-xl font-semibold">{item}</span>
              <span className="text-2xl">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FFB800] flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl text-white">Nashif.</span>
            </a>
            <p className="text-white/70 text-sm mb-6">
              Digital Marketing Specialist helping brands grow through strategic
              marketing solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFB800] transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#FFB800] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#FFB800] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to get the latest news and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#FFB800] text-sm"
              />
              <button
                type="submit"
                className="w-12 h-12 bg-[#FFB800] rounded-full flex items-center justify-center hover:bg-[#ea580c] transition-colors"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              Copyright 2026 Nashif. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-[#FFB800] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#FFB800] text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
