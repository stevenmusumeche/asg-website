import React from "react";

import { NavLink } from "../styles/typography";
import styled from "styled-components";

const Wrapper = styled.div`
  font-smoothing: antialiased;
`;

/**
 * List of nav links in the header
 */
const Nav: React.FC = () => (
  <Wrapper>
    <NavLink to={`#about`}>About ASG</NavLink>
    <NavLink to={`#past-events`}>Past Events</NavLink>
    <NavLink
      onClick={e => {
        e.preventDefault();
        alert("open model here");
      }}
      to={`#`}
    >
      Join Slack
    </NavLink>
  </Wrapper>
);

export default Nav;
