import React from "react";
import TimelineComponent from "../components/Timeline";
import { useApi } from "../hooks/use-api";
import PageTransition from "../components/PageTransition";
import Loading from "../components/Loading";

const Timeline = () => {
  const { data: tablets, loading } = useApi('tablets');

  if (loading) {
    return (
      <PageTransition>
        <Loading text="Loading Timeline..." />
      </PageTransition>
    );
  }

  const timelineEvents = (tablets || []).filter(
    (item) => item.category === "timeline"
  );

  return (
    <PageTransition>
      <TimelineComponent events={timelineEvents} />
    </PageTransition>
  );
};

export default Timeline;
