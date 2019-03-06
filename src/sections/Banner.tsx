import React from "react";
import styled from "styled-components";

import { textStriper } from "../styles/typography";
import colors from "../styles/colors";

const BannerText = styled.h1`
  background: ${colors.blue};
  color: white;
  font-size: 5em;
  font-weight: 900;
  letter-spacing: 0.05em;
  margin-bottom: 0;
  padding: .5em 0;
  text-align: center;
  text-shadow: ${textStriper({
    colorArray: [colors.yellow, colors.red],
    step: 0.05,
  })};
  text-transform: uppercase;
`;

const Banner: React.FC = () => (
  <BannerText>
    Acadiana
    <br />
    Software Group
  </BannerText>
);

export default Banner;
