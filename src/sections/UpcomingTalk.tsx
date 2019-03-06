import React from "react";
import styled from "styled-components";

import UpcomingEvents from "../components/UpcomingEvents";
import { Container as AlignmentContainer } from "../styles/alignment";
import colors from "../styles/colors";
import MainStripe from "../components/MainStripe";

const Section = styled.div`
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 3em 0 0;

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
  font-size: 1.5em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const UpcomingTalk: React.FC = () => (
  <Section>
    <Container>
      <Header>Upcoming Talk</Header>
      <UpcomingEvents maxEvents={1} />
    </Container>
    <MainStripe />
  </Section>
);

export default UpcomingTalk;
