import React from "react";
import { TypographyStyle, GoogleFont } from "react-typography";

import Header from "./header";
import typography from "../styles/typography";

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
    <main>{children}</main>
    <footer />
  </>
);

export default Layout;
