/**
 * Configures Typography.js and creates custom type styles
 * NOTE: Default export is used for Typography.js
 */
import Typography, { TypographyOptions } from "typography";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

import GatsbyLink from "gatsby-link";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth
  }
  
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  .slack-modal-content {
    position: relative;
    border: 1px solid #ccc;
    background: #fff;
    overflow: auto;
    webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    padding: 3em 2em;
    max-width: 750px;
    z-index: 100;
    & p {
      color: black;
    }
  }

  .slack-modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 99;
  }

  a {
    color: ${colors.blue};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const fonts = {
  default: "sofia-pro",
  display: "itc-avant-garde-gothic-pro",
  fallback: "system",
};

/**
 * Sets major font families for our design.
 * For a full list of options see: https://kyleamathews.github.io/typography.js/
 */
const config: TypographyOptions = {
  headerFontFamily: [fonts.default, fonts.fallback, "sans-serif"],
  headerWeight: "700",
  headerColor: colors.blue,
  bodyFontFamily: [fonts.default, fonts.fallback, "sans-serif"],
  bodyColor: colors.black,
  baseFontSize: "18px",
};
const typography = new Typography(config);
export default typography;

/**
 * Sets the id for anchor links
 */
const SectionHeaderStyled = styled.h2`
  font-size: 1.5em;

  @media screen and (min-width: 640px) {
    font-size: 2em;
  }
`;
export const SectionHeader = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <SectionHeaderStyled
    id={children.toLowerCase().replace(" ", "-")}
    className={className}
  >
    {children}
  </SectionHeaderStyled>
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
export const NavLink = styled.a`
  display: inline-block;
  margin: 0 0.5em 0.5em;
  font-family: ${fonts.display};
  font-weight: 700;
  letter-spacing: 0.15em;
  color: white;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin: 0 1em 0.5em;
  }
`;

/**
 * Used for better font rendering on Mac with white text on blue bg
 */
export const FontSmooth = () => `
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
