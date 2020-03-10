import { useState, useEffect } from "react";

export function useEvents(
  sort: SortDirection = "ASC"
): { hasError: boolean; events: ASGEvent[], fetching: boolean } {
  const [fetching, setFetching] = useState(false);
  const [events, setEvents] = useState<ASGEvent[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch(
      "https://wnephqc0h5.execute-api.us-east-1.amazonaws.com/prod/events/upcoming"
    )
      .then(r => {
        setFetching(false)
        return r.json();
      })
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
      })
      .catch(e => {
        setFetching(false);
        setHasError(true);
      });
  }, []);

  return { events, hasError, fetching };
}
