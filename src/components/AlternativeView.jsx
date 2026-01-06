import React, { useMemo } from "react";
import { Link } from "react-router";
import characters from "../const/characters";
import { BsSunrise, BsSunset } from "react-icons/bs";

const AlternativeView = ({ currentId, currentName }) => {
  // Find ALL versions including current one to show full timeline
  const variants = useMemo(() => {
    return characters
      .filter((c) => c.info.name === currentName)
      .sort((a, b) => {
        // Safe robust parse for Age
        const ageA = parseInt(a.info.age) || 0;
        const ageB = parseInt(b.info.age) || 0;
        return ageA - ageB;
      });
  }, [currentName]);

  // Only show if there is actually more than 1 version total
  if (variants.length <= 1) return null;

  return (
    <div className="fixed right-2 bottom-6 md:bottom-8 md:right-6 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto z-50 flex flex-col-reverse sm:flex-col gap-3 sm:gap-4 pointer-events-auto items-end">
      {/* Label only visible on large screens */}
      <div className="hidden sm:flex items-center gap-2 mb-2 justify-end text-ink/80 bg-paper/90 px-3 py-1 rounded-full shadow-sm border border-border backdrop-blur-sm self-end">
        <BsSunrise size={16} />
        <span className="text-xs font-bold font-title uppercase tracking-wider">
          Timeline
        </span>
        <BsSunset size={16} />
      </div>

      <div className="flex flex-col-reverse sm:flex-col gap-3 sm:gap-4 items-end">
        {variants.map((variant) => {
          const isCurrent = variant.id === parseInt(currentId);

          return (
            <Link
              key={variant.id}
              to={isCurrent ? "#" : `/characters/${variant.id}`}
              onClick={(e) => isCurrent && e.preventDefault()}
              className={`group relative flex items-center justify-end ${
                isCurrent ? "cursor-default" : "cursor-pointer"
              }`}
            >
              {/* Tooltip-like label appearing on left */}
              {!isCurrent && (
                <div className="absolute right-full mr-3 bg-paper border border-border px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-10 w-max hidden sm:block">
                  <div className="font-bold text-ink text-sm">
                    {variant.info.titles.split(",")[0]}
                  </div>
                  <div className="text-xs text-clay font-bold">
                    Arc - {variant.chapter}
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-paper border-t border-r border-border transform -translate-y-1/2 rotate-45"></div>
                </div>
              )}

              {/* Avatar Circle */}
              <div
                className={`relative shrink-0 transition-transform duration-300 ${
                  isCurrent
                    ? "scale-110 z-10"
                    : "group-hover:scale-110 active:scale-95"
                } w-12 h-12 sm:w-16 sm:h-16`}
              >
                <img
                  src={variant.images.portrait}
                  alt={variant.info.name}
                  className={`w-full h-full object-cover rounded-full shadow-md transition-colors ${
                    isCurrent
                      ? "border-4 border-clay shadow-[0_0_15px_rgba(var(--color-clay),0.6)]"
                      : "border-2 sm:border-4 border-paper group-hover:border-clay"
                  }`}
                />
                {/* Current Indicator Icon (Mobile/Desktop) or Age Badge */}
                <div
                  className={`absolute -bottom-1 -right-1 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-bold border-2 border-white shadow-sm ${
                    isCurrent ? "bg-ink" : "bg-clay"
                  }`}
                >
                  {variant.info.age}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AlternativeView;
