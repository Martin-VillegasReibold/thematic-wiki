import React, {useMemo} from "react";
/**
 * this hook provides search functionality over the tablets dataset using Fuse.js library for fuzzy searching.
 * It accepts a filter string and returns the filtered results with matched terms highlighted.
 */

import { useApi } from "./use-api";
import Fuse from "fuse.js";

function formatMatch({ indices, value }) {
  let lastIndex = 0;
  return (
    <span>
      {indices.map(([start, end], index) => {
        const nonMatch = value.slice(lastIndex, start);
        lastIndex = end + 1;
        const match = value.slice(start, lastIndex);
        return (
          <React.Fragment key={index}>
            {nonMatch}
            <b className="bg-clay rounded-md">{match}</b>
          </React.Fragment>
        );
      })}
      {value.slice(lastIndex)}
    </span>
  );
}

const useSearch = ({ filter = "" }) => {
  const { data: tablets } = useApi('tablets');

  const fuse = useMemo(() => {
    if (!tablets || tablets.length === 0) return null;
    return new Fuse(tablets, {
      keys: ["title", "description"],
      includeMatches: true,
      threshold: 0.3,
      ignoreLocation: true,
      minMatchCharLength: 4,
    });
  }, [tablets]);

  const filteredTablets = useMemo(() => {
    if (!tablets) return [];
    if (!filter) return tablets;
    if (!fuse) return tablets;

    return fuse.search(filter).map((result) => {
      let displayName = result.item.title;
      let displayDescription = result.item.description;

      result.matches.forEach((match) => {
        if (match.key === "title") {
          displayName = formatMatch(match);
        } else if (match.key === "description") {
          displayDescription = formatMatch(match);
        }
      });

      return {
        ...result.item,
        displayName,
        displayDescription,
      };
    });
  }, [filter, fuse, tablets]);

  return { result: filteredTablets };
};

export default useSearch;
