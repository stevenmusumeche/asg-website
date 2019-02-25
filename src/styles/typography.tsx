/**
 * Configures Typography.js and creates custom type styles
 * NOTE: Default export is used for Typography.js
 */
import Typography, { TypographyOptions } from "typography";
import React from "react";
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
 * Three-color striped text.  Used in header acronym
 */
export const StripedHeader = styled.h1`
  letter-spacing: 0.05em;
  margin: 0 0 0 0.1em;
  text-shadow: -0.05em 0 0 ${stripes.yellow}, -0.1em 0 0 ${stripes.red};
  text-transform: uppercase;
`;

/**
 * Sets the text to uppercase and sets the id for anchor links
 */
export const SectionHeader = ({ children }: { children: string }) => (
  <h1 id={children.toLowerCase()} style={{ textTransform: "uppercase" }}>
    {children}
  </h1>
);

/**
 * Links for navigation
 */
export const NavLink = styled.a`
  color: ${stripes.white};
  font-family: ${config.headerFontFamily.join(`,`)};
  margin-left: 1em;
  text-decoration: none;
  text-transform: uppercase;
`;
