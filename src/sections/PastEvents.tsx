import React from "react";

import { Container } from "../styles/alignment";
import { SectionHeader, FontSmooth } from "../styles/typography";
import styled from "styled-components";
import { usePastEvents } from "../hooks/usePastEvents";

interface PastEventsProps {
  maxEvents?: number;
}

const PastEvents: React.FC<PastEventsProps> = ({ maxEvents }) => {
  const events = usePastEvents();
  const limitedEvents = maxEvents ? events.splice(0, maxEvents) : events;

  return (
    <StyledContainer>
      <SectionHeader>Past Events</SectionHeader>
      <List>
        {limitedEvents.map(event => (
          <ListItem key={event.id}>
            <EventName>{event.talkTitle}</EventName>
            <div>
              {event.presenter}, {event.date}{" "}
              {(event.slideUrl || event.videoUrl) && " ("}
              {event.slideUrl && (
                <a href={event.slideUrl} target="_blank">
                  View Slides
                </a>
              )}
              {event.videoUrl && (
                <>
                  <span>,&nbsp;</span>
                  <a href={event.videoUrl} target="_blank">
                    View Video
                  </a>
                </>
              )}
              {(event.slideUrl || event.videoUrl) && ")"}
            </div>
            <div />
            <TalkDescription dangerouslySetInnerHTML={{ __html: event.html }} />
          </ListItem>
        ))}
      </List>
      {maxEvents ? (
        <SeeAllLink href={`all-events`}>See All Past Events</SeeAllLink>
      ) : null}
    </StyledContainer>
  );
};

export default PastEvents;

const List = styled.ul`
  margin: 0;
  list-style-type: none;
  ${FontSmooth}
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
`;

const TalkDescription = styled.div`
  margin-top: 1em;
`;

const StyledContainer = styled(Container)`
  padding-top: 0;
`;

const SeeAllLink = styled.a`
  display: block;
  padding: 2em 0;
  text-align: right;
  cursor: pointer;
`;
