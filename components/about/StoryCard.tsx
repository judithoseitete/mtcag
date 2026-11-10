import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface StoryCardProps {
  id: string;
  title: string;
  content: string[];
  link?: {
    url: string;
    text: string;
  };
  children?: React.ReactNode;
}

export default function StoryCard({
  id,
  title,
  content,
  link,
  children,
}: StoryCardProps) {
  return (
    <div id={id} className="scroll-mt-40">
      <div className="bg-brand-blue rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <div className="space-y-4">
          {content.map((paragraph, index) => (
            <p key={index} className="text-lg text-white/90">
              {paragraph}
            </p>
          ))}
        </div>
        {children}
        {link && (
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-white hover:text-brand-yellow font-semibold transition-colors"
          >
            {link.text}
            <ExternalLink className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
