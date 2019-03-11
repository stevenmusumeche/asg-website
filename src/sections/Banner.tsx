import React from "react";
import styled from "styled-components";

import { fonts, textStriper, FontSmooth } from "../styles/typography";
import colors from "../styles/colors";

const BannerText = styled.h1`
  background: ${colors.blue};
  color: white;
  font-size: calc(1.5em + 2.5vw);
  font-weight: 700;
  font-family: ${fonts.display};
  letter-spacing: 0.05em;
  margin-bottom: 0;
  padding: .5em;
  text-align: center;
  text-shadow: ${textStriper({
    colorArray: [colors.yellow, colors.red],
    step: 0.04,
  })};
  text-transform: uppercase;
  ${FontSmooth}

  @media screen and (min-width: 560px) {
    font-size: calc(3em + 2.5vw);
  }
`;

const Banner: React.FC = () => (
  <BannerText>
    Acadiana
    <br />
    Software Group
  </BannerText>
);

export default Banner;
