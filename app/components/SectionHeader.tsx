"use client";

import FadeUp from "./FadeUp";

interface SectionHeaderProps {
  label: string;
  title: string;
  action?: {
    label: string;
    href: string;
  };
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  action,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <FadeUp>
      <div
        className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 ${
          centered ? "text-center md:text-left" : ""
        }`}
      >
        <div>
          <span
            className={`text-sm font-medium tracking-wide ${
              light ? "text-[#FFB800]" : "text-[#1B4332]/70"
            }`}
          >
            {label}
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-2 ${
              light ? "text-white" : "text-[#1B4332]"
            }`}
          >
            {title}
          </h2>
        </div>
        {action && (
          <a
            href={action.href}
            className={`text-sm font-medium hover:underline transition-all ${
              light
                ? "text-white/80 hover:text-white"
                : "text-[#1B4332] hover:text-[#1B4332]/80"
            }`}
          >
            {action.label}
          </a>
        )}
      </div>
    </FadeUp>
  );
}
