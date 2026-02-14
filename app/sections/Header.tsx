"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import useScrollPosition from "../hooks/useScrollPosition";
import Button from "../components/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#portfolio" },
  { label: "Blogs", href: "#blogs" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent"
        }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          backgroundColor: { duration: 0.3 }
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${
          isScrolled
            ? "border-white/20 shadow-lg shadow-[#1B4332]/10"
            : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a 
              href="#home" 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center"
                whileHover={{ 
                  rotate: 15,
                  backgroundColor: "#FFB800"
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-lg">N</span>
              </motion.div>
              <motion.span
                className={`font-bold text-xl transition-colors ${
                  isScrolled ? "text-[#1B4332]" : "text-[#1B4332]"
                }`}
                whileHover={{ color: "#FFB800" }}
                transition={{ duration: 0.2 }}
              >
                Nashif.
              </motion.span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    y: -2,
                    color: "#FFB800",
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    isScrolled ? "text-[#1B4332]" : "text-[#1B4332]"
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFB800] rounded-full"
                    whileHover={{ 
                      width: "100%",
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(27, 67, 50, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                href="#contact"
                variant={isScrolled ? "primary" : "primary"}
                size="sm"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#1B4332]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl pt-20 px-6"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#1B4332] font-medium py-2 border-b border-gray-100 hover:text-[#FFB800] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="mt-4"
                >
                  Contact Me
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
