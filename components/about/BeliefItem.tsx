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

  return (
    <div className="border-b border-brand-blue-primary/20 flex group hover:bg-brand-blue-primary/5">
      <div className="flex-shrink-0 px-6 py-5 border-r border-brand-blue-primary/20">
        <span className="text-xl md:text-2xl font-bold text-brand-blue-primary">
          {number}
        </span>
      </div>
      <div className="flex-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
        >
          <h3 className="text-xl md:text-2xl font-bold text-brand-blue-primary capitalize">
            {title}
          </h3>
          <span className="text-2xl md:text-3xl font-bold text-brand-blue-primary flex-shrink-0 ml-4">
            {isOpen ? "âˆ’" : "+"}
          </span>
        </button>
        {isOpen && (
          <div className="px-6 pb-5">
            <p className="text-lg md:text-xl text-brand-blue-primary/80">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

