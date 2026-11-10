interface MtcAgSectionData {
  heading: string;
  content: string[];
  list?: string[];
  contentAfter?: string[];
  sublist?: Record<string, string[]>;
  contentAfter2?: string[];
}

interface MtcAgSectionProps {
  title: string;
  sections: MtcAgSectionData[];
}

export default function MtcAgSection({ title, sections }: MtcAgSectionProps) {
  return (
    <div id="mtc-ag" className="scroll-mt-40">
      <div className="bg-brand-blue rounded-3xl p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          {title}
        </h2>
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {section.heading}
              </h3>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg text-white/90">
                    {paragraph}
                  </p>
                ))}
                
                {section.list && (
                  <ul className="ml-6 space-y-2">
                    {section.list.map((item, iIndex) => (
                      <li key={iIndex} className="text-lg text-white/90 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.contentAfter?.map((paragraph, pIndex) => (
                  <p key={`after-${pIndex}`} className="text-lg text-white/90">
                    {paragraph}
                  </p>
                ))}
                
                {section.sublist && (
                  <div className="ml-6 space-y-3">
                    {Object.entries(section.sublist).map(([district, churches], dIndex) => (
                      <div key={dIndex}>
                        <p className="font-semibold text-lg text-white">
                          {district}
                        </p>
                        <ul className="ml-6 space-y-1">
                          {churches.map((church, cIndex) => (
                            <li key={cIndex} className="text-lg text-white/90 list-disc">
                              {church}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.contentAfter2?.map((paragraph, pIndex) => (
                  <p key={`after2-${pIndex}`} className="text-lg text-white/90">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
