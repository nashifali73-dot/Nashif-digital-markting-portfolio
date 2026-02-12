"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export default function Marquee({
  children,
  className = "",
  speed = 25,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex items-center gap-8">{children}</div>
        <div className="flex items-center gap-8">{children}</div>
      </div>
    </div>
  );
}
