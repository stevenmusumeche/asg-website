import React from "react";

import { Container } from "../styles/alignment";
import { SectionHeader } from "../styles/typography";
import UpcomingEvents from "../components/UpcomingEvents";

const Events: React.FC = () => (
  <Container>
    <SectionHeader>Events</SectionHeader>
    <UpcomingEvents maxEvents={2} />
  </Container>
);

export default Events;
