import React from "react";

import { NavLink } from "../styles/typography";

/**
 * List of nav links in the header
 */
export const Nav = () => (
  <div>
    {["events", "jobs", "about", "join"].map(x => (
      <NavLink href={`#${x}`}>{x}</NavLink>
    ))}
  </div>
);
