interface BioSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
  paragraphsAfter?: string[];
}

interface SeniorPastorBio {
  mainHeading: string;
  subHeading: string;
  sections: BioSection[];
}

interface SeniorPastorCardProps {
  id: string;
  title: string;
  name: string;
  bio: SeniorPastorBio;
}

export default function SeniorPastorCard({
  id,
  title,
  name,
  bio,
}: SeniorPastorCardProps) {
  return (
    <div id={id} className="scroll-mt-40">
      <div className="bg-brand-blue rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {title}
        </h2>
        
        <div className="space-y-8">
          {/* Top - Photo with name below */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="w-full h-64 md:h-80 lg:h-96 bg-brand-neutral-dark rounded-lg"></div>
            <p className="text-lg md:text-xl font-bold text-white text-center mt-4">
              {name}
            </p>
          </div>

          {/* Bottom - Bio text */}
          <div className="space-y-6">

            {/* Sections */}
            {bio.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                {section.heading && (
                  <h5 className="text-xl md:text-2xl font-bold text-white">
                    {section.heading}
                  </h5>
                )}
                
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base md:text-lg text-white/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    {section.list.map((item, iIndex) => (
                      <li key={iIndex} className="text-base md:text-lg text-white/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.paragraphsAfter && section.paragraphsAfter.map((paragraph, pIndex) => (
                  <p key={`after-${pIndex}`} className="text-base md:text-lg text-white/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}