import React from "react";
import styled from "styled-components";

import UpcomingEvents from "../components/UpcomingEvents";
import { Container as AlignmentContainer } from "../styles/alignment";
import colors from "../styles/colors";
import MainStripe from "../components/MainStripe";

const Section = styled.div`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 2em 0 0;

  a {
    color: ${colors.white};
  }
`;

const Container = styled(AlignmentContainer)`
  margin-bottom: -1vw;
  position: relative;
  z-index: 1;
`;

const Header = styled.h1`
  font-size: 1.1em;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-smoothing: antialiased;
`;

const UpcomingTalk: React.FC = () => (
  <Section>
    <Container>
      <Header>Upcoming Events:</Header>
      <UpcomingEvents maxEvents={2} />
    </Container>
    <MainStripe />
  </Section>
);

export default UpcomingTalk;
