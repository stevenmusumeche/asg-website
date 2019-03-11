import React from "react";
import { TypographyStyle, GoogleFont } from "react-typography";

import Header from "./Header";
import typography from "../styles/typography";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

/**
 * Adds typography and header.  Sets width using Container
 */
const Layout: React.FC<Props> = ({ children }) => (
  <>
    <TypographyStyle typography={typography} />
    <Header />
    <main>{children}</main>
    <footer />
  </>
);

export default Layout;