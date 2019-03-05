import React from "react";

import { NavLink } from "../styles/typography";

/**
 * List of nav links in the header
 */
const Nav: React.FC = () => (
  <div>
    {["events", "about", "join"].map(x => (
      <NavLink key={x} to={`#${x}`}>{x}</NavLink>
    ))}
  </div>
);

export default Nav;
