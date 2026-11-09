"use client";

import { useState } from "react";

interface BeliefItemProps {
  number: number;
  title: string;
  description: string;
}

export default function BeliefItem({
  number,
  title,
  description,
}: BeliefItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Extract scripture references from description
  const scriptureMatch = description.match(/\(([^)]+)\)$/);
  const scripture = scriptureMatch ? scriptureMatch[1] : "";
  const mainText = scripture
    ? description.replace(/\s*\([^)]+\)$/, "")
    : description;

  // Check if text contains pipe-delimited bullet points
  const hasBullets = mainText.includes("|");
  const lines = hasBullets ? mainText.split("|") : [mainText];

  return (
    <div className="border-b-2 border-brand-neutral/20 flex group hover:bg-brand-neutral/10">
      <div className="flex-shrink-0 w-20 px-6 py-3 flex items-center justify-center border-r-2 border-brand-neutral/20">
        <span className="text-xl md:text-2xl font-bold text-brand-neutral">
          {number}
        </span>
      </div>
      <div className="flex-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-6 flex items-center justify-between text-left transition-colors"
        >
          <h3 className="text-xl md:text-2xl font-bold text-brand-neutral capitalize">
            {title}
          </h3>
          <span className="text-2xl md:text-3xl font-bold text-brand-neutral flex-shrink-0 ml-4">
            {isOpen ? "−" : "+"}
          </span>
        </button>
        {isOpen && (
          <div className="px-6 pb-6">
            {lines.map((line, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-brand-neutral/80 mb-2"
              >
                {line.trim()}
              </p>
            ))}
            {scripture && (
              <p className="text-sm md:text-base text-brand-neutral/60 mt-3">
                {scripture}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
