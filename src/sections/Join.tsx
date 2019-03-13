import React from "react";

import styled from "styled-components";

import { SectionHeader } from "../styles/typography";
import { Container } from "../styles/alignment";
import colors from "../styles/colors";

const BlueSection = styled.section`
  position: relative;
  padding: 2em 0;
  background-color: ${colors.blue};
  color: ${colors.white};
  text-align: center;
  z-index: 1;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 640px) {
    flex-flow: row;
  }
`;

const InlineSectionHeader = styled(SectionHeader)`
  @media screen and (min-width: 640px) {
    margin-bottom: 0;
    margin-right: 0.5em;
  }
`;

const Join: React.FC = () => (
  <BlueSection>
    <Container>
      <FlexWrapper>
        <InlineSectionHeader>Some Content Here</InlineSectionHeader>
      </FlexWrapper>
    </Container>
  </BlueSection>
);

export default Join;
