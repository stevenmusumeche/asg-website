/**
 * Configures Typography.js and creates custom type styles
 * NOTE: Default export is used for Typography.js
 */
import Typography, { TypographyOptions } from "typography";
import React from "react";
import styled from "styled-components";

import GatsbyLink from "gatsby-link";

/**
 * Sets major font families for our design.
 * For a full list of options see: https://kyleamathews.github.io/typography.js/
 */
const config: TypographyOptions = {
  headerFontFamily: ["itc-avant-garde-gothic-pro", "sans-serif"],
  headerWeight: "400",
  bodyFontFamily: ["sofia-pro", "sans-serif"],
};
const typography = new Typography(config);
export default typography;

/**
 * Sets the id for anchor links
 */
export const SectionHeader = ({ children }: { children: string }) => (
  <h1 id={children.toLowerCase().replace(" ", "-")}>{children}</h1>
);

/**
 * Links with no decoration
 */
export const Link = styled(GatsbyLink)`
  text-decoration: none;
`;

/**
 * Links for navigation
 */
export const NavLink = styled(Link)`
  color: white;
  font-family: ${(config as any).headerFontFamily.join(`,`)};
  letter-spacing: 0.15em;
  margin-left: 2em;
  text-decoration: none;
  text-transform: uppercase;
`;

/**
 * Generates stripes for text using text-shadow
 * @param param0
 */
export const textStriper = ({
  colorArray,
  step,
  diagonal = true,
}: {
  colorArray: string[];
  step: number;
  diagonal?: boolean;
}) =>
  colorArray
    .map(
      (color, index) =>
        `-${(index + 1) * step}em ${
          diagonal ? `${(index + 1) * step}em` : 0
        } 0 ${color}`
    )
    .join(", ");
