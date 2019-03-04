import React from "react";

import { Container } from "../styles/alignment";
import { SectionHeader } from "../styles/typography";

const About: React.FC = () => (
  <Container>
    <SectionHeader>About</SectionHeader>
    <p>About us... let's refrain from going full "bon-temps-roulez" here</p>
  </Container>
);

export default About;