import React from "react";
import TimelineComponent from "../components/Timeline";
import tables from "../const/tablets.js";
import PageTransition from "../components/PageTransition";

const timelineEvents = tables.filter((item) => item.category === "timeline");

const Timeline = () => {
  return (
    <PageTransition>
      <TimelineComponent events={timelineEvents} />
    </PageTransition>
  );
};

export default Timeline;
