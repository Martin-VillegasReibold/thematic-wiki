import React, { useState, useMemo } from "react";

const FilterByLetter = ({ items, children }) => {
  const [selectedLetter, setSelectedLetter] = useState("All");

  const filteredItems = useMemo(() => {
    if (selectedLetter === "All") {
      return items;
    }
    return items.filter((item) => {
      const name = item.title;
      return name.trim().toUpperCase().startsWith(selectedLetter);
    });
  }, [items, selectedLetter]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filterControl = (
    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center md:justify-start">
      <button
        onClick={() => setSelectedLetter("All")}
        className={`px-3 py-1 text-sm sm:text-base rounded border transition-colors font-serif ${
          selectedLetter === "All"
            ? "bg-clay text-white border-clay"
            : "bg-paper text-ink border-border hover:bg-sand"
        }`}
      >
        All
      </button>
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => setSelectedLetter(letter)}
          className={`w-7 h-7 sm:w-8 sm:h-8 text-sm sm:text-base flex items-center justify-center rounded border transition-colors font-serif ${
            selectedLetter === letter
              ? "bg-clay text-white border-clay"
              : "bg-paper text-ink border-border hover:bg-sand"
          }`}
        >
          {letter}
        </button>
      ))}
    </div>
  );

  return children({ filteredItems, filterControl });
};

export default FilterByLetter;
