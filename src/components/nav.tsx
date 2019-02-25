import React from "react";

import { NavContainer } from "../styles/typography";

export const Nav = () => (
  <NavContainer>
    {["events", "jobs", "about", "join"].map(x => (
      <a href={`#${x}`}>{x}</a>
    ))}
  </NavContainer>
);
