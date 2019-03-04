import { distanceInWordsToNow, format, isAfter, subDays } from "date-fns";
import React from "react";
import { useEvents } from "../hooks/useEvents";

interface Props {
  maxEvents?: number;
}

const UpcomingEvents: React.FC<Props> = ({ maxEvents }) => {
  const events = useEvents();

  if (events.length === 0) {
    return <div>Loading indicator here</div>;
  }

  // only show upcoming events by hiding stuff older than 24 hours ago
  const cutoffDate = subDays(new Date(), 1);
  const upcomingEvents = events
    .filter(event => {
      return isAfter(new Date(event.startDate), cutoffDate);
    })
    .slice(0, maxEvents);
  return <ul>{renderEvents(upcomingEvents)}</ul>;
};

function renderEvents(events: ASGEvent[]) {
  return events.map(event => {
    const startTime = new Date(event.startDate);
    return (
      <li key={event.id}>
        <div>
          <strong>{event.name}</strong>
        </div>
        <div>
          {format(startTime, "dddd, MMM D") +
            " (in " +
            distanceInWordsToNow(startTime)}
          )
        </div>
        <div>{event.location}</div>
        <div>
          <a href={event.url} target="_blank">
            Meeting Details
          </a>
        </div>
        {event.description && (
          <div style={{ whiteSpace: "pre" }}>{event.description}</div>
        )}
      </li>
    );
  });
}

export default UpcomingEvents;