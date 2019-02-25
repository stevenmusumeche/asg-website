import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { TypographyStyle, GoogleFont } from "react-typography";

import Header from "./header";
import typography from "../styles/typography";
import { Body } from "../styles/alignment";

interface ILayoutProps {
  children: JSX.Element[];
}

const Layout = ({ children }: ILayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            acronym
          }
        }
      }
    `}
    render={data => (
      <>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <Header headerTitle={data.site.siteMetadata.acronym} />
        <Body>
          <main>{children}</main>
          <footer />
        </Body>
      </>
    )}
  />
);

export default Layout;
