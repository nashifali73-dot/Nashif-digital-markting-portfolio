"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "featured" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  download?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  download,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300";

  const variants = {
    primary:
      "bg-[#1B4332] text-white hover:bg-[#1d4ed8] hover:scale-[1.02]",
    outline:
      "border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white hover:scale-[1.02]",
    featured:
      "bg-[#FFB800] text-white hover:bg-[#ea580c] hover:scale-[1.02] font-semibold",
    white:
      "bg-white text-[#1B4332] hover:bg-gray-100 hover:scale-[1.02]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        download={download}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
