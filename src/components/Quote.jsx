import React from "react";

const Quote = ({ quote, autor }) => {
  return (
    <div className="w-full mb-2">
      <blockquote className="italic text-base text-border border-l-8 border-clay pl-4 mb-2 bg-paper/60 rounded-r-xl shadow tracking-[0.5px]">
        <div className="mr-3">
          {quote}
          <span className="block text-xs text-clay mt-1">— {autor}</span>
        </div>
      </blockquote>
    </div>
  );
};

export default Quote;
