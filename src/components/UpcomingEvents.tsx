import { format, isAfter, subDays } from "date-fns";
import React from "react";
import { useEvents } from "../hooks/useEvents";
import styled from "styled-components";
import ExternalLinkImage from "../images/external-link.svg";
import LoaderImage from "../images/loader.svg";
import { FontSmooth } from "../styles/typography";
import colors from "../styles/colors";

interface Props {
  maxEvents?: number;
}

const List = styled.ul`
  margin: 0;
  list-style-type: none;
  ${FontSmooth}

  @media screen and (min-width: 640px) {
    font-size: 1.2em;
  }
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  & + & {
    margin-top: 2em;
  }
`;

const EventName = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.25em;
  color: ${colors.white};
`;

const EventDate = styled.div``;

const EventLocation = styled.a`
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
  const { events, hasError, fetching } = useEvents();

  if (hasError) {
    return <div>Error loading events.</div>;
  }

  if (fetching) {
    return <img src={LoaderImage} style={{ height: 70 }} />;
  }

  if (events.length === 0) {
    return <List><ListItem><EventName>Check back soon!</EventName></ListItem></List>;
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
