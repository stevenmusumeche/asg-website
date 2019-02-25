import React from "react";
import { TypographyStyle, GoogleFont } from "react-typography";

import Header from "./header";
import typography from "../styles/typography";
import { BodyContainer as Container } from "../styles/alignment";

interface ILayoutProps {
  children: JSX.Element[];
}

/**
 * Adds typography and header.  Sets width using Container
 */
const Layout = ({ children }: ILayoutProps) => (
  <>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Header /> 
    <Container>
      <main>{children}</main>
      <footer />
    </Container>
  </>
);

export default Layout;
