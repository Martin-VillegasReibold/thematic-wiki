import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const StatRadar = ({
  stats,
  strokeColor = "var(--color-border)",
  fillColor = "var(--color-sand)",
  fillOpacity = 0.35,
  compact = false,
}) => {
  const data = stats.map((stat) => ({
    stat: stat.label,
    value: stat.filled,
  }));

  const outerClass = compact
    ? "w-full h-full py-0 my-0 min-w-0 min-h-0"
    : "w-full h-64 my-4 py-2 min-w-0";

  return (
    <div
      className={`${outerClass} font-title`}
      role="region"
      aria-label="Stat Radar Chart"
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
        minWidth={0}
        minHeight={0}
      >
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="var(--color-border)" strokeDasharray="4 2" />
          <PolarAngleAxis
            dataKey="stat"
            stroke="var(--color-ink)"
            fontSize={13}
            tickLine={false}
            tick={{ fontWeight: "bold" }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 10]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Stats"
            dataKey="value"
            stroke={strokeColor}
            fill={fillColor}
            fillOpacity={fillOpacity}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatRadar;
