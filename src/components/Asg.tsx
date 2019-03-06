import React from "react";
import styled from "styled-components";

import { Link, textStriper } from "../styles/typography";
import colors from "../styles/colors";

const AsgText = styled.h1`
  color: white;
  text-decoration: none;
  letter-spacing: 0.05em;
  margin: 0 0 0 0.1em;
  text-shadow: ${textStriper({
    colorArray: [colors.yellow, colors.red],
    step: 0.05,
  })};
  text-transform: uppercase;
`;

/**
 * Striped acronym header
 * @param props requires headerTitle
 */
const Asg: React.FC = () => (
  <Link to="/">
    <AsgText>ASG</AsgText>
  </Link>
);

export default Asg