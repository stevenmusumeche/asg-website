import { format, isAfter, subDays } from "date-fns";
import React from "react";
import { useEvents } from "../hooks/useEvents";
import styled from "styled-components";
import ExternalLinkImage from "../images/external-link.svg";
import LoaderImage from "../images/loader.svg";

interface Props {
  maxEvents?: number;
}

const List = styled.ul`
  margin: 0;
  margin-bottom: -8em;
  list-style-type: none;
  font-smoothing: antialiased;
`;

const ListItem = styled.li`
  margin: 0 0 2em 0;
  padding: 0;
`;

const EventName = styled.h3`
  font-size: 2em;
  margin-bottom: 0em;
`;

const EventDate = styled.div`
  font-size: 1.2em;
`;

const EventLocation = styled.a`
  font-size: 1.2em;
  display: inline-block;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLinkIcon = styled.img`
  height: 0.6em;
  margin-left: 0.3em;
`;

const UpcomingEvents: React.FC<Props> = ({ maxEvents }) => {
  const events = useEvents();

  if (events.length === 0) {
    return <img src={LoaderImage} style={{ height: 70 }} />;
  }

  // only show upcoming events by hiding stuff older than 24 hours ago
  const cutoffDate = subDays(new Date(), 1);
  const upcomingEvents = events
    .filter(event => {
      return isAfter(new Date(event.startDate), cutoffDate);
    })
    .slice(0, maxEvents);
  return <List>{renderEvents(upcomingEvents)}</List>;
};

function renderEvents(events: ASGEvent[]) {
  return events.map(event => {
    const startTime = new Date(event.startDate);
    return (
      <ListItem key={event.id}>
        <EventName>
          {event.name}
          <sup>
            <a href={event.url} target="_blank">
              <ExternalLinkIcon src={ExternalLinkImage} />
            </a>
          </sup>
        </EventName>
        <EventDate>{format(startTime, "dddd, MMMM D")}</EventDate>
        <EventLocation
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(
            event.location
          )}`}
          target="_blank"
        >
          {event.location}
        </EventLocation>
      </ListItem>
    );
  });
}

export default UpcomingEvents;
