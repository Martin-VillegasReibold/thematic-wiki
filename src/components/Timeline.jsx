import React, { useRef, useMemo } from "react";
import ContentCard from "./ContentCard";
import { motion } from "framer-motion";

const DateLabel = ({ date, className }) => (
  <div
    className={`font-title text-xl text-ink/80 font-bold text-center px-4 select-none ${className}`}
  >
    {date}
  </div>
);

const TimelineItem = ({ date, title, description, image, isEven }) => (
  <motion.div 
    className="relative grid grid-rows-[1fr_auto_1fr] w-[320px] shrink-0 group"
    initial={{ opacity: 0, y: isEven ? -20 : 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    {/* Upper Section */}
    <div className="flex flex-col justify-end pb-6 px-2">
      {isEven ? (
        <ContentCard title={title} description={description} image={image} />
      ) : (
        <DateLabel date={date} className="pb-2" />
      )}
    </div>

    {/* Middle Section - Dot */}
    <div className="relative flex items-center justify-center h-4 w-full shrink-0">
      <motion.div 
        className="relative w-4 h-4 bg-ink border-4 box-content border-sand rounded-full z-10 shadow-sm"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
      />
    </div>

    {/* Lower Section */}
    <div className="flex flex-col justify-start pt-6 px-2">
      {isEven ? (
        <DateLabel date={date} className="pt-2" />
      ) : (
        <ContentCard title={title} description={description} image={image} />
      )}
    </div>
  </motion.div>
);

const Timeline = ({ events = [] }) => {
  const containerRef = useRef(null);

  const sortedEvents = useMemo(() => {
    const parseDate = (dateStr) => {
      if (!dateStr) return 99999;
      const lower = String(dateStr).toLowerCase();

      // Values for "Age of Myths" etc.
      if (
        lower.includes("myths") ||
        lower.includes("primordial") ||
        lower.includes("chaos")
      )
        return -10000;

      // "Year X"
      const yearMatch = lower.match(/year\s+(\d+)/);
      if (yearMatch) return parseInt(yearMatch[1], 10);

      // Fallback number search
      const numMatch = lower.match(/\d+/);
      if (numMatch) return parseInt(numMatch[0], 10);

      return 9999;
    };

    return [...events].sort((a, b) => parseDate(a.date) - parseDate(b.date));
  }, [events]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full overflow-hidden pb-8 pt-4 cursor-grab active:cursor-grabbing"
    >
      <motion.div 
        className="relative flex px-4 min-w-full w-max"
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.1}
        dragMomentum={true}
      >
        {/* Continuous Line */}
        {sortedEvents.length > 1 && (
          <motion.div 
            className="absolute top-1/2 left-44 right-68 h-1 bg-border/60 -translate-y-1/2 z-0" 
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        )}

        {sortedEvents.map((event, index) => (
          <TimelineItem
            key={index}
            index={index}
            date={event.date}
            title={event.title}
            description={event.description}
            image={event.image}
            isEven={index % 2 === 0}
          />
        ))}
        {/* Spacer for end padding */}
        <div className="w-24 shrink-0" />
      </motion.div>
    </div>
  );
};

export default Timeline;
