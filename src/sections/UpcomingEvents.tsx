import React from "react";
import styled from "styled-components";

import UpcomingEventsComp from "../components/UpcomingEvents";
import { Container as AlignmentContainer } from "../styles/alignment";
import colors from "../styles/colors";
import { fonts, FontSmooth } from "../styles/typography";

const Section = styled.section`
  background-color: ${colors.blue};
  color: ${colors.white};

  a {
    color: ${colors.white};
  }
`;

const Container = styled(AlignmentContainer)`
  position: relative;
  z-index: 1;
`;

const Header = styled.h2`
  margin-bottom: 0.75em;
  font-family: ${fonts.display};
  font-size: 1.1em;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  ${FontSmooth}
`;

const UpcomingEvents: React.FC = () => (
  <Section>
    <Container>
      <Header>Upcoming Events:</Header>
      <UpcomingEventsComp maxEvents={4} />
    </Container>
  </Section>
);

export default UpcomingEvents;
