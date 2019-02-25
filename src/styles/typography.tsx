/**
 * Configures Typography.js and creates custom type styles
 * NOTE: Default export is used for Typography.js
 */
import Typography, { TypographyOptions } from "typography";
import styled from "styled-components";

import { stripes } from "../styles/colors";

/**
 * Automatically fetches Google Fonts and sets major font families for our design.
 * For a full list of options see: https://kyleamathews.github.io/typography.js/
 */
const config: TypographyOptions = {
  googleFonts: [
    {
      name: "Futura",
      styles: ["400"],
    },
    {
      name: "Lobster",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Futura", "sans-serif"],
  headerWeight: "normal",
  bodyFontFamily: ["Lobster"],
};
const typography = new Typography(config);
export default typography;

/**
 * Custom typography
 */
export const StripedHeaderText = styled.h1`
  color: ${stripes.one}
  letter-spacing: 0.05em;
  margin-left: 0.1em;
  text-shadow: -0.05em 0 0 ${stripes.two}, -0.1em 0 0 ${stripes.three};
  text-transform: uppercase;
`;

export const SectionHeader = styled.h1`
  text-transform: uppercase;
`;