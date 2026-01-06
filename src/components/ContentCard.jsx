import React from "react";

const ContentCard = ({ title, description, image }) => {
  return (
    <div className="w-full px-2 h-full">
      <div className="bg-sand/60 backdrop-blur-sm p-4 rounded-lg border border-border/30 shadow-sm hover:scale-105 transition-transform duration-300 h-full flex flex-col select-none ">
        {image && (
          <div className="mb-3 overflow-hidden rounded-md border border-border/20 shrink-0 hover:scale-[1.02] transition-transform duration-200">
            <img
              src={image}
              alt={title}
              className="w-full h-32 object-cover pointer-events-none "
            />
          </div>
        )}
        <div className="text-xl font-bold text-ink font-title mb-2 text-center">
          {title}
        </div>
        <div className="text-ink/80 font-serif text-sm text-justify leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
