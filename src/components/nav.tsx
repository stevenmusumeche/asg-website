import React from "react";

import { NavLink } from "../styles/typography";

/**
 * List of nav links in the header
 */
export const Nav = () => (
  <div>
    {["events", "about", "join"].map(x => (
      <NavLink key={x} to={`#${x}`}>{x}</NavLink>
    ))}
  </div>
);
