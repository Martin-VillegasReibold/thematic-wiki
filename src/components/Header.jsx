import { Link } from "react-router";
import { useEffect, useState } from "react";
import useSearch from "../hooks/use-search";

import { GiBookmark, GiBookmarklet } from "react-icons/gi";

export default function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const { result: filteredTablets } = useSearch({ filter: searchQuery });

  useEffect(() => {
    if (onSearch) {
      onSearch(filteredTablets);
    }
  }, [filteredTablets, onSearch]);

  return (
    <header className="border-b-2 border-border bg-clay px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="font-title text-xl sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.25em] uppercase text-ink">
          <Link to="/">Tablet of Destinies</Link>
        </h1>

        <div className="flex items-center gap-2 border border-border px-3 py-1.5 bg-sand rounded">
          <Link to="/search">
            <input
              placeholder="Search..."
              className="bg-transparent focus:outline-none text-sm w-24 sm:w-32 md:w-40 placeholder:text-ink/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Link>
          {searchQuery ? (
            <button className="text-ink/60 hover:opacity-70 cursor-pointer">
              <GiBookmarklet size={16} onClick={() => setSearchQuery("")} />
            </button>
          ) : (
            <GiBookmark size={16} />
          )}
        </div>
      </div>
    </header>
  );
}
