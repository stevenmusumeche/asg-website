import { useState, useEffect } from "react";

export function useEvents(sort: SortDirection = "ASC"): ASGEvent[] {
  const [events, setEvents] = useState<ASGEvent[]>([]);

  useEffect(() => {
    fetch(
      "https://wnephqc0h5.execute-api.us-east-1.amazonaws.com/prod/events/upcoming"
    )
      .then(r => r.json())
      .then(r => {
        const events: ASGEvent[] = r.events;

        return setEvents(
          events.sort((a, b) => {
            if (sort === "ASC") {
              return (
                new Date(a.startDate).getTime() -
                new Date(b.startDate).getTime()
              );
            }
            return (
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
            );
          })
        );
      });
  }, []);

  return events;
}
