import React from "react";

import { Container } from "../styles/alignment";
import { SectionHeader, FontSmooth } from "../styles/typography";
import styled from "styled-components";
import { usePastEvents } from "../hooks/usePastEvents";

const PastEvents: React.FC = () => {
  const events = usePastEvents();

  return (
    <StyledContainer>
      <SectionHeader>Past Events</SectionHeader>
      <List>
        {events.map(event => (
          <ListItem key={event.id}>
            <EventName>{event.talkTitle}</EventName>
            <div>
              {event.presenter}, {event.date} (
              {event.slideUrl && (
                <a href={event.slideUrl} target="_blank">
                  View Slides
                </a>
              )}
              )
            </div>
            <div />
            <TalkDescription dangerouslySetInnerHTML={{ __html: event.html }} />
          </ListItem>
        ))}
      </List>
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
