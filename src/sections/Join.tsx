import React from "react";

import SlackSignup from "../components/SlackSignup";
import { SectionHeader } from "../styles/typography";
import { Container } from "../styles/alignment";

const Join: React.FC = () => (
  <Container>
    <SectionHeader>Join</SectionHeader>
    <SlackSignup />
  </Container>
);

export default Join;