import React, { useState } from "react";

const Tooltip = ({ children, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="relative group inline-block cursor-help"
      onClick={() => setIsActive(!isActive)}
      onMouseLeave={() => setIsActive(false)}
    >
      {children}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max max-w-50 z-50 pointer-events-none transition-opacity duration-200 ${
          isActive
            ? "opacity-100 visible"
            : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
        }`}
      >
        <div className="bg-clay text-ink text-xs font-serif rounded-md py-2 px-3 border-2 border-border shadow-xl text-center relative whitespace-normal">
          {/* Arrow */}
          <div className="absolute left-1/2 -bottom-1.5 w-3 h-3 bg-clay border-b-2 border-r-2 border-border transform -translate-x-1/2 rotate-45"></div>
          {text}
        </div>
      </div>
    </div>
  );
};
export default Tooltip;
