import React from 'react';

const LayoutDetails = ({ sections = [] }) => {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 w-full my-6 max-w-5xl mx-auto px-4 sm:px-6">
      {sections.map((section, index) => (
        <section 
          key={index} 
          className="bg-sand/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-border/30 shadow-md transition-all hover:shadow-lg"
        >
          {section.title && (
            <h2 className="text-xl md:text-2xl font-bold text-border mb-4 font-title tracking-wide flex items-center gap-3">
              <span className="w-1.5 h-6 md:h-8 bg-clay rounded-full block shadow-sm"></span>
              {section.title}
            </h2>
          )}
          
          <div className="bg-paper/50 rounded-xl p-4 md:p-6 text-ink font-serif text-base md:text-lg leading-relaxed border-l-4 border-clay/50 shadow-inner">
            {typeof section.content === 'string' ? (
                <p className="text-justify">{section.content}</p>
            ) : (
                section.content
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default LayoutDetails;
