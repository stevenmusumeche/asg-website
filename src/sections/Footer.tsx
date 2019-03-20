import React from "react";

import styled from "styled-components";

import { SectionHeader } from "../styles/typography";
import { Container } from "../styles/alignment";
import colors from "../styles/colors";
import Flag from "../images/flag.svg";

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
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
`;

const Img = styled.img`
  margin: 0 1em 0 0;
`;

const Footer: React.FC = () => (
  <BlueSection>
    <Container>
      <FlexWrapper>
        <Img src={Flag} style={{ width: 50 }} />
        <div>Acadiana Software Group is housed in Lafayette, LA</div>
      </FlexWrapper>
    </Container>
  </BlueSection>
);

export default Footer;
