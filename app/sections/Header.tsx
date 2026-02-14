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
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"
        }}
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut",
          backgroundColor: { 
            duration: 0.4,
            ease: "easeOut"
          }
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-2xl border-b bg-gradient-to-r ${
          isScrolled
            ? "from-white/90 via-white/85 to-white/90 border-white/30 shadow-2xl shadow-[#1B4332]/20"
            : "from-transparent via-transparent to-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a 
              href="#home" 
              className="flex items-center gap-2 relative"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                duration: 0.6
              }}
            >
              <motion.div 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B4332] to-[#2D5A45] flex items-center justify-center relative overflow-hidden"
                whileHover={{ 
                  rotate: 20,
                  background: "linear-gradient(135deg, #FFB800, #FFD700)"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Liquid shine effect */}
                <motion.div
                  className="absolute inset-0 bg-white/30 rounded-full"
                  initial={{ x: -30, opacity: 0 }}
                  whileHover={{ 
                    x: 30, 
                    opacity: 0.8,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                />
                <span className="text-white font-bold text-lg relative z-10">N</span>
              </motion.div>
              <motion.span
                className={`font-bold text-xl transition-all duration-300 ${
                  isScrolled ? "text-[#1B4332]" : "text-[#1B4332]"
                }`}
                whileHover={{ 
                  color: "#FFB800",
                  textShadow: "0 0 8px rgba(255, 184, 0, 0.3)"
                }}
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
                  initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut",
                    filter: { duration: 0.8 }
                  }}
                  whileHover={{ 
                    y: -3,
                    color: "#FFB800",
                    scale: 1.05,
                    textShadow: "0 0 8px rgba(255, 184, 0, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    isScrolled ? "text-[#1B4332]" : "text-[#1B4332]"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFB800] to-[#FFD700] rounded-full"
                    whileHover={{ 
                      width: "100%",
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  />
                  {/* Liquid hover effect */}
                  <motion.span
                    className="absolute inset-0 bg-[#FFB800]/10 rounded-lg opacity-0"
                    whileHover={{ 
                      opacity: 1,
                      scale: 1.1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.div 
              className="hidden lg:block relative"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.08,
                filter: "drop-shadow(0 10px 25px rgba(27, 67, 50, 0.4))"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                href="#contact"
                variant={isScrolled ? "primary" : "primary"}
                size="sm"
                className="relative overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                {/* Liquid background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FFB800] to-[#FFD700] opacity-0 rounded-full"
                  whileHover={{ 
                    opacity: 0.2,
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                />
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
