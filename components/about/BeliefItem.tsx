"use client";

import { useState } from "react";

interface BeliefItemProps {
  number: number;
  title: string;
  description: string;
  scripture?: string;
}

export default function BeliefItem({
  number,
  title,
  description,
  scripture = "",
}: BeliefItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Split description by newlines for multi-paragraph content
  const paragraphs = description.split("\n").filter((p) => p.trim());

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
          <div className="px-6 pb-6 space-y-3">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-brand-neutral/80 whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}
            {scripture && (
              <p className="text-sm md:text-base text-brand-neutral/60 mt-4 italic">
                {scripture}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
