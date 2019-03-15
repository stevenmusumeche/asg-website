import React from "react";

import { Container } from "../styles/alignment";
import { SectionHeader } from "../styles/typography";

const PastEvents: React.FC = () => (
  <Container>
    <SectionHeader>Past Events</SectionHeader>
    <div>
      Hard code info on past events, including slides, photos, etc. Generated
      from Markdown?
    </div>
  </Container>
);

export default PastEvents;
