import React, { useState, useMemo } from "react";

const SortList = ({ items, children }) => {
  const [sortCriteria, setSortCriteria] = useState("none");

  const sortedItems = useMemo(() => {
    const itemsCopy = [...items];
    if (sortCriteria === "asc") {
      return itemsCopy.sort((a, b) => {
        const nameA = a.title;
        const nameB = b.title;
        return nameA.localeCompare(nameB);
      });
    } else if (sortCriteria === "desc") {
      return itemsCopy.sort((a, b) => {
        const nameA = a.title;
        const nameB = b.title;
        return nameB.localeCompare(nameA);
      });
    }
    return items;
  }, [items, sortCriteria]);

  const sortControl = (
    <div className="flex items-center justify-end">
      <label
        htmlFor="sort"
        className="mr-2 font-serif text-ink whitespace-nowrap"
      >
        Sort by:
      </label>
      <select
        onChange={(e) => setSortCriteria(e.target.value)}
        value={sortCriteria}
        className="p-2 bg-paper border border-border rounded text-ink font-serif focus:outline-none focus:border-clay"
      >
        <option value="none">None</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );

  return children({ sortedItems, sortControl });
};

export default SortList;
