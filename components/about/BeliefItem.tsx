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
        <span className="text-xl md:text-2xl font-bold text-white">
          {number}
        </span>
      </div>
      <div className="flex-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-6 flex items-center justify-between text-left transition-colors"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white capitalize">
            {title}
          </h3>
          <span className="text-2xl md:text-3xl font-bold text-white flex-shrink-0 ml-4">
            {isOpen ? "-" : "+"}
          </span>
        </button>
        {isOpen && (
          <div className="px-6 pb-6 space-y-3">
            {paragraphs.map((paragraph, index) => {
              // Check if this line is a subheader (ends with colon and has text before it)
              const isSubheader = paragraph.match(/^([A-Z][^:]{10,40}):\s*(.+)$/);
              
              if (isSubheader) {
                const [, subheaderText, content] = isSubheader;
                return (
                  <div key={index} className="space-y-2">
                    <h4 className="text-lg md:text-xl font-semibold text-white">
                      {subheaderText}
                    </h4>
                    <p className="text-lg md:text-xl text-white/80 whitespace-pre-line">
                      {content}
                    </p>
                  </div>
                );
              }
              
              return (
                <p
                  key={index}
                  className="text-lg md:text-xl text-white/80 whitespace-pre-line"
                >
                  {paragraph}
                </p>
              );
            })}
            {scripture && (
              <p className="text-sm md:text-base text-white/60 mt-4 italic">
                {scripture}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
