import React from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import parseGrade from "../utils/grade-parser";


const StatBar = ({ label, filled, grade, description }) => {
  // Usar helper para parsear la nota (base + bonus)
  const { baseValue, bonus } = parseGrade(grade);
  return (
    <div className="flex items-center w-full gap-2">
      <Tooltip text={`${description || ""}`}>
        <span
          className="w-14 sm:w-24 font-bold text-border text-sm md:text-base shrink-0 text-left tracking-wide flex items-center"
          id={`stat-label-${label}`}
        >
          <span className="hidden sm:inline">{label}:</span>
          <span className="inline sm:hidden">{String(label).slice(0, 3)}:</span>
        </span>
      </Tooltip>
      <div className="flex-1 flex items-center justify-start gap-2 min-w-0">
        <div
          className="grid grid-cols-10 gap-0.5 sm:gap-1 w-full max-w-[18.75rem] min-w-0 -ml-5 sm:ml-0"
          role="progressbar"
          aria-valuenow={filled}
          aria-valuemin={0}
          aria-valuemax={10}
          aria-labelledby={`stat-label-${label}`}
          tabIndex={0}
        >
          {[...Array(10)].map((_, i) => {
            let bg = "bg-sand";
            if (i < baseValue) bg = "bg-clay";
            else if (i < baseValue + bonus) bg = "bg-[#e57373]";
            
            const segmentClasses = `${bg} border border-border w-full ${
              i === 0
                ? "sm:rounded-l-[8px] rounded-l-[6px]"
                : i === 9
                ? "sm:rounded-r-[8px] rounded-r-[6px]"
                : "sm:rounded-[6px] rounded-[4px]"
            } h-[10px] sm:h-[12px]`;
            
            return (
              <motion.span
                key={i}
                className={segmentClasses}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                aria-hidden={i >= filled}
              />
            );
          })}
        </div>
        <Tooltip
          text={`A foundation of ${baseValue}, circumstantially ascending to ${
            baseValue + bonus
          }`}
        >
          <div className="w-8 sm:w-10 text-center font-bold text-border text-sm md:text-base drop-shadow shrink-0">
            {grade}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default StatBar;
