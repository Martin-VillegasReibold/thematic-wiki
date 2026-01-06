import React from "react";
import { Link } from "react-router";
import ContentCard from "./ContentCard";
import SortList from "./SortList";
import FilterByLetter from "./FilterByLetter";
import { motion, AnimatePresence } from "framer-motion";

const LayoutCards = ({ items, basePath }) => {
  return (
    <div className="w-full">
      <FilterByLetter items={items}>
        {({ filteredItems, filterControl }) => (
          <SortList items={filteredItems}>
            {({ sortedItems, sortControl }) => (
              <>
                <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
                  <div className="flex-1 w-full md:w-auto">{filterControl}</div>
                  <div className="shrink-0">{sortControl}</div>
                </div>
                {sortedItems.length === 0 && (
                  <p className="text-center text-ink font-serif">
                    No items found.
                  </p>
                )}
                <motion.div 
                  layout
                  className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4"
                >
                  <AnimatePresence mode="popLayout">
                    {sortedItems.map((item) => {
                      const card = (
                        <ContentCard
                          title={item.displayName || item.title}
                          description={
                            item.displayDescription || item.description
                          }
                          image={item.image}
                        />
                      );

                      const path = basePath || `/${item.category}`;

                      return (
                        <motion.div
                          layout
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link to={`${path}/${item.id}`}>
                            {card}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              </>
            )}
          </SortList>
        )}
      </FilterByLetter>
    </div>
  );
};

export default LayoutCards;
