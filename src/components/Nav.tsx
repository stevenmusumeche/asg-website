import React from "react";

import { NavLink, FontSmooth } from "../styles/typography";
import styled from "styled-components";

const Wrapper = styled.div`
  ${FontSmooth}
`;

/**
 * List of nav links in the header
 */
const Nav: React.FC = () => (
  <Wrapper>
    <NavLink to={`#about`}>About&nbsp;ASG</NavLink>
    <NavLink to={`#past-events`}>Past&nbsp;Events</NavLink>
    <NavLink
      onClick={e => {
        e.preventDefault();
        alert("open model here");
      }}
      to={`#`}
    >
      Join&nbsp;Slack
    </NavLink>
  </Wrapper>
);

export default Nav;
