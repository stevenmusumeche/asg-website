import React from "react";
import styled from "styled-components";

import { textStriper } from "../styles/typography";
import { stripes, acadianaFlag } from "../styles/colors";

const BannerText = styled.h1`
  background: ${acadianaFlag.blue};
  color: white;
  font-size: 5em;
  font-weight: 900;
  letter-spacing: 0.05em;
  text-align: center;
  text-shadow: ${textStriper({
    colorArray: [stripes.yellow, stripes.red],
    step: 0.035,
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
